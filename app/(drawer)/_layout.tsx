import React from "react";

import Header from "@/components/shared/Header";
import { Drawer } from 'expo-router/drawer';
import TrackrDrawer from "../../components/Drawer/TrackrDrawer";

export default function DrawerLayout() {
    return (
        <Drawer
            drawerContent={(props) => <TrackrDrawer {...props} />}
            screenOptions={{
                header: () => <Header />,
                title: ''
            }}
            
        >
            <Drawer.Screen name='timeline' />
            <Drawer.Screen name='manage-activities' />
            <Drawer.Screen name='history' />
        </Drawer>
    )
}