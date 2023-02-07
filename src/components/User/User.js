import {useDispatch} from "react-redux";
import {userActions} from "../../reduxs";

import css from './User.module.css';

const User = ({user}) => {

    const {id, name, username} = user;

    const dispatch = useDispatch();

    return (
        <div className={css.UserBox}>
            <div>Id :{id}</div>
            <div>Name :{name}</div>
            <div>Username :{username}</div>
            <button onClick={()=> dispatch(userActions.setSelectedUser(user))}>Select</button>
            <button onClick={()=> dispatch(userActions.getById({id}))}>apiSelect</button>
        </div>
    );
};

export {
    User
};