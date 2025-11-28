import {useState} from "react";
import cl from'./Auth.module.css';


const Form = ({title, handleClick}) =>{

const[email, setEmail]=useState('')
const[password, setPassword]=useState('')

return  (
	<div className={cl.MainLogin}>
	<div className={cl.login}>
		Логин:
		<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
		Пароль:
		<input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
	</div>
	<button onClick={()=>handleClick(email, password)}>
		{title}
	</button>

	</div>
)
}


export {Form}