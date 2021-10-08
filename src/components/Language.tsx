import React from 'react'
import s from './Language.module.scss'

const Language = () => {
    return (
        <div className={ s.container }>
            <select>
                <option value="En">En</option>
                <option value="Ru">Ru</option>
                <option value="He">He</option>
            </select>
        </div>
    )
}

export default Language
