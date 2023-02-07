import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import css from './Cars.module.css';
import {useEffect} from "react";

import {carActions} from "../../reduxs";


const Cars = () => {

    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch]);

    return (
        <div className={css.CarsBox}>
            {cars && cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars
};
