import GeneratorScreenTabActive from '@images/icons/tabs/GeneratorScreenTabActive';
import GeneratorScreenTabInactive from '@images/icons/tabs/GeneratorScreenTabInactive';
import MapScreenTabActive from '@images/icons/tabs/MapScreenTabActive';
import MapScreenTabInactive from '@images/icons/tabs/MapScreenTabInactive';
import TasksScreenTabActive from '@images/icons/tabs/TasksScreenTabActive';
import TasksScreenTabInactive from '@images/icons/tabs/TasksScreenTabInactive';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { TabsStackParamList } from '@interfaces/navigation/routeParams';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllTasksScreen from '@screens/AllTasksScreen';
import CurrentUserScreen from '@screens/CurrentUserScreen';
import TasksScreen from '@screens/TasksScreen';
import React from 'react';

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

const Tabs = () => {
  return (
    <TabsStack.Navigator screenOptions={{ headerShown: false }}>
      <TabsStack.Screen
        name={ERouteNames.TASKS_SCREEN}
        component={TasksScreen}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ focused }) =>
            focused ? <TasksScreenTabActive /> : <TasksScreenTabInactive />,
        }}
      />
      <TabsStack.Screen
        name={ERouteNames.CURRENT_USER}
        component={CurrentUserScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) =>
            focused ? <MapScreenTabActive /> : <MapScreenTabInactive />,
        }}
      />
      <TabsStack.Screen
        name={ERouteNames.ALL_TASKS_SCREEN}
        component={AllTasksScreen}
        options={{
          tabBarLabel: 'All Tasks',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <GeneratorScreenTabActive />
            ) : (
              <GeneratorScreenTabInactive />
            ),
        }}
      />
    </TabsStack.Navigator>
  );
};

export default Tabs;
