import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../reduxs";
import {User} from "../User/User";
import css from './Users.module.css';

const Users = () => {

    const dispatch = useDispatch();
    const {users, selectedUser, errors, loading} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(userActions.getAll())
    }, [dispatch]);

    return (
        <div className={css.UsersBox}>
            <h1>Users Page</h1>
            <div className={css.SelectedUser}>
                <h3>Selected User</h3>
                {selectedUser && <User user={selectedUser}/>}
            </div>
            {errors && JSON.stringify(errors)}
            {loading && <h1>Loading.......</h1>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>

    );
};

export {
    Users
};