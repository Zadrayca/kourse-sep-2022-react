import {useDispatch} from "react-redux";
import {userActions} from "../../reduxs";

import css from './User.module.css';
import {Button} from "../UI";

const User = ({user}) => {

    const {id, name, username} = user;

    const dispatch = useDispatch();

    return (
        <div className={css.UserBox}>
            <div>Id :{id}</div>
            <div>Name :{name}</div>
            <div>Username :{username}</div>
            <div className={css.btnDiv}>
                <Button onClick={()=> dispatch(userActions.setSelectedUser(user))}>Select</Button>
                <Button onClick={()=> dispatch(userActions.getById({id}))}>apiSelect</Button>
            </div>
        </div>
    );
};

export {
    User
};