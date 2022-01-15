import { useMemo } from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
// import { concatPagination } from '@apollo/client/utilities'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
/*eslint-disable */
// import { Observable } from 'apollo-link';
// import { withClientState } from 'apollo-link-state';
// import { HttpLink } from 'apollo-link-http';
// import { onError } from '@apollo/client/link/error';
// import { createUploadLink } from 'apollo-upload-client';
// import { buildAxiosFetch } from '@lifeomic/axios-fetch';
// import axios from 'axios';
// import Cookie from 'js-cookie';
// import state from './state';
// import { API_URL } from '../config';
// import getAcceptedLocale from 'values/const/localstorage/getAcceptedLocale';
import configLink from "./configLink";

const cache = new InMemoryCache({});

let apolloClient;

function createApolloClient() {

  return new ApolloClient({ ssrMode: typeof window === 'undefined', link: configLink, cache });
  // return new ApolloClient({
  //   ssrMode: typeof window === 'undefined',
  //   link: new HttpLink({
  //     uri: 'https://nextjs-graphql-with-prisma-simple.vercel.app/api', // Server URL (must be absolute)
  //     credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  //   }),
  //   cache: new InMemoryCache({
  //     typePolicies: {
  //       Query: {
  //         fields: {
  //           allPosts: concatPagination(),
  //         },
  //       },
  //     },
  //   }),
  // })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
