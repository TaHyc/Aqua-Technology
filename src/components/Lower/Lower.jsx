import React from "react";
import cl from'./Lower.module.css';
import {Link} from'react-router-dom';

const Lower = () =>{
return  (
	<div className={cl.lowerM}>
	<div className={cl.lower}>
		<div className={cl.column}>
				<Link to="/katalog">Каталог</Link>
				<Link to="/main">Акции</Link>
				<Link to="/building">Сервис</Link>
				<Link to="/main">Бренды</Link>
		</div>
		<div className={cl.column}>
				
				<Link to="/about">О компании</Link>
				<Link to="/main">Акции</Link>
				<Link to="/building">Сервис</Link>
				<Link to="/main">Бренды</Link>
		</div>
		<div className={cl.column}>
				<Link to="/about">О компании</Link>
				<Link to="/main">Акции</Link>
				<Link to="/building">Сервис</Link>
				<Link to="/main">Бренды</Link>
		</div>
		<div className={cl.column}>
				<Link to="/main" className={cl.mainText}></Link>
		</div>
		</div>
        <h5 className={cl.mainTextLower}>@2022 Aqua Technology</h5>
	</div>
)
}


export default Lower;