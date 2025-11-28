import React from "react";
import cl from'./Katalog.module.css';
import set from '../assets/настройка.png'


const Settings = (props) =>{

const [openSettings, setOpenSettings] = React.useState(false);

const onClickSettings = (e)=>{
setOpenSettings(e);
}

const ClickReset = (e)=>{
props.onClickSetChecked(false)
props.setSearch1(false)
props.setSearch2(false)
props.setSearch3(false)
props.setSearch4(false)
props.setSearch5(false)
props.poiski.length=0;
}


function contains(brand, e) {
let myIndex = props.poiski.indexOf(brand);
if(e.target.value=true){
	if(props.poiski.length==0){
	props.setPoiski([...props.poiski,brand])
    }
    else{
    	props.poiski.includes(brand)?console.log('не добавляем:', brand):props.setPoiski([...props.poiski,brand])
   	}
if (myIndex !== -1) {
    props.poiski.splice(myIndex, 1);
}
}}

return(
	<>
<div className={cl.settingsAll}><img className={cl.settingsFoto} onClick={()=>onClickSettings(!openSettings)} src={set}/>
{ openSettings && (
<div className={cl.settingsMenu}>
<span>В наличии</span>
			
<form className={cl.formMenu} >
<input type="radio" onClick={()=>props.onClickSetChecked(!props.value)} checked={props.value}/> в наличии
</form>
			Бренд
<div className={cl.brends}>
<div className={cl.choiseBrend}>
<input  type="checkbox" checked={props.search1} value={props.search1}
onClick={(e)=>{contains('ARIONA POOLS',e);props.setSearch1(!props.search1)}}/>ariona pools</div>
<div className={cl.choiseBrend}>
<input  type="checkbox" checked={props.search2} value={props.search2}
onClick={(e)=>{contains('DRYDEN AQUA',e);props.setSearch2(!props.search2)}}/>dryden aqua</div>
<div className={cl.choiseBrend}>
<input  type="checkbox" checked={props.search3} value={props.search3}
onClick={(e)=>{contains('EMAUX',e);props.setSearch3(!props.search3)}}/>Emaux</div>
<div className={cl.choiseBrend}>
<input  type="checkbox" checked={props.search4} value={props.search4}
onClick={(e)=>{contains('MERKURY',e);props.setSearch4(!props.search4)}}/>Merkury</div>
<div className={cl.choiseBrend}>
<input  type="checkbox" checked={props.search5} value={props.search5}
onClick={(e)=>{contains('PENTAIR WATER', e);props.setSearch5(!props.search5)}} />Pentair water</div>
</div>

<div className={cl.MenuBottoms}>
<button className={cl.bottomMenu} onClick={ClickReset}>Сбросить</button>
</div>

</div>)}</div>
		</>
)
}

export default Settings;		
		