import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const url = "http://localhost:5000/api/pizzas/";
    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setProductos(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <ApiContext.Provider value={{ productos }}>{children}</ApiContext.Provider>
    );
};
export default ApiProvider;
