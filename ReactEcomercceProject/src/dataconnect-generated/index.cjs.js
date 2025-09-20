const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'reactecomercceproject',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dc) {
  return executeMutation(createUserRef(dc));
};

const listBooksRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListBooks');
}
listBooksRef.operationName = 'ListBooks';
exports.listBooksRef = listBooksRef;

exports.listBooks = function listBooks(dc) {
  return executeQuery(listBooksRef(dc));
};

const updateListingStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateListingStatus', inputVars);
}
updateListingStatusRef.operationName = 'UpdateListingStatus';
exports.updateListingStatusRef = updateListingStatusRef;

exports.updateListingStatus = function updateListingStatus(dcOrVars, vars) {
  return executeMutation(updateListingStatusRef(dcOrVars, vars));
};

const getUserListingsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserListings', inputVars);
}
getUserListingsRef.operationName = 'GetUserListings';
exports.getUserListingsRef = getUserListingsRef;

exports.getUserListings = function getUserListings(dcOrVars, vars) {
  return executeQuery(getUserListingsRef(dcOrVars, vars));
};
