import {FC, useEffect} from "react";

import css from './Cars.module.css';
import {Car} from "../Car/Car";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../redux";
import {Loader} from "../UI/Loader/Loader";

const Cars: FC = () => {

    const {cars, loading} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch]);

    return (
        <div className={css.CarsBox}>
            {loading ? <Loader/> : cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars
};