const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const diseaseSchema = new Schema({
  name: { type: String, required: true },
  patients: [
    {
      type: Schema.Types.ObjectId,
      ref:"Patient"
    }
  ]
});

const Disease = mongoose.model("Disease", diseaseSchema);

module.exports = Disease;


//  chartData: { type : Array , "default" : [] },