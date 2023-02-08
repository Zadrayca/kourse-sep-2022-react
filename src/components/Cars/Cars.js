import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import css from './Cars.module.css';
import {carActions} from "../../reduxs";
import {Loader} from "../UI";

const Cars = () => {

    const {cars, loading} = useSelector(state => state.cars);
    const dispatch = useDispatch();

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
