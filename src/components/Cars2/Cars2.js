import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import css from './Cars2.module.css';
import {carActions2} from "../../reduxs";
import {Button, Loader} from "../UI";
import {useSearchParams} from "react-router-dom";

const Cars2 = () => {

    const {cars2, loading2, prev, next} = useSelector(state => state.cars2);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page:'1'});

    useEffect(() => {
        dispatch(carActions2.getAll({page:query.get('page')}))
    }, [dispatch, query]);

    console.log(cars2);
    return (
        <div className={css.CarsBox}>
            <div>
                <Button disabled={!prev} onClick={()=> setQuery(query=> ({page:+query.get('page')-1}))}>Prev page</Button>
                <Button disabled={!next} onClick={()=> setQuery(query=> ({page:+query.get('page')+1}))}>Next page</Button>
            </div>
            {loading2 ? <Loader/> : cars2.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars2
};
