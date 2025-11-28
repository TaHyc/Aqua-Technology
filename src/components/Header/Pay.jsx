import React from "react";
import cl from './MakingOrder.module.css';


const Pay = () => {

    const [Numb, setNumb] = React.useState('');
    const [data, setData] = React.useState('');
    const [dataM, setDataM] = React.useState('');
    const [name, setName] = React.useState('');
    const [cvv, setCvv] = React.useState('');

    //
    const [ErrorNumb, setErrorNumb] = React.useState('Поле должно быть заполнено!');
    const [ErrorName, setErrorName] = React.useState('Поле должно быть заполнено!');
    const [ErrorData, setErrorData] = React.useState('Эти поля не могут быть пустыми');
    const [ErrorCvv, setErrorCvv] = React.useState('Поле должно быть заполнено!');

    //
    const [DirtyNumb, setDirtyNumb] = React.useState(false);
    const [DirtyName, setDirtyName] = React.useState(false);
    const [DirtyData, setDirtyData] = React.useState(false);
    const [DirtyDataM, setDirtyDataM] = React.useState(false);
    const [DirtyCvv, setDirtyCvv] = React.useState(false);
    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    //
    const [formValid, setFormValid] = React.useState(false)


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
        if (e.target.value.length < 16) {
        setErrorNumb('Неправильно введен номер карты (меньше 16 символов)')
        if (!e.target.value) {
            setErrorNumb('Это поле не может быть пустым')
            }
        }
        else {
            setErrorNumb('')
        }
    };

    const validateName = (e) => {
        setName(e.target.value.toUpperCase())
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
    const validateDataM = (e) => {
        setDataM(e.target.value)
        if (!digit.includes(e.key)) {
            setErrorData('Укажите срок действия карты M')
        }
        if (!e.target.value) {
            setErrorData('Укажите месяц')
        }
        else {
            setErrorData('')
        }
    }

    const validateData = (e) => {
        setData(e.target.value)
        if (digit.includes(e.key)) {
            setErrorData('Укажите срок действия карты (age)')
        }
        if (!e.target.value) {
            setErrorData('Укажите год')
        }
        else {
            setErrorData('')
        }
    }

    const validateCvv = (e) => {
        setCvv(e.target.value)
        if (e.target.value.length < 3) {
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
            case 'DataM': setDirtyDataM(true)
                break
            case 'Data': setDirtyData(true)
                break
            case 'Cvv': setDirtyCvv(true)
                break
        }
    }

    function testJump(x){
        var ml = ~~x.getAttribute('maxlength');
        if(ml && x.value.length >= ml){
            do{
                x = x.nextSibling;
            }
            while(x && !(/text/.test(x.type)));
            if(x && /text/.test(x.type)){
                x.focus();
            }
        }
    }

    return (<>
        <div className={cl.main}>ОФОРМЛЕНИЕ ЗАКАЗА

        <div className={cl.info} style={{width: '50%', justifyContent: 'space-between'}}>

    Номер карты:
    {(DirtyNumb && ErrorNumb) && <div className={cl.error} >{ErrorNumb}</div>}
    <input name='Numb' onInput={e => testJump(e.target)} maxLength='16' value={Numb} onBlur={e => blurHandler(e)} onChange={e => validateNumb(e)} className={cl.data} />
    Держатель карты:
    {(DirtyName && ErrorName) && <div className={cl.error}>{ErrorName}</div>}
    <input name='name' maxLength="25" onInput={e => testJump(e.target)} value={name} onBlur={e => blurHandler(e)} 
    onChange={e => validateName(e)} className={cl.data} />
    
    <div className={cl.allNumbs}>
    <div className={cl.numbsColumn}>
    Срок действия карты:
    {(DirtyData && ErrorData) && <div className={cl.error}>{ErrorData}</div>}

    <div className={cl.allData}>
    <input name='DataM' onInput={e => testJump(e.target)} maxLength="2" value={dataM}
    onBlur={e => blurHandler(e)} onChange={e => validateDataM(e)} className={cl.data} 
    style={{width: '4vw', height:'30px'}}/>   
/
    <input name='Data' onInput={e => testJump(e.target)} maxLength="2" value={data}
    onBlur={e => blurHandler(e)} onChange={e => validateData(e)} className={cl.data} 
    style={{width: '4vw', height:'30px'}}/>
    </div>
    </div>

    <div className={cl.numbsColumn} style={{marginLeft:'50px'}}>
    CVC/CVV:
    {(DirtyCvv && ErrorCvv) && <div className={cl.error} 
    style={{position:'absolute',marginLeft:'8%',marginTop:'6px'}}>{ErrorCvv}</div>}
    
    <input name='Cvv' value={cvv} maxLength='3' onBlur={e => blurHandler(e)} 
    onChange={e => validateCvv(e)} className={cl.data} style={{width: '4vw', height:'30px'}}/>
            </div>
    </div>
    </div>
    
            <button onClick={() => validation()} className={cl.zakaz}>оформить заказ</button>
        </div>

    </>)
}



export default Pay;