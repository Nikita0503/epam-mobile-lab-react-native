import Tabs from '@components/Tabs';
import useAuth from '@hooks/useAuth';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import {
  AppStackParamList,
  AuthStackParamList,
} from '@interfaces/navigation/routeParams';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CurrentUserScreen from '@screens/CurrentUserScreen';
import SignInScreen from '@screens/SignInScreen';
import SignUpScreen from '@screens/SignUpScreen';
import TaskCreatorScreen from '@screens/TaskCreatorScreen';
import TaskDetailsScreen from '@screens/TaskDetailsScreen';
import TaskEditorScreen from '@screens/TaskEditorScreen';
import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigation = () => {
  const { accessToken } = useAuth();

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <NavigationContainer>
        {!accessToken ? (
          <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen
              name={ERouteNames.SIGN_IN_SCREEN}
              component={SignInScreen}
            />
            <AuthStack.Screen
              name={ERouteNames.SIGN_UP_SCREEN}
              component={SignUpScreen}
            />
          </AuthStack.Navigator>
        ) : (
          <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name={ERouteNames.TABS_SCREEN} component={Tabs} />
            <AppStack.Screen
              name={ERouteNames.TASK_DETAILS}
              component={TaskDetailsScreen}
              options={{ headerShown: true }}
            />
            <AppStack.Screen
              name={ERouteNames.TASK_CREATOR}
              component={TaskCreatorScreen}
              options={{ headerShown: true }}
            />
            <AppStack.Screen
              name={ERouteNames.TASK_EDITOR}
              component={TaskEditorScreen}
              options={{ headerShown: true }}
            />
            <AppStack.Screen
              name={ERouteNames.CURRENT_USER}
              component={CurrentUserScreen}
              options={{ headerShown: true }}
            />
          </AppStack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigation;
