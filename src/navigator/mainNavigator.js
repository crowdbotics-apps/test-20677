import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList110122Navigator from '../features/NotificationList110122/navigator';
import Settings110121Navigator from '../features/Settings110121/navigator';
import Settings110113Navigator from '../features/Settings110113/navigator';
import UserProfile110111Navigator from '../features/UserProfile110111/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList110122: { screen: NotificationList110122Navigator },
Settings110121: { screen: Settings110121Navigator },
Settings110113: { screen: Settings110113Navigator },
UserProfile110111: { screen: UserProfile110111Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
