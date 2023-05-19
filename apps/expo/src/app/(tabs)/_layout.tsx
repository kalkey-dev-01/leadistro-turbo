/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { Tabs } from 'expo-router';

export default () => {
    return (
        <Tabs>
            <Tabs.Screen name='home' options={{ headerShown: false }} />
            <Tabs.Screen name='leads' options={{ headerTitleAlign: 'center', headerTitle: 'leadistroGPT' }} />
        </Tabs>
    )
}