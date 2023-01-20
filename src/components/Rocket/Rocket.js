import React from 'react';

import css from './Rocket.module.css';

const Rocket = ({rocket}) => {

    const {mission_name, launch_year, links} = rocket;

    return (
        <div className={css.rocketBox}>
            <div className={css.rocketMiniBox}>
                <div>Mission name: {mission_name}</div>
                <div>Launch year: {launch_year}</div>
            </div>
            <div className={css.rocketMiniBox}>
                <img src={links.mission_patch_small} alt={mission_name}/>
            </div>
        </div>
    );
};

export {Rocket};
