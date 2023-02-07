import {useDispatch} from "react-redux";

import css from './Car.module.css';
import {carActions} from "../../reduxs";

const Car = ({car}) => {

    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div className={css.carBox}>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>

            <div className={css.btnDiv}>
                <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
                <button onClick={() => dispatch(carActions.deleteById({id}))}>Delete</button>
            </div>
        </div>
    );
};

export {
    Car
};
