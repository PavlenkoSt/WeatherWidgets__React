import React, { useState } from 'react'
import s from './AddCity.module.scss'
import { toast } from 'react-toastify'
import weatherAPI from '../API/weatherAPI'
import useAction from '../hooks/useAction'

const AddCity = () => {

    const [ inputCity, setInputCity ] = useState('')

    const { addCitiesWeather } = useAction()

    const toastOptions = {
        hideProgressBar: true,
        autoClose: 2000,
        position: 'bottom-center'
    }

    const addCityHandler = async () => {
        if(inputCity){
            const data = await weatherAPI.getWeatherByCity(inputCity)

            if(data.cod === '200'){
                addCitiesWeather({
                        city: data.city.name,
                        country: data.city.country,
                        weather: data.list,
                        id: Date.now()
                    })
                setInputCity('')
                return
            }

            toast('City not found', toastOptions as {})
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
