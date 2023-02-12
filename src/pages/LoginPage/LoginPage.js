import {useForm} from "react-hook-form";
import {useState} from "react";

import {Button} from "../../components";
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";
import css from "./LoginPage.module.css";

const LoginPage = () => {

    const {register, handleSubmit} = useForm();

    const [error, setError] = useState(null);

    const navigate = useNavigate();


    const login = async (userCredential) => {
        try{
            await authService.login(userCredential);
            setError(null);
            navigate('/cars2');
        } catch (e){
            if (e.response.status === 401) {
                setError(e.response.data);
            }
        }
    };

    return (
        <div className={css.LoginPage}>
            <h1>Login Page</h1>
            <div>
                <form onSubmit={handleSubmit(login)}>
                    <input type={"text"} placeholder={'username'} {...register('username')}/>
                    <input type={"text"} placeholder={'password'} {...register('password')}/>
                    <Button>Login</Button>
                </form>
            </div>
            <div>
                {error?.detail && <div>{error.detail}</div>}
            </div>
        </div>

    );
};

export {
    LoginPage
};
