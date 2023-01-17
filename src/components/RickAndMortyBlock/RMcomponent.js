import React, {useEffect, useState} from 'react';

let allUser = [];

export function GetChar() {

    const [user, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    }, []);

    allUser = user;
    return allUser;
}

export const RMcomponent = () => {

    return (
        <div className={'components'}>
            {allUser.map(value =>
                <div key={value.id} className={'component'}>
                    <div className={'attr'}>
                        {value.id}<br/>
                        {value.name}<br/>
                        {value.status}<br/>
                        {value.species}<br/>
                        {value.gender}
                    </div>
                    <img key={value.id} src={value.image} alt={`${value.name}`}/>
                </div>
            )}
        </div>
    );
};


