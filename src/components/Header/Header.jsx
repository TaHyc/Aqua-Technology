import React from "react";
import cl from'./Header.module.css';
import Menu from "./Menu";
import Search from "./Search";
import korzina from '../assets/корзина.png'
import account from '../assets/аккаунт.png'
import sourch from '../assets/поиск.png'
import {Link} from'react-router-dom';
import {SearchContext} from "../../App";
import {useSelector} from "react-redux";
import "../Redux/firebase";

const Header = () =>{

const [openSearch, setOpenSearch] = React.useState(false);
const {search, setSelectedSearch} = React.useContext(SearchContext);

const {items}=useSelector(state=>state.korzina)

const totalCount=items.reduce((sum,item)=>sum+item.count, 0)

return  (
	<>
	<div className={cl.header}>
		<div className={cl.up}>
			<div className={cl.groupe11}>
			<Link to="korzina"><img className={cl.OneFotoGroupe} src={korzina}/></Link>
			{items.length > 0 && <div className={cl.countTovar}>{totalCount}</div>}
			<Link to="login"><img className={cl.OneFotoGroupe} src={account}/></Link>
			<img onClick={()=>setOpenSearch(!openSearch)} className={cl.OneFotoGroupe}src={sourch}/>
			{ openSearch && <Search />}</div>
			<Link to="/Aqua-Technology"  className={cl.logo}>Aqua Technology</Link>
			<div className={cl.phones}>
				<a href="tel: +375296630860" className={cl.phone}>+375296630860</a>
				<a href="tel: +375292511202" className={cl.phone}>+375292511202</a>
			</div>
		</div>	
		<Menu />
	</div>

	</>
)
}


export default Header;