import React, {useState} from 'react';

import css from './Main.module.css';
import {Cars} from "../Cars/Cars";
import {CarForm} from "../CarForm/CarForm";

const Main = () => {

    const [newCar, setNewCars] = useState(null);

    const [updateCar, setUpdateCar] = useState(null);

    return (
        <div className={css.main}>
            <CarForm setNewCars={setNewCars} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
            <Cars newCar={newCar} setUpdateCar={setUpdateCar} updateCar={updateCar}/>
        </div>
    );
};

export {
    Main
};
