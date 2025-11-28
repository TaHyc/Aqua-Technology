import React from "react";
import {useState} from "react";
import cl from'./Auth.module.css';
import korzinaLogin from'../assets/корзинаРегистр.png';
import account from "../assets/account.png";
import {useDispatch} from 'react-redux'
import {setUser} from '../Redux/slices/userSlice'
import {Link} from'react-router-dom';
import {useAuth} from '../Redux/useAuth'
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";


const LoginPage = () =>{

const[email, setEmail]=useState('')
const[password, setPassword]=useState('')	
const {isAuth}=useAuth()	


const dispatch=useDispatch()

const handleRegistr=(email, password)=>{
	const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
.then(({user})=>{
console.log(user)
dispatch(setUser({
	email: user.email,
	id: user.uid,
	token: user.accessToken,
}));
})
}

const handleLogin=(email, password)=>{
	const auth = getAuth();
signInWithEmailAndPassword (auth, email, password).then(({user})=>{
console.log(user)
dispatch(setUser({
	email: user.email,
	id: user.uid,
	token: user.accessToken,}));
})
}

const MouseMove = e => {
 e.target.style.fontSize = "2vw";
 e.target.style.width = "41%";
}
const MouseLeave = e => {
 e.target.style.fontSize = "1.8vw";
 e.target.style.width = "40%";
} 
return isAuth?(
	<div className={cl.goodLogin}> 
	<img src={korzinaLogin}/>
	Регистрация прошла успехно! Хороших покупок!
	</div>
):(
	<>
	
	<div className={cl.MainLogin}>
	<div className={cl.mainBxog}><img src={account} style={{height: '3vw', marginLeft: '3vw'}}/>Вход в кабинет</div>
	<div className={cl.login}>
		Логин:
		<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
		Пароль:
		<input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
	</div>

<div className={cl.buttons}>
	<button className={cl.buttonLogin} onMouseEnter={MouseMove} onMouseLeave={MouseLeave}
	onClick={()=>handleLogin(email, password)}>Вход</button>
	<button className={cl.buttonLogin} onMouseEnter={MouseMove} onMouseLeave={MouseLeave} 
	onClick={()=>handleRegistr(email, password)} 
	style={{background: '#444444'}}>регистрация</button>
</div>

	</div>

	</>)

}



export default LoginPage;