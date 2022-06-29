import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Pages
import HomeContent from  './HomeContent'
import DetailsContent from  './DetailsContent'
import SettingsContent from  './SettingsContent'

const Tab = createMaterialBottomTabNavigator();

export default function MainContainer(){
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="white"
                inactiveColor="white"
                barStyle={{ backgroundColor: '#FF9EB7' }}
                shifting={true}
            >

                <Tab.Screen 
                    name="Home"
                    component={HomeContent} 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarColor: '#FF6060',
                        tabBarIcon: ({ color }) => (
                          <Icon name="home" color={color} size={26} />
                        ),
                      }}
                />
                <Tab.Screen 
                    name="Details" 
                    component={DetailsContent}
                    options={{
                        tabBarLabel: 'Details',
                        tabBarColor: '#606EFF',
                        tabBarIcon: ({ color }) => (
                          <Icon name="list" color={color} size={26} />
                        ),
                      }}
                />
                <Tab.Screen 
                    name="Settings"
                    component={SettingsContent}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarColor: '#4BC655',
                        tabBarIcon: ({ color }) => (
                          <Icon name="settings" color={color} size={26} />
                        ),
                      }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}