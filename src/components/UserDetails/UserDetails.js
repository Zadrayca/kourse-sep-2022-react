import React from 'react';

import css from './UserDetails.module.css';

const UserDetails = ({detailsUser, getUserIdByPost}) => {

    const {id, name, username, email, address: {street, suite, city, zipcode, geo}, phone, website, company} = detailsUser;

    return (
        <div className={css.detailsBox}>
            <div>
                <ul>
                    <li>id: {id}</li>
                    <li>name: {name}</li>
                    <li>username: {username}</li>
                    <li>email: {email}</li>
                    <li>address:
                        <ul>
                            <li>street: {street}</li>
                            <li>suite: {suite}</li>
                            <li>city: {city}</li>
                            <li>zipcode: {zipcode}</li>
                            <li>geo:
                                <ul>
                                    <li>lat: {geo.lat}</li>
                                    <li>lng: {geo.lng}</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>phone: {phone}</li>
                    <li>website: {website}</li>
                    <li>company:
                        <ul>
                            <li>name: {company.name}</li>
                            <li>catchPhrase: {company.catchPhrase}</li>
                            <li>bs: {company.bs}</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className={css.btnBox}>
                <button onClick={() => getUserIdByPost(id)}>Posts</button>
                <button onClick={() => getUserIdByPost(null)}>Clear Posts</button>
            </div>
        </div>
    );
};

export {UserDetails};
