import css from './User.module.css';
import {useDispatch} from "react-redux";
import {userActions} from "../../reduxs";

const User = ({user}) => {

    const {id, name, username} = user;

    const dispatch = useDispatch();

    return (
        <div className={css.UserBox}>
            <div>Id :{id}</div>
            <div>Name :{name}</div>
            <div>Username :{username}</div>
            <button onClick={()=> dispatch(userActions.setSelectedUser(user))}>Select</button>
        </div>
    );
};

export {
    User
};