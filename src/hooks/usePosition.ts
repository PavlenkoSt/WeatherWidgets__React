import { useState, useEffect } from 'react'

export const usePosition = () => {

    const [error, setError] = useState('')

    const [position, setPosition] = useState({ 
        latitude: null as number | null, 
        longitude: null as number | null
    })

    const onChange: PositionCallback = (position) => setPosition({ 
            latitude: position.coords.latitude, 
            longitude: position.coords.longitude
        })

    const onError: PositionErrorCallback = (error) => setError(error.message)

    useEffect(() => {
        const geo = navigator.geolocation

        if (!geo) {
            setError('Browser not supported geolocation')
            return
        }

        const watcher = geo.watchPosition(onChange, onError)

        return () => geo.clearWatch(watcher)
    }, [])

    return {...position, error}
}