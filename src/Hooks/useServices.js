const { useEffect } = require("react")
const { useState } = require("react")


const useServices = () =>{
    const [services, setServices] = useState([]);

    useEffect( ()=>{
            fetch('./Services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return [services];
} 

export default useServices;