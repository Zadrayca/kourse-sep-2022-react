import css from './CarsPage2.module.css';
import {CarForm} from "../../components";
import {Cars} from "../../components";

const CarsPage2 = () => {
    return (
        <div className={css.CarsPage}>
            <h1>Cars</h1>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {
    CarsPage2
};