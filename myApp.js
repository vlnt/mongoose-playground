require('dotenv').config();
var mongoose = require('mongoose');
const dbPath = process.env['MONGO_URI'];
const { Schema } = mongoose;

mongoose.connect( dbPath, { useNewUrlParser: true, useUnifiedTopology: true });


  const petSchema = new Schema({
    name:  String,
    age: Number,
    favoriteFoods: [String]
  });

let Pet = mongoose.model("Pet", petSchema);
//Pet.createCollection();

const createAndSavePerson = (done) => {
  var cat = new Pet({name: "Marsik",
                            age: 1,
                            favoriteFoods: ["viskas","gourmet"]});
  cat.save(function(err, data){
    if(err) {
      return done(err);
    }
    console.log(data);//return done(null, data);
  });
     
};
//Test invocation
//createAndSavePerson();

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PetModel = Pet;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
