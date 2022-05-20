import { gql } from "@apollo/client";

export const getRepositoriesQuery = gql`
  {
    user(login: "rasoul678") {
      pinnedItems(first: 6) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              id
              url
              stargazers {
                totalCount
              }
              forks {
                totalCount
              }
              watchers {
                totalCount
              }
              issues(states: [OPEN]) {
                totalCount
              }
              languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
                nodes {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const getTokenQuery = gql`
  {
    token
  }
`;
