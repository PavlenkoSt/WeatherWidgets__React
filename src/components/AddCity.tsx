import React, { useState } from 'react'
import s from './AddCity.module.scss'
import { toast } from 'react-toastify'

const AddCity = () => {

    const [ inputCity, setInputCity ] = useState('')

    const toastOptions = {
        hideProgressBar: true,
        autoClose: 2000,
        position: 'top-center'
    }

    const addCityHandler = () => {
        if(inputCity){
            console.log(inputCity)
        }else{
            toast('The field cannot be empty', toastOptions as {})
        }
    }

    return (
        <div className={ s.container } >
            <input 
                className={ s.input } 
                value={ inputCity }
                onChange={ (e) => setInputCity(e.target.value) }
            />
            <button 
                className={ s.btn }
                onClick={ addCityHandler }
            >Add</button>
        </div>
    )
}

export default AddCity
