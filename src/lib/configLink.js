import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from "@apollo/client";
/*eslint-disable */
import { Observable } from "apollo-link";
// import { HttpLink } from 'apollo-link-http';
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { buildAxiosFetch } from "@lifeomic/axios-fetch";
import axios from "axios";
import { Children } from "react";
// import Cookie from 'js-cookie';
// import { API_URL } from '../config';
// import Cookie from 'js-cookie';

const httpLink = createUploadLink({
  // uri: "https://nextjs-graphql-with-prisma-simple.vercel.app/api",
  uri: "https://web-api.evet.market/evetwebgql",
  credentials: "same-origin",
  fetch: buildAxiosFetch(axios, (config, input, init) => ({
    ...config,
    onUploadProgress: init.onUploadProgress,
  })),
});

const request = async (operation) => {
  // const token = await Cookie.get('evetToken');
  const token = "";
  const locale = "5f8c2a00bcfea476b2b8d757";
  // //console.log({ createUploadLink: locale, token });
  operation.setContext({
    headers: {
      authorization: "",
      locale: locale,
    },
  });
};

export const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle;
      Promise.resolve(operation)
        .then((oper) => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const configLink = ApolloLink.from([
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      //console.log("[graphQLErrors]", graphQLErrors);
      Children.toArray(
        graphQLErrors?.map(({ extensions }) => {
          Children.toArray(
            graphQLErrors?.map(({ message, extensions }) => {
              //console.log(`[GraphQL error]: Message: ${message}, code: ${extensions?.code}`);
            })
          );
          if (extensions?.code === "UNAUTHENTICATED") {
            // Cookie.remove('evetToken');
          }
        })
      );
    }
    if (networkError) {
      //console.log(`[Network error]: ${networkError}`);
    }
  }),
  requestLink,
  httpLink,
]);

export default configLink;
