import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button } from 'react-native';
import ProduitScreen from "./ProduitScreen";
import SettingsScreen from "./SettingsScreen";



const Tab = createBottomTabNavigator();
function ProfileScreen({ navigator }) {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Home" component={ProduitScreen} options={{headerShown:false}}/>
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>

    )
}

export default ProfileScreen;