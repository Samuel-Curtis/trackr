import DrawerMenuButton from "@/components/Drawer/DrawerMenuButton";
import { Drawer } from 'expo-router/drawer';
import React from "react";
import { useColorScheme } from "react-native";
import TrackrDrawer from "../../components/Drawer/TrackrDrawer";



export default function DrawerLayout() {

    const colorScheme = useColorScheme();

    const lightGrey = '#F2F2F2'
    const darkGrey = '#B1B1B1'

    return (
        <Drawer
            drawerContent={(props) => <TrackrDrawer {...props} />}
            screenOptions={{
                headerLeft: () => <DrawerMenuButton />,
                headerTitleAlign: 'center',
                headerTitle: 'Trackr',
                headerStyle: {
                    backgroundColor: colorScheme === 'light' ? lightGrey : darkGrey
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}   
        >
            <Drawer.Screen name='timeline' />
            <Drawer.Screen name='manage-activities' />
            <Drawer.Screen name='history' />
        </Drawer>
    )
}