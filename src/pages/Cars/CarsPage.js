import css from './CarsPage.module.css';
import {CarForm} from "../../components";
import {Cars} from "../../components";

const CarsPage = () => {
    return (
        <div className={css.CarsPage}>
            <h1>Cars</h1>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {
    CarsPage
};