import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SignIn = () => {
    return (
        <View className='w-full h-full flex items-start px-5 justify-start gap-2 py-5'>
            <Text className="px-1">Enter Your Email</Text>
            <TextInput placeholder='Email' className='w-full h-10 rounded-lg border-2 border-gray-300 px-2' />
            <Text className="px-1">Enter Your Password</Text>
            <TextInput placeholder='Password' className='w-full h-10 rounded-lg border-2 border-gray-300 px-2' />
            <Text className="px-1">Forgot Password?</Text>
            <TouchableOpacity onPress={() => {
                console.log('Pressed');
            }}>
                <Text className='bg-red-500  rounded-lg py-1 px-2 text-white'>
                    Sign In
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {

            }}>
                <Text className='bg-red-500 text-3xl rounded-lg py-1 px-2 text-white'>
                    Sign In with Google
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignIn