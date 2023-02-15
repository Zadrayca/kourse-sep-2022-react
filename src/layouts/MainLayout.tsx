import {Outlet} from "react-router-dom";
import {FC} from "react";

import css from './MainLayout.module.css';
import {Header} from "../components";

const MainLayout: FC = () => {
    return (
        <div className={css.Main}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {
    MainLayout
};