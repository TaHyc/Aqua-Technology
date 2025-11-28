import React from "react";
import cl from'./Search.module.css';
import debounce from 'lodash.debounce'
import sourch from '../assets/крестики.png'
import close from '../assets/close_icon.svg'
import {SearchContext} from "../../App";

const Search=()=>{

const [value, setValue] = React.useState('');
const {setSelectedSearch} = React.useContext(SearchContext);
const inputRef = React.useRef();

const OnClickSearch=()=>{
 setSelectedSearch('')
 setValue('')
 inputRef.current.focus()
}

const updateValue=React.useCallback(
	debounce((value)=>setSelectedSearch(value),700),
[])

const onChangeInput=event=>{
setValue(event.target.value);
updateValue(event.target.value)
}

return(
<>

<input ref={inputRef} value={value} onChange={onChangeInput} 
className={cl.search} placeholder='Поиск товара...'/> 
{value &&
<img src={close} className={cl.searchCross} onClick={OnClickSearch}/>
}

</>
)}


export default Search;