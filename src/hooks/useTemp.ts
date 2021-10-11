import { useEffect, useState } from "react"
import celsiusToFarengeit from "../utilts/celsiusToFarengeit"

const useCalc = (scale: 'F' | 'C', temp: number, feelsLike: number) => {
    const [ isCelsiusScale, setIsCelsiusScale ] = useState(true)

    useEffect(() => {
        setIsCelsiusScale(scale === 'C')
    }, [scale])

    const tempCalcValue = isCelsiusScale ? Math.round(temp) : Math.round(celsiusToFarengeit(temp))
    const feelsLikeCalc = isCelsiusScale ? Math.round(feelsLike) : Math.round(celsiusToFarengeit(feelsLike))

    return {
        isCelsiusScale,
        tempCalcValue,
        feelsLikeCalc
    }
}

export default useCalc