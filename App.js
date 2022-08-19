import * as React from 'react';
import { createSwitchNavigator , createAppContainor } from "react-navigation";

import loginScreen from './screens/loginScreen';
import LoadingScreen from './screens/loadingScreen';
import DashboardScreen from './screens/dashboardScreen';

const AppSwitchNavigator = createSwitchNavigator({
    loginScreen : loginScreen,
    LoadingScreen: LoadingScreen,
    
})

export default function App() {
  return (
    
  );
}
