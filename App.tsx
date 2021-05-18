import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/client/react';
import { client } from './apollo/index';
import Navigation from './navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <StatusBar translucent />
        <Navigation />
      </ApolloProvider>
    </SafeAreaProvider>
  );
}
