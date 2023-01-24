import React from 'react';

import css from './Car.module.css';
import {carService} from "../../services";

const Car = ({car, setUpdateCar, setDel}) => {

    const {id, brand, price, year} = car;

    const deleteCar = async (id) => {

        // console.log(id, 'car');
        await carService.deleteCarById(id);
        setDel(id)
    }

    return (
        <div className={css.carBox}>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <div className={css.btnDiv}>
                <button onClick={() => setUpdateCar(car)}>Update</button>
                <button onClick={() => deleteCar(id)}>Delete</button>
            </div>
        </div>
    );
};

export {
    Car
};
