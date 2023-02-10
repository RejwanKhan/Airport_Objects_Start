class Person {
  constructor(name, bags = []) {
    this.name = name;
    this.bags = bags;
  }
  addBag(bag) {
    this.bags.push(bag);
  }
}

//Export the Module

module.exports = Person;
