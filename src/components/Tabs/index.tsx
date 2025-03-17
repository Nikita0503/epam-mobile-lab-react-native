import TasksScreenTabActive from '@images/icons/tabs/TasksScreenTabActive';
import TasksScreenTabInactive from '@images/icons/tabs/TasksScreenTabInactive';
import { ERouteNames } from '@interfaces/navigation/routeNames';
import { TabsStackParamList } from '@interfaces/navigation/routeParams';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
    </TabsStack.Navigator>
  );
};

export default Tabs;
