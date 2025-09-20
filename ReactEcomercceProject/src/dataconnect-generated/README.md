# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListBooks*](#listbooks)
  - [*GetUserListings*](#getuserlistings)
- [**Mutations**](#mutations)
  - [*CreateUser*](#createuser)
  - [*UpdateListingStatus*](#updatelistingstatus)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListBooks
You can execute the `ListBooks` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listBooks(): QueryPromise<ListBooksData, undefined>;

interface ListBooksRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListBooksData, undefined>;
}
export const listBooksRef: ListBooksRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listBooks(dc: DataConnect): QueryPromise<ListBooksData, undefined>;

interface ListBooksRef {
  ...
  (dc: DataConnect): QueryRef<ListBooksData, undefined>;
}
export const listBooksRef: ListBooksRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listBooksRef:
```typescript
const name = listBooksRef.operationName;
console.log(name);
```

### Variables
The `ListBooks` query has no variables.
### Return Type
Recall that executing the `ListBooks` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListBooksData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListBooksData {
  books: ({
    id: UUIDString;
    title: string;
    author: string;
  } & Book_Key)[];
}
```
### Using `ListBooks`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listBooks } from '@dataconnect/generated';


// Call the `listBooks()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listBooks();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listBooks(dataConnect);

console.log(data.books);

// Or, you can use the `Promise` API.
listBooks().then((response) => {
  const data = response.data;
  console.log(data.books);
});
```

### Using `ListBooks`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listBooksRef } from '@dataconnect/generated';


// Call the `listBooksRef()` function to get a reference to the query.
const ref = listBooksRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listBooksRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.books);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.books);
});
```

## GetUserListings
You can execute the `GetUserListings` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserListings(vars: GetUserListingsVariables): QueryPromise<GetUserListingsData, GetUserListingsVariables>;

interface GetUserListingsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserListingsVariables): QueryRef<GetUserListingsData, GetUserListingsVariables>;
}
export const getUserListingsRef: GetUserListingsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserListings(dc: DataConnect, vars: GetUserListingsVariables): QueryPromise<GetUserListingsData, GetUserListingsVariables>;

interface GetUserListingsRef {
  ...
  (dc: DataConnect, vars: GetUserListingsVariables): QueryRef<GetUserListingsData, GetUserListingsVariables>;
}
export const getUserListingsRef: GetUserListingsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserListingsRef:
```typescript
const name = getUserListingsRef.operationName;
console.log(name);
```

### Variables
The `GetUserListings` query requires an argument of type `GetUserListingsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserListingsVariables {
  sellerId: UUIDString;
}
```
### Return Type
Recall that executing the `GetUserListings` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserListingsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserListingsData {
  listings: ({
    id: UUIDString;
    book: {
      title: string;
      author: string;
    };
      price: number;
      status: string;
  } & Listing_Key)[];
}
```
### Using `GetUserListings`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserListings, GetUserListingsVariables } from '@dataconnect/generated';

// The `GetUserListings` query requires an argument of type `GetUserListingsVariables`:
const getUserListingsVars: GetUserListingsVariables = {
  sellerId: ..., 
};

// Call the `getUserListings()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserListings(getUserListingsVars);
// Variables can be defined inline as well.
const { data } = await getUserListings({ sellerId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserListings(dataConnect, getUserListingsVars);

console.log(data.listings);

// Or, you can use the `Promise` API.
getUserListings(getUserListingsVars).then((response) => {
  const data = response.data;
  console.log(data.listings);
});
```

### Using `GetUserListings`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserListingsRef, GetUserListingsVariables } from '@dataconnect/generated';

// The `GetUserListings` query requires an argument of type `GetUserListingsVariables`:
const getUserListingsVars: GetUserListingsVariables = {
  sellerId: ..., 
};

// Call the `getUserListingsRef()` function to get a reference to the query.
const ref = getUserListingsRef(getUserListingsVars);
// Variables can be defined inline as well.
const ref = getUserListingsRef({ sellerId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserListingsRef(dataConnect, getUserListingsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.listings);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.listings);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUser(): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface CreateUserRef {
  ...
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
}
export const createUserRef: CreateUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserRef:
```typescript
const name = createUserRef.operationName;
console.log(name);
```

### Variables
The `CreateUser` mutation has no variables.
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser } from '@dataconnect/generated';


// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef } from '@dataconnect/generated';


// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateListingStatus
You can execute the `UpdateListingStatus` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateListingStatus(vars: UpdateListingStatusVariables): MutationPromise<UpdateListingStatusData, UpdateListingStatusVariables>;

interface UpdateListingStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateListingStatusVariables): MutationRef<UpdateListingStatusData, UpdateListingStatusVariables>;
}
export const updateListingStatusRef: UpdateListingStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateListingStatus(dc: DataConnect, vars: UpdateListingStatusVariables): MutationPromise<UpdateListingStatusData, UpdateListingStatusVariables>;

interface UpdateListingStatusRef {
  ...
  (dc: DataConnect, vars: UpdateListingStatusVariables): MutationRef<UpdateListingStatusData, UpdateListingStatusVariables>;
}
export const updateListingStatusRef: UpdateListingStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateListingStatusRef:
```typescript
const name = updateListingStatusRef.operationName;
console.log(name);
```

### Variables
The `UpdateListingStatus` mutation requires an argument of type `UpdateListingStatusVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateListingStatusVariables {
  id: UUIDString;
  status: string;
}
```
### Return Type
Recall that executing the `UpdateListingStatus` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateListingStatusData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateListingStatusData {
  listing_update?: Listing_Key | null;
}
```
### Using `UpdateListingStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateListingStatus, UpdateListingStatusVariables } from '@dataconnect/generated';

// The `UpdateListingStatus` mutation requires an argument of type `UpdateListingStatusVariables`:
const updateListingStatusVars: UpdateListingStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateListingStatus()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateListingStatus(updateListingStatusVars);
// Variables can be defined inline as well.
const { data } = await updateListingStatus({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateListingStatus(dataConnect, updateListingStatusVars);

console.log(data.listing_update);

// Or, you can use the `Promise` API.
updateListingStatus(updateListingStatusVars).then((response) => {
  const data = response.data;
  console.log(data.listing_update);
});
```

### Using `UpdateListingStatus`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateListingStatusRef, UpdateListingStatusVariables } from '@dataconnect/generated';

// The `UpdateListingStatus` mutation requires an argument of type `UpdateListingStatusVariables`:
const updateListingStatusVars: UpdateListingStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateListingStatusRef()` function to get a reference to the mutation.
const ref = updateListingStatusRef(updateListingStatusVars);
// Variables can be defined inline as well.
const ref = updateListingStatusRef({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateListingStatusRef(dataConnect, updateListingStatusVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.listing_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.listing_update);
});
```

