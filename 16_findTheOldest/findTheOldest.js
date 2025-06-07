const findTheOldest = function(arr) {
  let oldest = arr.reduce(([oldestPerson, oldestAge], person) => {

    if (person.yearOfDeath == undefined) {
      person.yearOfDeath = new Date().getFullYear();
    }

    const personAge = person.yearOfDeath - person.yearOfBirth;
    if (personAge > oldestAge) {
      return [person, personAge]; // returns this person as the new oldest
    } else {
      return [oldestPerson, oldestAge]; // keep old accumulater
    }
  }
  , ['', 0])
  return oldest[0]; // Returns oldest Persons name
};

// Do not edit below this line
module.exports = findTheOldest;