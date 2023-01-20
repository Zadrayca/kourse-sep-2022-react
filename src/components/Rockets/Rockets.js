import React from 'react';
import {Rocket} from "../Rocket/Rocket";
import {useEffect, useState} from "react";
import {rocketService} from "../../services/rocketService";
import css from "./Rockets.module.css";

const Rockets = () => {

    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        console.log(rocketService.getAllRockets().then(value => setRockets(value)));
    }, []);

    const filterRockets = rockets.filter(rocket => rocket.launch_year !== '2020');

    return (
            <div className={css.rocketsBox}>
                {filterRockets && filterRockets.map(rocket => <Rocket key={rocket.flight_number} rocket={rocket}/>)}
            </div>
    );
};

export {Rockets};
