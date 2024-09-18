import { createContext, useEffect, useState } from "react";

export const ApiContextPizza = createContext();

const ApiContextPizzaProvider = ({ children, id }) => {
    const [pizza, setPizza] = useState([]);
    //const url = "http://localhost:5000/api/pizzas/p001/";
    const url = `http://localhost:5000/api/pizzas/${id}`;
    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPizza(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <ApiContextPizza.Provider value={{ pizza }}>{children}</ApiContextPizza.Provider>
    );
};
export default ApiContextPizzaProvider;
