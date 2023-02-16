import {FC, ReactNode} from 'react';
import {useNavigate} from "react-router-dom";

import {MyButton} from '../UI/MyButton/MyButton';
import css from './Car.module.css';
import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {carActions} from "../../redux";

interface IProps {
    car: ICar,
    children?: ReactNode
}

const Car: FC<IProps> = ({car}) => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const {id, brand, price, year} = car;

    return (
        <div className={css.carBox}>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <div className={css.btnDiv}>
                <MyButton onClick={() => navigate(id.toString(), {state:car})}>Car Details</MyButton>
                <MyButton onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</MyButton>
                <MyButton onClick={() => dispatch(carActions.deleteById({id}))}>Delete</MyButton>
            </div>
        </div>
    );
};

export {
    Car
};
