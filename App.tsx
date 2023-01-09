import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';
import UserList from './UserList';
import store from './store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ReduxProvider store={store}>
          <UserList />
        </ReduxProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
