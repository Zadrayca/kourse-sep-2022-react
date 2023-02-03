import React from 'react';

import {CatsAndDogs} from "../../components";


const CatsAndDogsPage = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Cats And Dogs</h1>
            <CatsAndDogs/>
        </div>
    );
};

export {
    CatsAndDogsPage
};