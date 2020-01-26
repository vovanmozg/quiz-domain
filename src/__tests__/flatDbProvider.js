// TODO: import from module ruby-questions
const questions = require('../questionsDb');

class Collection {
  constructor(name) {
    this.name = name;
  }

  // @query [Hash] for example { id: '123123' }
  findOne(query) {
    let collection;

    if(this.name === 'questions') {
      collection = questions;
    }

    const finder = (element) => {
      const presentInQuestion = ([propertyKey, propertyValue]) => element[propertyKey] === propertyValue;
      return Object.entries(query).every(presentInQuestion);
    };

    return collection.find(finder)
  }
}

class FlatDbProvider {
  collection(name) {
    return new Collection(name);
  }
}

module.exports = FlatDbProvider;
