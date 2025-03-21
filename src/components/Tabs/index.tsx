import CommonTasksScreenTabActive from '@images/icons/tabs/CommonTasksScreenTabActive';
import CommonTasksScreenTabInactive from '@images/icons/tabs/CommonTasksScreenTabInactive';
import ProfileScreenTabActive from '@images/icons/tabs/ProfileScreenTabActive';
import ProfileScreenTabInactive from '@images/icons/tabs/ProfileScreenTabInactive';
import TasksScreenTabActive from '@images/icons/tabs/TasksScreenTabActive';
import TasksScreenTabInactive from '@images/icons/tabs/TasksScreenTabInactive';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { TabsStackParamList } from '@interfaces/navigation/routeParams';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommonTasksScreen from '@screens/CommonTasksScreen';
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
            focused ? <ProfileScreenTabActive /> : <ProfileScreenTabInactive />,
        }}
      />
      <TabsStack.Screen
        name={ERouteNames.COMMON_TASKS_SCREEN}
        component={CommonTasksScreen}
        options={{
          tabBarLabel: 'Common Tasks',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <CommonTasksScreenTabActive />
            ) : (
              <CommonTasksScreenTabInactive />
            ),
        }}
      />
    </TabsStack.Navigator>
  );
};

export default Tabs;
