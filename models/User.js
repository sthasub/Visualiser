const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require('dotenv');
dotenv.config();

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  staffId: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  cpassword: { type: String, required: true },
  diseases: [
    {
      type: Schema.Types.ObjectId,
      ref: "Disease"
    }
  ],
  tokens: [
    {
      token: { type: String, required: true }
    }
  ],
  date: { type: Date, default: Date.now },
});

userSchema.pre("save", async function(next){
  if(this.isModified('password')){
      this.password = await bcrypt.hash(this.password,12);
      this.cpassword = await bcrypt.hash(this.cpassword,12);
  }
  next();
});

userSchema.methods.generateToken = async function(){
  try {
      let token = jwt.sign({id:this._id}, process.env.SECRECT_KEY);
      this.tokens = this.tokens.concat({token: token});
      await this.save();
      return token;
  } catch (error) {
      console.log(error);
  }
}

const User = mongoose.model("User", userSchema);

module.exports = User;
