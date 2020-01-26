let provider;
let connection;

function setProvider(providerInstance) {
  provider = providerInstance;
}

// function connect(connectionParams) {
//   connection = provider.connect(connectionParams);
// }

function collection(name) {
  provider.collection(name);
}

module.exports = {
  setProvider,
  connect,
  collection
};
