const { useState, useEffect } = require("react")

export const useGeolocation = () => {
    const [status, setStatus] = useState('pending')
    const [latitude, setLatitude] = useState(undefined)
    const [longitude, setLongitude] = useState(undefined)
    useEffect(() => {
    navigator.geolocation.getCurrentPosition(
    (res) => {
    setStatus('success')
    setLatitude(res.coords.latitude)
    setLongitude(res.coords.longitude)
    },
    (err) => {
    console.log(err)
    setStatus('error')
    }
    )
    }, [])
    return { status, latitude, longitude }
    }
    // Usage
    //const { status, latitude, longitude } = useGeolocation()
    //Struggling with hooks, or want to be more comfortabl