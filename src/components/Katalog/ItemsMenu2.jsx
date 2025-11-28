import React from "react";
import cl from'./Katalog.module.css';

const ItemsMenu2 = () =>{

const [openItemsMenu2, setOpenItemsMenu2] = React.useState(false);

const onClickMenuItem2 = (i)=>{
setOpenItemsMenu2(false);
}

const list=['Какой-то фильтр 1','Какой-то фильтр 2','Какой-то фильтр 3','Какой-то фильтр 4',]

return(
	<>
		<div className={cl.itemMenu} onClick={()=>setOpenItemsMenu2(!openItemsMenu2)}>Гидроизоляция и очистка чаши</div>
		{ openItemsMenu2 && (<div >
		<ul className={cl.ulMenu}>
		{list.map((name, i)=>(<li key={i} onClick={()=>setOpenItemsMenu2(i)}>{name}</li>))}</ul>
			</div>)}
		</>
)
}

export default ItemsMenu2;