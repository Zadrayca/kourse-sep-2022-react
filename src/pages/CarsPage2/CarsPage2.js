import css from './CarsPage2.module.css';
import {CarForm2} from "../../components";
import {Cars2} from "../../components";

const CarsPage2 = () => {
    return (
        <div className={css.CarsPage}>
            <h1>Cars 2</h1>
            <CarForm2/>
            <Cars2/>
        </div>
    );
};

export {
    CarsPage2
};