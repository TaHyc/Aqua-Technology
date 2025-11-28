import React, { useState, useEffect } from "react";
import cl from'./ProductPage.module.css';
import axios from 'axios'
import {Link, useParams} from'react-router-dom';
import {TovarContext} from "../../App";
import {useSelector, useDispatch} from 'react-redux'
import {addItems} from '../Redux/slices/korzinaSlice'

const ProductPage = () =>{

const MouseEnterSize = e => {
 e.target.style.background= '#5b8c9a';
}

const MouseLeaveSize = e => {
	e.target.style.background = "#82C9DC";
} 

const {id}=useParams()	

const [shop, setShop] = React.useState([]);
const [count, setCount] = React.useState(1);
const [numFyp, setNum] = React.useState(0);

const dispatch = useDispatch()

useEffect(()=>{
axios.get(`https://635ffdbb3e8f65f283c0fff9.mockapi.io/items/${id}`)
.then((res)=> setShop(res.data))
window.scrollTo(0, 0);
   setNum(randomNumberInRange(0, 7));
},[id])


const onClickKorzina= () =>{
	for (let i=0; i<count;i++)dispatch(addItems(shop));
}

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const onClickFyp= () =>{
  window.scrollTo(0, 0);
}

return (
<div className={cl.main}>
		<div className={cl.up}>
		<div className={cl.divFoto}><img className={cl.foto} src={shop.foto}/></div>
			<div className={cl.info}>
			<div className={cl.title}>{shop.title}</div>
			<div className={cl.art}>Арт.: {shop.art}</div>
			<div className={cl.price}>{shop.price} руб/шт</div>
				<div className={cl.count}>
				Колличество
				<div className={cl.buttomsAll}>
				<div className={cl.buttoms} buttoms>
					<button className={cl.countButtom} aria-label="Increment value" onClick={() => setCount(count+1)}>+</button>
        	<span>{count}</span>
        	<button className={cl.countButtom} aria-label="Decrement value" onClick={() =>count<1?count+1:setCount(count-1)}>-</button>
				</div>
		<div className={cl.buy} onClick={onClickKorzina} onMouseEnter={MouseEnterSize} onMouseLeave={MouseLeaveSize}>В корзину</div>
				</div>
				</div>
			</div>
		</div>
	<div className={cl.down}>
		<div className={cl.columnInfo}>Характеристики

<div className={cl.text}>
Производитель — Ariona Pools (Испания)<br></br>
Макс. давление — 2 кг/см²<br></br>
Загрузка песка — 100 кг<br></br>
Производительность — 10,2 м³/ч<br></br>
Площадь фильтра — 0,2 м²<br></br>
Для бассейнов — до 40 м³
</div>
<div className={cl.columnInfo}>Габаритные размеры, подключение:
<div className={cl.text}>
Диаметр фильтра: 510 мм<br></br>
Высота фильтра: 790 мм<br></br>
Подключения: клеевое Ø 1½"
</div>
</div>
</div>


		<div className={cl.columnInfo}>Особенности:
<div className={cl.text}>
Материал: пластик с добавлением стекловолокна<br></br>
100% антикоррозийная конструкция<br></br>
Удобное боковое расположение клапана<br></br>
Верхняя крышка откручивается с помощью ключа
</div>
<div className={cl.columnInfo}>Комплект поставки:
<ul className={cl.text}>
<li>Фильтр</li>
<li>Платформа</li>
<li>Клапан переключения режимов</li>
<li>Ключ для демонтажа крышки</li>
<li>Манометр</li>
<li>Инструкция</li>
<li>Гарантийный талон</li>
</ul>
</div>
</div>

	</div>



</div>
)}



export default ProductPage;