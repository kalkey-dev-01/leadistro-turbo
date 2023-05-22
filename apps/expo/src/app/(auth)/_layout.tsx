/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { Stack } from "expo-router"

export default () => {
    return (
        <Stack>
            <Stack.Screen name='signin' options={{ headerShown: true, headerTitleAlign: 'center', headerTitle: 'Sign In to Your leadistro Account' }} />
            <Stack.Screen name='register' options={{ headerTitleAlign: 'center', headerTitle: 'Lets Register Your Account' }} />
        </Stack>
    )
}