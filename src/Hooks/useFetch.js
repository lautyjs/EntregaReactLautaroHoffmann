import { useEffect, useState } from "react";

export const useFetch = (url, options) => {
    const [data, setData] = useState(null)

    useEffect( () => {
        fetch(url, options)
        .then(resp => resp.json())
        .then(jsonData => setData(jsonData))
        .catch(error => console.log(error))
    }, [url])

    return data
}