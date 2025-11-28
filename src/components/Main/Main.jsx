import React, {useEffect}  from "react";
import cl from'./Main.module.css';
import arrownRight from '../assets/стрелка.png'
import {Link} from'react-router-dom';
import fotoRight from '../assets/фото справа.png'
import foto2left from '../assets/наши услуги.png'
import arrownLU from '../assets/стрелка лево-верх.png'
import blueFoto from '../assets/bluediv.png'
import gomel from '../assets/gomel.png'
import radon from '../assets/Radon.png'
import close from '../assets/close.png'
import p3 from '../assets/p3.png'
import pepa from '../assets/свин.png'
import kochel from '../assets/кошелек.png'
import face from '../assets/face.png'
import fura from '../assets/фура.png'
import Modal from './Modal'
 
const Main = () =>{

const [modalActive, setModalActive]=React.useState(false)
 window.scrollTo(0, 0)

return  (
	<>
	<Modal active={modalActive} setActive={setModalActive}/>
	<div className={cl.mainDiv}>
		<div className={cl.left}>
		<div className={cl.mainText}>бассейны “под ключ”</div>
		<div className={cl.mainMinText}>Компания Aqua Technology проектирует и создаёт бассейны для профессионального спорта и 
		активного отдыха с 2009 года. Обратившись к нам, вы получите гарантию качества и надёжности по доступным ценам.</div>
			<div className={cl.elipseG}>
			<div className={cl.elipseC}>
				<Link to="/about" style={{color: '#444444'}}>О КОМПАНИИ<img className={cl.arrownRight}src={arrownRight}/></Link>
			</div>
			</div>
		</div>
		<div className={cl.right}><div className={cl.divFoto}><img className={cl.mainR}src={fotoRight}/></div></div>
	</div>

<div className={cl.ouaText}>Наши услуги</div>
<div className={cl.ouaDiv}>
	<div className={cl.left2}>
	<img className={cl.foto2left}src={foto2left}/></div>

	<div className={cl.right2}>
		<Link to="/building" className={cl.right2Text}>строительство бассейнов<img className={cl.arrownLU}src={arrownLU}/></Link>
		<Link to="/proeckting" className={cl.right2Text}>проектирование бассейнов<img className={cl.arrownLU}src={arrownLU}/></Link>
		<Link to="/katalog" className={cl.right2Text}>продажа оборудования для бассейнов<img className={cl.arrownLU}src={arrownLU}/></Link>
		<Link to="/katalog" className={cl.right2Text}>продажа химии для бассейнов<img className={cl.arrownLU}src={arrownLU}/></Link>
	</div>
</div>

	<div className={cl.blueDiv}>
      <h1 className={cl.blueMainText}>Почему выбирают нас?</h1>
		
<div className={cl.blueDivText}>
	<div className={cl.blueTextColumn}>
		<div className={cl.gorizont} style={{marginLeft: '-4.5vw'}}>
		<img className={cl.icon}src={fura} />Первый импортёр в беларуси</div>
	<div className={cl.blueText}>На сайте представлено более 3000 наименований товаров, необходимых для успешного строительства и функционирования бассейнов, саун, прудов.
</div>

	<div className={cl.gorizont}>
	<img className={cl.icon}src={kochel}/>более 100 закрытых гос.проектов</div>
	<div className={cl.blueText}>Мы специализируемся на проектировании и строительстве общественных бассейнов и СПА-центров. На счету компании более 100 завершенных государственных объектов.
</div>
	</div>

	<div className={cl.blueTextColumn}>
	<div className={cl.gorizont}>
	<img className={cl.icon}src={pepa}/>выгодно</div>
	<div className={cl.blueText}>Предлагаем экономически выгодные решения, систему бонусов и скидок для постоянных клиентов.</div>
	<div className={cl.gorizont}>
	<img className={cl.icon}src={face}/>опыт работы более 10 лет</div>
	<div className={cl.blueText}>Мы уверены в качестве предоставляемых нами услуг и готовы браться за самые сложные проекты.
</div>
	</div>
	<img className={cl.BlueFoto}src={blueFoto}/>
</div>
	
	</div>

<div className={cl.DivOuaProjeckts}>
	<h1 className={cl.ProjecktsMainText}>наши проекты</h1>

	<div className={cl.p5}>
		<div className={cl.p}><img className={cl.pFoto} src={gomel}/><div className={cl.p5Main}>Общественные бассейны</div><div className={cl.p5text}>Дворец водных видов спорта, г. Гомель</div></div>
		<div className={cl.p}><img className={cl.pFoto} src={radon}/><div className={cl.p5Main}>Общественные бассейны</div><div className={cl.p5text}>Санаторий Радон</div></div>
		<div className={cl.p}><img className={cl.pFoto} src={p3}/><div className={cl.p5Main}>частные бассейны</div><div className={cl.p5text}>Бассейн на участке</div></div>
		<div className={cl.p}><img className={cl.pFoto} src={close}/><div className={cl.p5Main}>частные бассейны</div><div className={cl.p5text}>Частный закрытый бассейн</div></div>
	</div>

	<div className={cl.elipseG} style={{margin:'auto', color: '#444444'}}>
		<div className={cl.elipseC}>
			<Link to="/portfolio" style={{color: '#444444'}}>СМОТРЕТЬ БОЛЬШЕ</Link>
		</div>
	</div>

</div>

	<div className={cl.request}><div style={{fontSize: '1.2vw', textTransform: 'none', width: '67%'}}>
	<div  style={{fontWeight: 'bolder',fontSize: '1.5vw', textTransform: 'uppercase'}}>
	расчёт стоимости</div>
	Заполните форму заявки, введите исходные данные, и наши специалисты свяжутся с Вами в кратчайшие сроки.</div>
	<div className={cl.button}onClick={()=>setModalActive(true)}>заказать проект</div></div>
	

	</>
	)
}


export default Main;