import cl from'./Menu.module.css';
import {NavLink} from'react-router-dom';


const Menu = () =>{
return <div className={cl.nav}>
	<NavLink to="/katalog" className={cl.item} className = {navData => navData.isActive ? cl.active : cl.item }>Каталог</NavLink>
	<NavLink to="/building" className={cl.item} className = {navData => navData.isActive ? cl.active : cl.item }>Строительство</NavLink>
	<NavLink to="/proeckting" className={cl.item} className = {navData => navData.isActive ? cl.active : cl.item }>Проектирование</NavLink>
	<NavLink to="/servis" className={cl.item} className = {navData => navData.isActive ? cl.active : cl.item }>Сервис</NavLink>
	<NavLink to="/portfolio" className={cl.item} className = {navData => navData.isActive ? cl.active : cl.item }>Портфолио</NavLink>
	<NavLink to="/сontacts" className={cl.item} className = {navData => navData.isActive ? cl.active : cl.item }>Контакты</NavLink>
	<NavLink to="/about" className={cl.item} className = {navData => navData.isActive ? cl.active : cl.item }>О нас</NavLink>
	
</div>
}

export default Menu;