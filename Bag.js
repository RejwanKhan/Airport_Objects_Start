class Bag {
  constructor(weight) {
    if (!weight) {
      throw new Error("bag needs weight");
    }
    this.weight = weight;
  }
}

//Export the module
module.exports = Bag;
