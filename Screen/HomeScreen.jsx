import React from "react";
import { Text, View, Button } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();
function HomeScreen({ navigation }) {
    return (
        <View>
            <Button
                style={{ margin: 10 }}
                title="Aller vers..."
                onPress={() =>
                navigation.navigate('Profil')
                }
            ></Button>
        </View>


    );

}

export default HomeScreen;