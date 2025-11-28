import React from "react";
import {Link} from'react-router-dom';
import cl from'./Auth.module.css';


const DontLogin = () =>{

return  (
	<div className={cl.main}>Вы не вошли в аккаунт
	<div className={cl.minTitle}>Перейдите по ссылке для авторизации</div>
	<Link className={cl.button} to='/login'>Войти</Link>
	</div>

)
}


export default DontLogin;