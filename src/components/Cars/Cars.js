import React, {useEffect, useState} from 'react';

import css from './Cars.module.css';
import {Car} from "../Car/Car";
import {carService} from "../../services";

const Cars = ({newCar, setUpdateCar}) => {

    const [cars, setCars] = useState([]);

    const [delCar, setDelCar] = useState(null);

    useEffect(() => {
        carService.getAllCar().then(({data}) => setCars([...data]))
    }, [newCar, delCar]);

    return (
        <div className={css.bigBox}>
            {cars && cars.map(car => <Car key={car.id} car={car} setUpdateCar={setUpdateCar} setDelCar={setDelCar}/>)}
        </div>
    );
};

export {
    Cars
};
