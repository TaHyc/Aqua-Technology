import React from "react";
import cl from'./Katalog.module.css';
import sort from '../assets/sort.png'
import {useSelector, useDispatch} from 'react-redux'
import {setSelectedSort} from '../Redux/slices/filterSlice' 


const Sort = () =>{

const sortRef = React.useRef();
const dispatch = useDispatch()
const selectedSort = useSelector((state) =>state.filter.selectedSort)

const [openSort, setOpen] = React.useState(false);
const list =[
{name: 'По популярности', sortProperti: 'rating'}, 
{name: 'По цене (возрастание)', sortProperti: '-price'},
{name: 'По цене (убывание)', sortProperti: 'price'}]


const onClickListItem = (obj)=>{
dispatch(setSelectedSort(obj));
setOpen(false);
}

React.useEffect(()=>{
const clickOutside=(event) =>{
	if(!event.composedPath().includes(sortRef.current))
		{setOpen(false)}
}
document.body.addEventListener('click', clickOutside)
return()=>document.body.removeEventListener('click', clickOutside)
}, [])

return(
	<>
		<img className={cl.sortFoto} src={sort}/><div className={cl.sort}>
				<div className={cl.span} ref={sortRef} onClick={()=>setOpen(!openSort)}>{selectedSort.name}</div>
			{ openSort && (<div>
		<ul className={cl.ulKatalog}>
		{list.map((obj)=>(<li key={obj.name} onClick={()=>onClickListItem(obj)} 
			className={cl.ulKatalog}>{obj.name}</li>))}</ul>
			</div>)}
		</div>
</>
)
}

export default Sort;		