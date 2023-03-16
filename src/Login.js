import { React, useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase'
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
            }))
        }).catch((error) => alert(error));
    }

    const register = () => {
        if (!name) {
            return alert ('enter a full name');
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }))
            })
        }).catch(error => alert(error));
    };

  return (
    <div className='login'>
        <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png" alt="" />

        <form>
            <input 
            type="text" 
            placeholder='Full Name (required if registering)' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            />

            <input 
            type="text" 
            placeholder='Profile pic URL (optional)' 
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)} 
            />

            <input 
            type="email" 
            placeholder='E-mail' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            />

            <input 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            />

            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>

        <p>Not a member {' '}
             <span className='login_register' onClick={register}>Register now</span>
        </p>
    </div>
  )
}

export default Login