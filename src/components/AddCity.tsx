import React from 'react'
import s from './AddCity.module.scss'

const AddCity = () => {
    return (
        <div className={s.container} >
            <input 
                className={s.input} 
            />
            <button 
                className={s.btn}
            >Add</button>
        </div>
    )
}

export default AddCity
