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
        <div>
            {allUser.map(value =>
                <div key={value.id}>
                    {value.id}
                    {value.name}
                    {/*<div></div>*/}
                <img key={value.id} src={value.image} alt={"image"}/>
                </div>
            )}
        </div>
    );
};


