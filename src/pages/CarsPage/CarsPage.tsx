import {FC} from "react";

import css from './CarsPage.module.css';

import {CarForm, Cars} from "../../components";

const CarsPage: FC = () => {
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