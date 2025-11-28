import React from "react";
import cl from'./Katalog.module.css';
import axios from 'axios'
import Product from'./Product';
import Settings from'./Settings';
import Sort from'./Sort';
import ItemsMenu1 from'./ItemsMenu1';
import ItemsMenu2 from'./ItemsMenu2';
import {SearchContext} from "../../App";
import {setSelectedMenu} from '../Redux/slices/filterSlice' 
import {useSelector, useDispatch} from 'react-redux'


const Katalog = () =>{

const dispatch = useDispatch()

const oneClickSetMenu=(i)=>{
	dispatch(setSelectedMenu(i))
}

const selectedMenu = useSelector((state) =>state.filter.selectedMenu)
const selectedSort = useSelector((state) =>state.filter.selectedSort.sortProperti)

const [search1, setSearch1] = React.useState(false);
const [search2, setSearch2] = React.useState(false);
const [search3, setSearch3] = React.useState(false);
const [search4, setSearch4] = React.useState(false);
const [search5, setSearch5] = React.useState(false);
const [checked, setChecked] = React.useState(true);
const [items, setItems] = React.useState([]);
const [poiski, setPoiski] = React.useState([]);

const {search} = React.useContext(SearchContext);

let nal=null;
checked?nal=1:nal=0

React.useEffect(()=>{
const sortBy = selectedSort.replace('-','')
const order = selectedSort.includes('-')? 'asc': 'desc'
const selectedI1 = `&Item1Properti=${selectedMenu}`

axios.get(`https://635ffdbb3e8f65f283c0fff9.mockapi.io/items?sortBy=${sortBy}&order=${order}${selectedI1}`)
.then((res)=> setItems(res.data))
window.scrollTo(0, 0);
},[selectedSort, selectedMenu])

return  (
<div className={cl.main}>
	
	<div className={cl.left}>каталог
		<div className={cl.menuKatalog}>

		<ItemsMenu1 value={selectedMenu} setMenu={oneClickSetMenu}/>
		<ItemsMenu2/>		

		</div>
	</div>

	<div className={cl.rigth}>
		<div className={cl.sortAll}>
		<Sort/>
		<Settings value={checked} items={items}	poiski={poiski}	setPoiski={setPoiski}onClickSetChecked={(i)=>setChecked(i)} 
		search1={search1} search2={search2} search3={search3} search4={search4} search5={search5}
		setSearch1={setSearch1} setSearch2={setSearch2}setSearch3={setSearch3}setSearch4={setSearch4}setSearch5={setSearch5}/>
		</div>
	<div className={cl.katalogItems}>
		{items.filter(item=>poiski.length==0?true:poiski.some(str=>str.includes(item.brand))).filter(item=>item.title.toLowerCase().includes(search.toLowerCase())).
filter(item=>item.have==nal).map(item=><Product  key={item.id} all={item}/>) }
		</div>
	</div>
</div>
);
}

export default Katalog;