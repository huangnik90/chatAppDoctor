
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { Provider, useSelector } from 'react-redux';
import { Loading } from './components';
import Store from './redux';
import Router from './router';

//REDUX Notes:
//useDispatch for action 
//useSelector() for get global state

const MainApp= () =>  {
  const globalState = useSelector(state=>state)
  return (
      <>
          <NavigationContainer>
              <Router/>
          </NavigationContainer>
          <FlashMessage position="top"/>
          {globalState.load && <Loading/>}
      </>
  );
};

const App =()=>{
  return(
  <Provider store={Store}>
    <MainApp/>
  </Provider>
  )
}

export default App;
