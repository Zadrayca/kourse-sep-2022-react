import React, {useEffect, useState} from 'react';

import {Car} from "../Car/Car";
import {carService} from "../../services";

const Cars = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAllCar().then(({data}) => setCars([...data]))
    }, []);


    return (
        <div>
            {cars && cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars
};
