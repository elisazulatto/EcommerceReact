import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'reactecomercceproject',
  location: 'us-central1'
};

export const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';

export function createUser(dc) {
  return executeMutation(createUserRef(dc));
}

export const listBooksRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListBooks');
}
listBooksRef.operationName = 'ListBooks';

export function listBooks(dc) {
  return executeQuery(listBooksRef(dc));
}

export const updateListingStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateListingStatus', inputVars);
}
updateListingStatusRef.operationName = 'UpdateListingStatus';

export function updateListingStatus(dcOrVars, vars) {
  return executeMutation(updateListingStatusRef(dcOrVars, vars));
}

export const getUserListingsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserListings', inputVars);
}
getUserListingsRef.operationName = 'GetUserListings';

export function getUserListings(dcOrVars, vars) {
  return executeQuery(getUserListingsRef(dcOrVars, vars));
}

