import React, { useState } from 'react'
import s from './AddCity.module.scss'

const AddCity = () => {

    const [ inputCity, setInputCity ] = useState('')

    const addCityHandler = () => {
        if(inputCity){
            console.log(inputCity)
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
