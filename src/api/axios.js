import { useState } from 'react';
import { useEffect } from 'react';
import  axios  from 'axios';

const Axios =({url}) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("");
    useEffect( () => {
        const fetchData = () => {
            axios
            .get(url)
            .then((res) => setResponse(res.data))
            .catch((err) => setError(err))
        };
        fetchData();
    },[url]);
    return {response,error}
}
export default Axios