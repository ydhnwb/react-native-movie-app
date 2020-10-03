import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { IndexReducer } from './src/redux/index'
import RootApp from './src/app/RootApp';


const App = () => {
  const configureStore = createStore(IndexReducer)

  return (
      <Provider store={configureStore}>
        <NavigationContainer>
          <RootApp/>
        </NavigationContainer>
      </Provider>

  );
};

export default App;
