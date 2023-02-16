import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import css from '../Cars/Cars.module.css';
import {carService} from "../../services";
import {ICar} from "../../interfaces";
import {Car} from "../Car/Car";
import {useAppLocation} from "../../hooks";

const CarDetails: FC = () => {

    const {id} = useParams<{id:string}>();

    const [car, setCar] = useState<ICar | null>(null);

    const {state} = useAppLocation<ICar>();

    useEffect(() => {
        if (state){
            setCar(state)
        } else {
            carService.getById(id!).then(({data})=> {setCar(data)})
        }
    }, [id, state]);


    return (
        <div className={`${css.CarsBox} ${css.Details}`}> <h3>Car Details</h3>
            {car && <Car car={car}/>}
        </div>
    );
};

export {
    CarDetails
};
