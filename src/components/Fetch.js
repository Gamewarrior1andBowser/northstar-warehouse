import { useEffect, useState } from 'react';

function Fetch() {
    const URL = 'https://fakestoreapi.com/products';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(URL);
                const data =  await response.json();
                console.log('Data from fetch')
                console.log(data);
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchProducts();
    }, []);

    return (
        <></>
    );
}

export default Fetch;