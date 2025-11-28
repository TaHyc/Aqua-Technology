import React from "react";
import cl from'./Korzina.module.css';
import TovarInKorzina from'./TovarInKorzina';
import DontLogin from'../Auth/DontLogin';
import EmptyKorzina from'./EmptyKorzina';
import {Link} from'react-router-dom';
import {TovarContext} from "../../App";
import {addItems, removeItems, clearItems} from '../Redux/slices/korzinaSlice';
import {useSelector, useDispatch} from 'react-redux'
import {useAuth} from '../Redux/useAuth'

const Korzina = () =>{

const {isAuth, email}=useAuth()	

const dispatch = useDispatch()
const tovari = useSelector((state)=>state.korzina.items)

const [openSearch, setOpenSearch] = React.useState(false);
const [checkbox, setCheckbox] = React.useState(false);

const {SelectedTovar} = React.useContext(TovarContext);

const clickClearKorzina=()=>{
if (window.confirm("Вы уверены что хотите очистить корзину?"))dispatch(clearItems())
}

if (tovari.length==0){
	return isAuth?(<EmptyKorzina/>):(<DontLogin />)
}

return  (
	<>
<div className={cl.main}>
	<div className={cl.up}>Корзина<buttom className={cl.clear} onClick={clickClearKorzina}>Очистить</buttom></div>
	<div className={cl.korzina}>
		<div className={cl.UpKorzina}>
	<text style={{width: '25vw', textAlign: 'center'}}>Товар</text>
	<text style={{marginLeft: '11vw'}}>Цена</text>
	<text style={{marginLeft: '6vw'}}>Цена со скидкой</text>
	<text style={{marginLeft: '8vw'}}>Кол-во</text>
	<text style={{marginLeft: '11vw'}}>Сумма</text>
		</div>	
		{tovari.map((item)=>(<TovarInKorzina key={item.id} {...item} checkbox={checkbox} setCheckbox={setCheckbox}/>))}
	</div>

	<buttom style={{display: 'flex', flexDirection: 'row', justifyContent: 'end'}} >
		<Link to='/makingOrder' className={cl.zakaz}>оформить заказ</Link>
	</buttom>

</div>

	</>
)
}


export default Korzina;