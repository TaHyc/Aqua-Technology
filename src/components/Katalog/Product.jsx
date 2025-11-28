import React from "react";
import cl from'./Product.module.css';
import {Link, useParams, Route, Routes} from'react-router-dom';

let haven = '';

const Product=(props)=>{
haven = props.all.have ?  <li className={cl.have}>Есть в наличии</li> : <div>Нет в наличии</div>

const MouseEnterSize = e => {
 e.target.style.background= '#5b8c9a';
}

const MouseLeaveSize = e => {
	e.target.style.background = "#82C9DC";
} 

return(

		<div className={cl.product}>
		<img src={props.all.foto}/>
		<div className={cl.prodt}>
			<Link to={`/katalog/${props.all.id}`} className={cl.title}>{props.all.title}</Link>
			<div className={cl.art}>Арт.: {props.all.art}{haven}</div>
		</div>

		<div className={cl.prodt}>
			<div className={cl.price} /*style={{marginTop: "1vw"}}*/>{props.all.price} руб/шт</div>
			<Link to={`/katalog/${props.all.id}`}onMouseEnter={MouseEnterSize} onMouseLeave={MouseLeaveSize}
			 className={cl.buy}>Купить</Link>
		</div>
	
	</div>

)}


export default Product;