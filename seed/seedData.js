const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/healthVisualiser", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}
);




// db.User.create(
//     {
//         name: "subhash",
//         email: "sub@gmail.com",
//         password: "samikshya",
//     }
// ).then(user => {
//     console.log("SUbhash");
// });

async function get(){
    // const f =  await db.Disease.findOne({name:""});
    // if(f === null)
    //     console.log("NULL");
    // else
    //     console.log(f);
    // process.exit(0);

    let user = await db.User.find({}).populate(
        {
            path:"diseases",
            model:"Disease",
            populate:{
                path:"patients",
                model:"Patient"
            }
        }
    );
    //PIE Charts MALE and Female with Diabetes
    let male = "";
    let female = "";
    const diseases = user[0].diseases.filter(disease => disease.name === "diabetes");
    diseases.map(d => {
        male = d.patients.filter(p=>p.gender === "Male");
        female = d.patients.filter(p=>p.gender === "Female");
    });    


    // for(let i=0;i<user[0].diseases.length;i++){
        

    //     for(let j=0;j<user[0].diseases[i].patients.length;j++){
    //         if(user[0].diseases[i].patients[j].gender === "Male")
    //             male.push(user[0].diseases[i].patients[j].gender);
    //             console.log(user[0].diseases[i].patients[j].gender);
    //         if(user[0].diseases[i].patients[j].gender === "Female"){
    //             female.push(user[0].diseases[i].patients[j]);
    //             console.log(user[0].diseases[i].patients[j].gender);
    //         }
    //     }
    //     // console.log(JSON.stringify(user[0].diseases[i],null,3)  );
    // }
     console.log(male.length, male);
     console.log(female.length, female);
    process.exit(0);
} 

//  get();

// db.Disease.create({ name: "diabetes" }).then(({ _id }) => {
//     db.User.findOneAndUpdate({name:"subhash"}, { $push: { diseases: _id } }, { new: true }).then(s => {
//         console.log("diabetes");
//     });
// }).catch(err => console.error(err));


// db.Patient.create({
//     name: "Pawanjeet",
//     age: 34,
//     gender: "Female",
//     state: "NT"
// }).then(({ _id }) => {
//     db.Disease.findOneAndUpdate({name:"diabetes"}, { $push: { patients: _id } }, { new: true }).then(s => {
//         console.log("Patient One");

//     });
// }).catch(err => {
//     console.error(err);
// }
// );



// db.User.create(
//     {
//         name: "samikshya",
//         email: "sami@gmail.com",
//         password: "subhash",
//     }
// ).then(user => {
//     console.log(user);
// });

db.Disease.create({ name: "bronchitis" }).then(({ _id }) => {
    db.User.findOneAndUpdate({}, { $push: { diseases: _id } }, { new: true }).then(s => {
        console.log(" bronchitis");
    });
}).catch(err => console.error(err));


db.Patient.create({
    name: "Jaspreet",
    age: 40,
    gender: "Female",
    state: "NSW"
}).then(({ _id }) => {
    db.Disease.findOneAndUpdate({name:"bronchitis"}, { $push: { patients: _id } }, { new: true }).then(s => {
        console.log("Patient THree");
        process.exit(0);

    });
}).catch(err => {
    console.error(err);
    process.exit(1);
}
);



// db.User
//     .remove({})
//     .then(() => db.User.collection.insertMany(healthData))
//     .then(data => {
//         console.log(data.result.n + " records inserted!");
//         process.exit(0);
//     })
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });

// const healthData = [{
//     name: "Dr. samikshya",
//     email: "sam@gmail.com",
//     password: "password",
//     dieseses: [
//         {
//             name: "diabetes",
//             patients: [
//                 {
//                     name: "ram",
//                     age: 23,
//                     state: "SA",
//                     gender: "Male"
//                 }, {
//                     name: "shyam",
//                     age: 40,
//                     state: "VIC",
//                     gender: "Male"
//                 }
//             ]
//         },
//         {
//             name: "bronchitis",
//             patients: [
//                 {
//                     name: "jon",
//                     age: 42,
//                     state: "VIC",
//                     gender: "Male"
//                 },
//                 {
//                     name: "sun",
//                     age: 20,
//                     state: "NSW",
//                     gender: "Male"
//                 }
//             ]
//         }
//     ],
//     date: new Date(Date.now())
// }];