import React from "react";
import cl from'./Portfolio.module.css';
import axios from 'axios'
import {NavLink, useParams} from'react-router-dom';
import Detailed from "./Detailed";

const Portfolio = (selectedPool, setSelectedPool) =>{
	
const [selectedMenuPool, setSelectedMenuPool] = React.useState([]);	
const [pools, setPools] = React.useState([]);
window.scrollTo(0, 0);

const menuId = [
'все проекты',
'частные бассейны',
'общественные бассейны',
'пруды']

const MouseEnterSize = e => {
 e.target.style.fontSize = "1.4vw";
  e.target.style.height = "41%";
}

const MouseLeaveSize = e => {
 e.target.style.fontSize = "1.3vw";
   e.target.style.height = "40%";
} 


React.useEffect(()=>{
const poolClass = selectedMenuPool >0 ?`?class=${selectedMenuPool}`:''
axios.get(`https://635ffdbb3e8f65f283c0fff9.mockapi.io/pools${poolClass}`)
.then((res)=> setPools(res.data))
window.scrollTo(0, 0);
},[selectedMenuPool])


return  (
	<>
	<div className={cl.menu}>
	{menuId.map((menuPull,i)=><div key={i} onClick={()=>setSelectedMenuPool(i)}>{menuPull}</div>)}
	</div>
	<div className={cl.portfolio}>
	{pools.map(pool=>
	<div key={pool.id}className={cl.pool}>
	<img className={cl.foto} src={pool.foto}/>
	<div className={cl.poolFullText}>
		<div className={cl.poolT}>
			<div className={cl.title}>{pool.title}</div>
			<div className={cl.name}>{pool.name}</div>
		</div>
	<div className={cl.poolLink} >
		<NavLink key={pool.id} to={`/portfolio/${pool.id}`} onMouseEnter={MouseEnterSize} onMouseLeave={MouseLeaveSize}
		onClick={()=>setSelectedPool(pool.id)} className={cl.link}>подробнее</NavLink>
	</div>
	</div>
	
	</div>)}
</div>
	</>
)
}


export default Portfolio;