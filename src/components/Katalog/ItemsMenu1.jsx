import React from "react";
import cl from'./Katalog.module.css';

const ItemsMenu1 = ({value, setMenu}) =>{

const [openItemsMenu1, setOpenItemsMenu1] = React.useState(false);

const list =[
'Фильтры для частных бассейнов', 
'Фильтры для общественных бассейнов', 
'Фильтрационные установки',
'Фильтрующий материал',
'Аксессуары для фильтрации'
];


return(
	<>
<div className={cl.itemMenu} onClick={()=>setOpenItemsMenu1(!openItemsMenu1)}>Фильтровальное оборудование</div>
		{ openItemsMenu1 && (<div >
		<ul className={cl.ulMenu}>
		{list.map((name, i)=>(<li key={i} onClick={()=>setMenu(i)} >{name}</li>))}</ul></div>)}
		</>
)
}

export default ItemsMenu1;