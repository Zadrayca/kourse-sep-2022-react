import React, {useState} from 'react';
import {Cars} from "../Cars/Cars";
import {CarForm} from "../CarForm/CarForm";

const Main = () => {

    const [newCar, setNewCars] = useState(null);

    const getNewCar = (Car) => {
        setNewCars(Car);
    }

    const [updateCar, setUpdateCar] = useState(null);

    // const getUpdateCar = (Car) => {
    //     setUpdateCar(Car);
    // }

    // console.log(updateCar);

    return (
        <div>
            <CarForm getNewCar={getNewCar} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
            <Cars newCar={newCar} setUpdateCar={setUpdateCar} updateCar={updateCar}/>
        </div>
    );
};

export {
    Main
};
