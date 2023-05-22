import { View, Text } from 'react-native'
import React from 'react'
import { auth } from '~/firebase/config'


const Home = () => {
    const userEmail = auth.currentUser?.email;
    // const safearea = useSafeAreaInsets();
    console.log(userEmail)
    return (
        <View className='flex flex-col justify-between items-center w-full h-full py-5'>
            <Text className='text-2xl font-bold text-[#101010]'>Welcome to leadistro</Text>
            <Text className='text-lg font-black'> {userEmail !== undefined ? 'You are logged in as' : 'You are not logged in'} </Text>
            <Text className='text-lg font-bold text-[#101010]'>Login?</Text>
        </View>
    )
}

export default Home