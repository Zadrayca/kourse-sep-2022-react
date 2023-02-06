import {CatsAndDogs} from "../../components";

import css from './CatsAndDogsPage.module.css';

const CatsAndDogsPage = () => {
    return (
        <div className={css.CatsAndDogs}>
            <h1>Cats And Dogs</h1>
            <CatsAndDogs/>
        </div>
    );
};

export {
    CatsAndDogsPage
};