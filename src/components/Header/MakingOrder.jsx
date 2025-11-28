import React from "react";
import cl from'./MakingOrder.module.css';
import {Link} from'react-router-dom';

const MakingOrder = () =>{

const [buyer, setBuyer] = React.useState(1);
const [email, setEmail] = React.useState('');
const [name, setName] = React.useState('');
const [phone, setPhone] = React.useState('');
const [contact, setContact] = React.useState('');
//
const [ErrorEmail, setErrorEmail] = React.useState('Поле должно быть заполнено!');
const [ErrorName, setErrorName] = React.useState('Поле должно быть заполнено!');
const [ErrorPhone, setErrorPhone] = React.useState('Поле должно быть заполнено!');
const [ErrorContact, setErrorContact] = React.useState('Поле должно быть заполнено!');
//
const [DirtyEmail, setDirtyEmail] = React.useState(false);
const [DirtyName, setDirtyName] = React.useState(false);
const [DirtyPhone, setDirtyPhone] = React.useState(false);
const [DirtyContact, setDirtyContact] = React.useState(false);
//
const [formValid, setFormValid] = React.useState(false)


const validation = () => {
if (ErrorEmail || ErrorName || ErrorPhone) {
setFormValid(false)
alert('Заполните необходимые поля.')
} 
else {
setFormValid(true)
alert('Ваш заказ принят в обработку.')
}
}

const validateEmail = (e) => {
  setEmail(e.target.value)
  const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(!re.test(String(e.target.value).toLowerCase())){
  	setErrorEmail('Почта указана некоректно')
  }
  else{
  	setErrorEmail('')
  }
};

const validatePhone= (e) => {
setPhone(e.target.value)
const ph=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
if (!ph.test(String(e.target.value))) {
setErrorPhone('Номер телефона указан некоректно')
}
else {
setErrorPhone('')
}
}



const validateName= (e) => {
setName(e.target.value)
if (e.target.value.length < 5) {
setErrorName('Данные не могут быть короче 5 символов')
if(!e.target.value) {
setErrorName('Это поле не может быть пустым')
}}
else {
setErrorName('')
}
}

const validateContact= (e) => {
setContact(e.target.value)
if (e.target.value.length < 5) {
setErrorContact('Укажите данные контактного лица')
if(!e.target.value) {
setErrorContact('Это поле не может быть пустым')
}}
else {
setErrorContact('')
}
}

const blurHandler = (e) => {
switch (e.target.name) {
case 'email':setDirtyEmail(true)
	break
case 'name':setDirtyName(true)
	break
case 'phone':setDirtyPhone(true)
	break
case 'contact':setDirtyContact(true)
	break
}
}

//function restrictToInteger(e)
//{
 // e.target.value = target.value.replace(/[^\d.]/g, '');
//}

if(buyer===1){
	return(<>
<div className={cl.main}>ОФОРМЛЕНИЕ ЗАКАЗА
	<div className={cl.buy}>Тип покупателя
		<div className={cl.type}>
			<label><input type="radio" name="type" value="fisic" onClick={()=>setBuyer(1)} defaultChecked/>Физическое лицо</label>
      <label><input type="radio" name="type" value="urist" onClick={()=>setBuyer(2)} />Юридическое лицо</label>
		</div>
	</div>

	<div className={cl.info}>
		*ФИО:
		{(DirtyName && ErrorName) && <div style={{color:'red'}}>{ErrorName}</div>}
		<input name='name' value={name} onBlur={e=>blurHandler(e)} onChange={e=>validateName(e)} className={cl.data}/>
		*E-mail:
		{(DirtyEmail && ErrorEmail) && <div style={{color:'red'}}>{ErrorEmail}</div>}
		<input name='email' value={email} onBlur={e=>blurHandler(e)} onChange={e=>validateEmail(e)} className={cl.data}/>
		*Телефон (формат ввода: 375xxxxxxxxx):
		{(DirtyPhone && ErrorPhone) && <div style={{color:'red'}}>{ErrorPhone}</div>}
		<input name='phone' value={phone} onBlur={e=>blurHandler(e)} onChange={e=>validatePhone(e)} className={cl.data}/>
		*Адрес доставки:
		<input name='adress' onBlur={e=>blurHandler(e)} className={cl.data} />
		Комментарий к заказу:
		<textarea className={cl.data} />
		Купок для скидки:
		<input  className={cl.data}/>
	</div>
	<Link to='/payment' onClick={()=>validation()} className={cl.zakaz}>оформить заказ</Link>
</div>

	</>)
}
else{
	return  (
		<>
		<div className={cl.main}>ОФОРМЛЕНИЕ ЗАКАЗА
	<div className={cl.buy}>Тип покупателя
		<div className={cl.type}>
			<label><input type="radio" name="type" value="fisic" onClick={()=>setBuyer(1)} defaultChecked/>Физическое лицо</label>
        	<label><input type="radio" name="type" value="urist" onClick={()=>setBuyer(2)} />Юридическое лицо</label>
		</div>
	</div>
	<div className={cl.info}>
		*Название компании:
		{(DirtyName && ErrorName) && <div style={{color:'red'}}>{ErrorName}</div>}
		<input  name='name' value={name} onBlur={e=>blurHandler(e)} onChange={e=>validateName(e)} className={cl.data}/>
		Юридический адрес:
		<input className={cl.data}/>
		ИНН:
		<input className={cl.data}/>
		КПП:
		<input className={cl.data} />
		*Контактное лицо:
		{(DirtyContact && ErrorContact) && <div style={{color:'red'}}>{ErrorContact}</div>}
		<input name='contact' value={contact} onBlur={e=>blurHandler(e)} onChange={e=>validateContact(e)} className={cl.data} />
		*E-mail:
		{(DirtyEmail && ErrorEmail) && <div style={{color:'red'}}>{ErrorEmail}</div>}
		<input name='email' value={email} onBlur={e=>blurHandler(e)} onChange={e=>validateEmail(e)} className={cl.data}/>
		*Телефон (формат ввода: 375xxxxxxxxx):
		{(DirtyPhone && ErrorPhone) && <div style={{color:'red'}}>{ErrorPhone}</div>}
		<input name='phone' value={phone} onBlur={e=>blurHandler(e)} onChange={e=>validatePhone(e)} className={cl.data}/>
		Факс:
		<input  className={cl.data}/>
		*Адрес доставки:
		<input name='adress' onBlur={e=>blurHandler(e)} className={cl.data} />
		Комментарий к заказу:
		<textarea  className={cl.data} />
		Купок для скидки:
		<input  className={cl.data}/>
	</div>
	<Link to='/payment' onClick={()=>validation()} className={cl.zakaz}>оформить заказ</Link>

	</div>

</>	
)

}


}


export default MakingOrder;