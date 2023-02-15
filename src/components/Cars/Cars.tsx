import {FC} from "react";

import css from './Cars.module.css';
import {Car} from "../Car/Car";

const Cars: FC = () => {

    // const {cars, loading} = useSelector(state => state.cars);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(carActions.getAll())
    // }, [dispatch]);

    return (
        <div className={css.CarsBox}>
            {/*{cars.map(car => <Car key={car.id} car={car}}*/}
            {/*{loading ? <Loader/> : cars.map(car => <Car key={car.id} car={car}/>)}*/}
        </div>
    );
};

export {
    Cars
};