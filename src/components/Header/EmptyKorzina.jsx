import React from "react";
import cl from'./TovarInKorzina.module.css';
import {Link} from'react-router-dom';


const EmptyKorzina = () =>{

return  (
	<>
<div className={cl.empty}>
К сожалению, корзина пуста...<br></br>Но вы ещё можете всё исправить!😃
<Link to='/katalog' className={cl.katalog}>перейти к покупкам</Link>
</div>

	</>
)
}


export default EmptyKorzina;