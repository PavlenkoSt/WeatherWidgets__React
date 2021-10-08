import React, { FC, useState } from 'react'
import s from './AddCity.module.scss'
import { toast } from 'react-toastify'
import weatherAPI from '../API/weatherAPI'
import useAction from '../hooks/useAction'
import { CityWeather } from '../models/weather'
import localStorageService from '../localStorage'
import config from '../config.json'
import PlacesAuthocomplete from 'react-places-autocomplete'
//@ts-ignore
import scriptLoader from 'react-async-script-loader'


const AddCity: FC<any> = ({ isScriptLoaded, isScriptLoadSucceed }) => {

    const [ inputCity, setInputCity ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    const { addCityWeather } = useAction()

    const toastOptions = {
        hideProgressBar: true,
        autoClose: 2000,
        position: 'bottom-center'
    }

    const addCityHandler = async () => {
        if(inputCity){
            setIsLoading(true)
            const data = await weatherAPI.getWeatherByCity(inputCity)

            if(data.cod === '200'){
                const cityWeather = {
                    city: data.city.name,
                    country: data.city.country,
                    weather: data.list,
                    id: Date.now(),
                    tempScale: 'C'
                } as CityWeather

                addCityWeather(cityWeather)
                localStorageService.addCity(cityWeather)
                setInputCity('')
                setIsLoading(false)

                return
            }

            setIsLoading(false)

            toast('City not found', toastOptions as {})
        }else{
            toast('The field cannot be empty', toastOptions as {})
        }
    }

    if(!isScriptLoaded || !isScriptLoadSucceed){
        return <div className={ s.load } >Loading...</div>
    }

    return (
        <div className={ s.container } >
            {/* <input 
                className={ s.input } 
                value={ inputCity }
                onChange={ (e) => setInputCity(e.target.value) }
            /> */}
            <PlacesAuthocomplete value={ inputCity } onChange={ (value) => setInputCity(value) } onSelect={ (value) => setInputCity(value) } >
                {
                    ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    className: s.input,
                                  })}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )
                }
            </PlacesAuthocomplete>
            <button 
                className={ s.btn }
                onClick={ addCityHandler }
                disabled={ isLoading }
            >Add</button>
        </div>
    )
}

export default scriptLoader(
    ['https://maps.googleapis.com/maps/api/js?key=AIzaSyAbmMW9WnFV2Or3b9w4q6UtuOyB1tQXVNY&libraries=places']
)(AddCity)
