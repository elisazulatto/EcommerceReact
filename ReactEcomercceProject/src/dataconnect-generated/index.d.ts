import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Book_Key {
  id: UUIDString;
  __typename?: 'Book_Key';
}

export interface CreateUserData {
  user_insert: User_Key;
}

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

export interface GetUserListingsVariables {
  sellerId: UUIDString;
}

export interface ListBooksData {
  books: ({
    id: UUIDString;
    title: string;
    author: string;
  } & Book_Key)[];
}

export interface Listing_Key {
  id: UUIDString;
  __typename?: 'Listing_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface Transaction_Key {
  id: UUIDString;
  __typename?: 'Transaction_Key';
}

export interface UpdateListingStatusData {
  listing_update?: Listing_Key | null;
}

export interface UpdateListingStatusVariables {
  id: UUIDString;
  status: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface ListBooksRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListBooksData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListBooksData, undefined>;
  operationName: string;
}
export const listBooksRef: ListBooksRef;

export function listBooks(): QueryPromise<ListBooksData, undefined>;
export function listBooks(dc: DataConnect): QueryPromise<ListBooksData, undefined>;

interface UpdateListingStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateListingStatusVariables): MutationRef<UpdateListingStatusData, UpdateListingStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateListingStatusVariables): MutationRef<UpdateListingStatusData, UpdateListingStatusVariables>;
  operationName: string;
}
export const updateListingStatusRef: UpdateListingStatusRef;

export function updateListingStatus(vars: UpdateListingStatusVariables): MutationPromise<UpdateListingStatusData, UpdateListingStatusVariables>;
export function updateListingStatus(dc: DataConnect, vars: UpdateListingStatusVariables): MutationPromise<UpdateListingStatusData, UpdateListingStatusVariables>;

interface GetUserListingsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserListingsVariables): QueryRef<GetUserListingsData, GetUserListingsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserListingsVariables): QueryRef<GetUserListingsData, GetUserListingsVariables>;
  operationName: string;
}
export const getUserListingsRef: GetUserListingsRef;

export function getUserListings(vars: GetUserListingsVariables): QueryPromise<GetUserListingsData, GetUserListingsVariables>;
export function getUserListings(dc: DataConnect, vars: GetUserListingsVariables): QueryPromise<GetUserListingsData, GetUserListingsVariables>;

