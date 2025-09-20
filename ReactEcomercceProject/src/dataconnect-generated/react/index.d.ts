import { CreateUserData, ListBooksData, UpdateListingStatusData, UpdateListingStatusVariables, GetUserListingsData, GetUserListingsVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useListBooks(options?: useDataConnectQueryOptions<ListBooksData>): UseDataConnectQueryResult<ListBooksData, undefined>;
export function useListBooks(dc: DataConnect, options?: useDataConnectQueryOptions<ListBooksData>): UseDataConnectQueryResult<ListBooksData, undefined>;

export function useUpdateListingStatus(options?: useDataConnectMutationOptions<UpdateListingStatusData, FirebaseError, UpdateListingStatusVariables>): UseDataConnectMutationResult<UpdateListingStatusData, UpdateListingStatusVariables>;
export function useUpdateListingStatus(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateListingStatusData, FirebaseError, UpdateListingStatusVariables>): UseDataConnectMutationResult<UpdateListingStatusData, UpdateListingStatusVariables>;

export function useGetUserListings(vars: GetUserListingsVariables, options?: useDataConnectQueryOptions<GetUserListingsData>): UseDataConnectQueryResult<GetUserListingsData, GetUserListingsVariables>;
export function useGetUserListings(dc: DataConnect, vars: GetUserListingsVariables, options?: useDataConnectQueryOptions<GetUserListingsData>): UseDataConnectQueryResult<GetUserListingsData, GetUserListingsVariables>;
