import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { auth } from '~/firebase/config'
import { GoogleOAuthClient, api } from './api'
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth/react-native'

GoogleSignin.configure({
    webClientId: GoogleOAuthClient
})

const utils = api.useContext();

export async function onGoogleSignIn() {
    await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
    })
    const { idToken } = await GoogleSignin.signIn()
    const credential = GoogleAuthProvider.credential(idToken)
    return signInWithCredential(auth, credential).then(user => {

    })

}