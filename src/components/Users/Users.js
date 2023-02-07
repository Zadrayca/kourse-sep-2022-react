import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userActions} from "../../reduxs";
import {usersService} from "../../services";
import {User} from "../User/User";
import css from './Users.module.css';

const Users = () => {

    const dispatch = useDispatch();
    const {users, selectedUser} = useSelector(state => state.users);

    useEffect(() => {
        usersService.getAllUsers().then(({data}) => dispatch(userActions.getAll(data)))
    },);


    return (

        <div className={css.UsersBox}>
            <h1>Users Page</h1>
            <div className={css.SelectedUser}><h3>Selected User</h3>
                {selectedUser && <User user={selectedUser}/>}
            </div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>

    );
};


export {
    Users
};