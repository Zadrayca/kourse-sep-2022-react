import {FC, ReactNode} from 'react';

import css from 'Car.module.css';
import {ICar} from "../../interfaces";

interface IProps {
    car: ICar,
    children?: ReactNode
}

const Car: FC<IProps> = ({car}) => {

    const {id, brand, price, year} = car;

    return (
        <div className={css.carBox}>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <div className={css.btnDiv}>
                {/*<Button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</Button>*/}
                {/*<Button onClick={() => dispatch(carActions.deleteById({id}))}>Delete</Button>*/}
            </div>
        </div>
    );
};

export {
    Car
};
