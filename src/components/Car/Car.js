import {useDispatch} from "react-redux";

import css from './Car.module.css';
import {carActions} from "../../reduxs";
import {Button} from "../UI";

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
                <Button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</Button>
                <Button onClick={() => dispatch(carActions.deleteById({id}))}>Delete</Button>
            </div>
        </div>
    );
};

export {
    Car
};
