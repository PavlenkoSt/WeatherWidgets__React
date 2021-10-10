import React, { FC, useState } from 'react'
import s from './AddCity.module.scss'
import { toast } from 'react-toastify'
import useAction from '../hooks/useAction'
import { CityWeather } from '../models/weather'
import PlacesAuthocomplete from 'react-places-autocomplete'
import cityFormat from '../utilts/cityFormat'

//@ts-ignore
import scriptLoader from 'react-async-script-loader'
import { useTypedSelector } from '../hooks/useTypedSelector'
import terms from '../utilts/terms'


const AddCity: FC<any> = ({ isScriptLoaded, isScriptLoadSucceed }) => {

    const [ inputCity, setInputCity ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    const { lang, rtl } = useTypedSelector(state => state.optionsReducer)

    const { addCityWeatherThunk } = useAction()

    const toastOptions = {
        hideProgressBar: true,
        autoClose: 2000,
        position: 'bottom-center',
        closeButton: false,
        className: rtl ? s.rtl : ''
    }

    const addCityHandler = async (value?: string) => {
        if(inputCity){
            setIsLoading(true)
            const city = await addCityWeatherThunk(value ? value : inputCity, lang) as unknown as CityWeather

            if(city){
                setInputCity('')
                setIsLoading(false)
                return
            }

            toast(terms.cityNotFound[lang], toastOptions as {})
            setIsLoading(false)
        }else{
            toast(terms.emptyField[lang], toastOptions as {})
        }
    }

    const selectSuggestionHandler = (value: string) => {
        const city = cityFormat(value)
        setInputCity(() => city)
        addCityHandler(city)
    }

    if(!isScriptLoaded || !isScriptLoadSucceed){
        return <div className={ s.load } >Loading...</div>
    }

    return (
        <div className={ rtl ? `${s.container} ${s.rtl}` : s.container } >
            <PlacesAuthocomplete 
                value={ inputCity } 
                onChange={ (value) => setInputCity(value) } 
                onSelect={ selectSuggestionHandler } 
                searchOptions={ { types: ['(cities)'] } }
            >
                {
                    ({ getInputProps, suggestions, getSuggestionItemProps }) => (
                        <div className={ s.inputContainer } >
                            <input
                                { ...getInputProps({
                                    className: s.input,
                                }) }
                                dir={ rtl ? 'rtl' : 'ltl' }
                                
                            />
                            <div className={ s.dropdown }>
                                { suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? `${s.suggestion} ${s.active}`
                                        : s.suggestion
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, { className })}
                                            key={ suggestion.placeId }
                                        >
                                            <span>{ cityFormat(suggestion.description) }</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }
            </PlacesAuthocomplete>
            <button 
                className={ s.btn }
                onClick={ () => addCityHandler() }
                disabled={ isLoading }
            >{
                terms.add[lang]
            }</button>
        </div>
    )
}

export default scriptLoader(
    ['https://maps.googleapis.com/maps/api/js?key=AIzaSyAbmMW9WnFV2Or3b9w4q6UtuOyB1tQXVNY&libraries=places']
)(AddCity)
