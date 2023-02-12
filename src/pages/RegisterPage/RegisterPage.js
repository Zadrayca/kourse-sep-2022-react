import {useForm} from "react-hook-form";

import {Button} from "../../components";
import {carUserService} from "../../services";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const RegisterPage = () => {

    const {register, handleSubmit} = useForm()

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const registerUser = async (user) => {
        try {
            await carUserService.create(user)
            navigate('/login')
        } catch (e) {
            if (e.response.status === 400) {
                console.log(e.response.data);
                setError(e.response.data)
            }
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(registerUser)}>
                    <input type={"text"} placeholder={'username'} {...register('username')}/>
                    <input type={"text"} placeholder={'password'} {...register('password')}/>
                    <Button>Register</Button>
                </form>
            </div>
            <div>
                {error && <div>{JSON.stringify(error)}</div>}
            </div>

        </div>
    );
};

export {
    RegisterPage
};
