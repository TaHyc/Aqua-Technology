import React from "react";
import cl from './MakingOrder.module.css';
import { 
    isValid, 
    isExpirationDateValid, 
    isSecurityCodeValid, 
    getCreditCardNameByNumber 
  } from 'creditcard.js';


const PayCopy = () => {
    if(isValid==true){
        console.log(isValid)
        alert('всё гуд')
    }

    const [Numb, setNumb] = React.useState('');
    const [data, setData] = React.useState('');
    const [name, setName] = React.useState('');
    const [cvv, setCvv] = React.useState('');

    //
    const [ErrorNumb, setErrorNumb] = React.useState('Поле должно быть заполнено!');
    const [ErrorName, setErrorName] = React.useState('Поле должно быть заполнено!');
    const [ErrorData, setErrorData] = React.useState('Поле должно быть заполнено!');
    const [ErrorCvv, setErrorCvv] = React.useState('Поле должно быть заполнено!');

    //
    const [DirtyNumb, setDirtyNumb] = React.useState(false);
    const [DirtyName, setDirtyName] = React.useState(false);
    const [DirtyData, setDirtyData] = React.useState(false);
    const [DirtyCvv, setDirtyCvv] = React.useState(false);
    //
    const [formValid, setFormValid] = React.useState(false)

    isValid('4916108926268679'); // returns true 4916108926268679
    isExpirationDateValid('02', data); // returns true 02', '2027
    isSecurityCodeValid(Numb, cvv); // returns true 4556603578296676', '250
    getCreditCardNameByNumber('4539578763621486'); // returns 'Visa' 4539578763621486
 

    const validation = () => {
        if (ErrorNumb || ErrorName || ErrorData || ErrorCvv) {
            setFormValid(false)
            alert('Заполните необходимые поля.')
        }
        else {
            setFormValid(true)
            alert('Ваш заказ принят в обработку.')
        }
    }

    const validateNumb = (e) => {
        setNumb(e.target.value)
        if (e.target.value.length < 16 || e.target.value.length > 16) {
        setErrorName('Неправильно введен номер карты')
    }
        if (!e.target.value) {
        setErrorName('Это поле не может быть пустым')
        }
        else {
            setErrorNumb('')
        }
    };

    const validateData = (e) => {
        setData(e.target.value)
        const ph = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!ph.test(String(e.target.value))) {
            setErrorData('Укажите врок действия карты')
        }
        else {
            setErrorData('')
        }
    }


    const validateName = (e) => {
        setName(e.target.value)
        if (e.target.value.length < 5) {
            setErrorName('Укажите имя держателя карты')
            if (!e.target.value) {
                setErrorName('Это поле не может быть пустым')
            }
        }
        else {
            setErrorName('')
        }
    }

    const validateCvv = (e) => {
        setCvv(e.target.value)
        if (e.target.value.length < 5) {
            setErrorCvv('Укажите CVC/CVV код')
            if (!e.target.value) {
                setErrorCvv('Это поле не может быть пустым')
            }
        }
        else {
            setErrorCvv('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'Numb': setDirtyNumb(true)
                break
            case 'name': setDirtyName(true)
                break
            case 'Data': setDirtyData(true)
                break
            case 'Cvv': setDirtyCvv(true)
                break

        }
    }


    return (<>
        <div className={cl.main}>ОФОРМЛЕНИЕ ЗАКАЗА


            <div className={cl.info}>
                Номер карты:
                {(DirtyNumb && ErrorNumb) && <div style={{ color: 'red' }}>{ErrorNumb}</div>}
                <input name='Numb' value={Numb} onBlur={e => blurHandler(e)} onChange={e => validateNumb(e)} className={cl.data} />
                Держатель карты:
                {(DirtyName && ErrorName) && <div style={{ color: 'red' }}>{ErrorName}</div>}
                <input name='name' value={name} onBlur={e => blurHandler(e)} onChange={e => validateName(e)} className={cl.data} />
                Срок действия карты:
                {(DirtyData && ErrorData) && <div style={{ color: 'red' }}>{ErrorData}</div>}
                <input name='Data' value={data} onBlur={e => blurHandler(e)} onChange={e => validateData(e)} className={cl.data} />
                CVC/CVV:
                {(DirtyCvv && ErrorCvv) && <div style={{ color: 'red' }}>{ErrorCvv}</div>}
                <input name='Cvv' value={cvv} onBlur={e => blurHandler(e)} onChange={e => validateCvv(e)} className={cl.data} />
            </div>
            <button onClick={() => validation()} className={cl.zakaz}>оформить заказ</button>
        </div>

    </>)
}



export default PayCopy;