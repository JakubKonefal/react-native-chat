import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const token =
  'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MjMxOTM4MjgsImlhdCI6MTYyMDc3NDYyOCwiaXNzIjoiY2hhdGx5IiwianRpIjoiZDNiM2I0MjAtMmY0ZC00ZTVmLWEzMTYtNDI3ZTg5NGY5OTM2IiwibmJmIjoxNjIwNzc0NjI3LCJzdWIiOiJkMjJiZTA0ZC1iOGZkLTQ3NzQtOWRiZC05NGRkNDBiMDVjOWUiLCJ0eXAiOiJhY2Nlc3MifQ.YNIHl7EqlG37Buuw8cCZ64y2ieY8qJc_ZRq84PsXvGweYC_AHajQ8ztJrIQNyTswzrRM-FT7x7IEYX8RmabhyQ';

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphiql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
