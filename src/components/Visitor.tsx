"use client"

import {useEffect, useState} from "react";


export const Visitor = () => {
    const [count, setCount] = useState();


    useEffect(() => {
        const fetchCount = async () => {
            const response = await fetch('/api/visitor');
            const data = await response.json();
            setCount(data);
        };

        fetchCount();
    }, []);
    useEffect(() => {
        const incrementCount = async () => {
            const body = {count}
            await fetch('/api/increment', {method: 'POST', body: JSON.stringify(body),});
        };

        incrementCount();
    }, []);


    return (
        <div>
            {!count ? "Загрузка..." : <h1>Счетчик посещений: {count}</h1>}
        </div>
    );
};