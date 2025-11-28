import React from 'react';
import "./Modal.css"
import cl from "./Modal.module.css"
import cross from '../assets/close_icon.svg'

const Modal = ({active, setActive})=>{

return (
<div onClick={()=>setActive(false)} className={active? 'modal active': 'modal'}>
	<div className='modalContent' onClick={e=>e.stopPropagation()}>
	<img  className={cl.cross} onClick={()=>setActive(false)}src={cross}/>
	<div className={cl.title}>Расчёт стоимости бассейна</div>
	<div className={cl.info}>
		<input placeholder='Контактное лицо' className={cl.data}/>
		<input placeholder='Объект (название, адрес)' className={cl.data}/>
		<input placeholder='Контактный телефон' className={cl.data}/>
		<input placeholder='E-mail' className={cl.data} />
		<input placeholder='Длина бассейна' className={cl.data}/>
		<input placeholder='Ширина бассейна' className={cl.data}/>
		<input placeholder='Глубина бассейна' className={cl.data}/>
		<div className={cl.chek} style={{marginTop: '5vw'}}>Расположение бассейна
			<label><input type="radio" name="type"  defaultChecked/>в помещении</label>
      		<label><input type="radio" name="type" />на улице</label>
		</div>
		<div className={cl.chek}>Тип бассейна
			<label><input type="radio" name="ff"  defaultChecked/>частный</label>
			<label><input type="radio" name="ff" />общественный</label>
      		<label><input type="radio" name="ff" />детский</label>
		</div>
		<div className={cl.chek}>Требуется строительство чаши?
			<label><input type="radio" name="gg"  defaultChecked/>да</label>
      		<label><input type="radio" name="gg" />нет</label>
		</div>
		<div className={cl.chek}>Тип чаши
			<label><input type="radio" name="hh"  defaultChecked/>мозаика</label>
      		<label><input type="radio" name="hh" />плитка</label>
      		<label><input type="radio" name="hh" />плёнка</label>
      		<label><input type="radio" name="hh" />другое</label>
		</div>
		<div className={cl.chek}>Тип перелива воды
			<label><input type="radio" name="bb"  defaultChecked/>скиммерный</label>
      		<label><input type="radio" name="bb" />переливной</label>
		</div>
		<div className={cl.chek}>Обеззараживание воды
			<label><input type="radio" name="oo"  defaultChecked/>ручное-хлорное</label>
      		<label><input type="radio" name="oo" />автоматическое-хлорное</label>
      		<label><input type="radio" name="oo" />бесхлорное</label>
		</div>
		<div className={cl.chek}>Освещение
			<label><input type="radio" name="rr"  defaultChecked/>нет</label>
      		<label><input type="radio" name="rr" />светодиодное белое</label>
      		<label><input type="radio" name="rr" />светодиодное RGB (цветное)</label>
      		<label><input type="radio" name="rr" />галогенное</label>
		</div>
		<div className={cl.chek}>Водные атракционы
<div><input  type="checkbox"  />искусственное освещение</div>
<div><input  type="checkbox" />водопад</div>
<div><input  type="checkbox" />гидромассаж</div>
<div><input  type="checkbox" />детская горка</div>
<div><input  type="checkbox"  />воздушный гейзер</div>
<div><input  type="checkbox"  />волны в бассейне</div>
<div><input  type="checkbox"  />разделительные дорожки</div>
<div><input  type="checkbox"  />стартовые тумбы</div>
</div>
<textarea className={cl.data} placeholder='Откуда вы узнали о нас?'/>
<textarea className={cl.data} style={{paddingTop:'1vw', marginBottom: '3vw'}}
 placeholder='Дополнительная информация и комментарии'/>
<a href="https://t.me/AquaTechnology_bot" className={cl.link}>Заказать расчёт</a>

	</div>

	</div>

</div>
)
}
	
export default Modal;