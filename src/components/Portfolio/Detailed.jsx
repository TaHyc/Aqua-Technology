import React from "react";
import axios from 'axios'
import {useParams} from'react-router-dom';
import cl from'./Detailed.module.css';
import p14 from '../assets/14.png'

const Detailed = () =>{
window.scrollTo(0, 0);

const MouseMoveSizeZakaz = e => {
 e.target.style.fontSize = "1.5vw"
}

const MouseLeaveSizeZakaz = e => {
 e.target.style.fontSize = "1.4vw"
}  

const {id}=useParams()
const [pools, setPools] = React.useState([]);
const [mainFoto, setMainFoto] = React.useState();

React.useEffect(()=>{
axios.get(`https://635ffdbb3e8f65f283c0fff9.mockapi.io/pools/${id}`)
.then((res)=> {
setPools(res.data)
setMainFoto(res.data.foto)}
)
window.scrollTo(0, 0);
},[id])

return  (
	<>
	<div className={cl.main}>
		<div className={cl.title}>{pools.name}</div>
			<div className={cl.fotocart}>
				<div className={cl.divFoto}>{<img className={cl.foto} src={mainFoto}/>}</div>
				<div className={cl.divMiniFoto}>
						<img className={cl.minFoto} onClick={()=>setMainFoto(pools.minifoto)} src={pools.minifoto}/>
						<img className={cl.minFoto} onClick={()=>setMainFoto(pools.foto)} src={pools.foto}/></div>
			</div>
		<div className={cl.request}><div className={cl.text}>Оформите заявку на сайте и мы свяжемся
		 с Вами в близайшее время чтобы ответить на все интересующие Вас вопросы.</div>
		 <a className={cl.button} onMouseEnter={MouseMoveSizeZakaz} onMouseLeave={MouseLeaveSizeZakaz}
		 href='https://t.me/AquaTechnology_bot'>заказать проект</a></div>
	</div>	
	</>
)
}

export default Detailed;