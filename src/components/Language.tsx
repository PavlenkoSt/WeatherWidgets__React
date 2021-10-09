import React from 'react'
import s from './Language.module.scss'

const Language = () => {
    return (
        <div className={ s.container }>
            <select>
                <option value="en">En</option>
                <option value="ua">Ua</option>
                <option value="he">He</option>
            </select>
        </div>
    )
}

export default Language
