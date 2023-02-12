import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './CarForm2.module.css';
import {carValidator} from "../../validators";
import {carActions2} from "../../reduxs";

const CarForm2 = () => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const dispatch = useDispatch();
    const {carForUpdate2} = useSelector(state => state.cars2);

    useEffect(() => {
        if (carForUpdate2) {
            setValue('brand', carForUpdate2.brand, {shouldValidate: true});
            setValue('price', carForUpdate2.price, {shouldValidate: true});
            setValue('year', carForUpdate2.year, {shouldValidate: true});
        }
    }, [carForUpdate2, setValue])

    const save = async (car) => {
        await dispatch(carActions2.create({car}))
        reset()
    };

    const update = async (car) => {
        await dispatch(carActions2.updateById({id: carForUpdate2.id, car}))
        reset()
    }

    return (
        <div className={css.bigBox}>
            <form onSubmit={handleSubmit(carForUpdate2 ? update : save)} className={css.forms}>
                <div className={css.form}>
                    <input type={"text"} placeholder={'brand'} {...register('brand')}/>
                </div>

                <div className={css.form}>
                    <input type={"text"} placeholder={'price'} {...register('price')}/>
                </div>

                <div className={css.form}>
                    <input type={"text"} placeholder={'year'} {...register('year')}/>
                </div>

                <div className={css.form}>
                    <button disabled={!isValid}>{carForUpdate2 ? 'Update car' : 'Create car'}</button>
                </div>
            </form>

            <div className={css.errorsBox}>
                <div className={css.errors}>
                    {errors.brand && <div className={css.error}>{errors.brand.message}</div>}
                </div>

                <div className={css.errors}>
                    {errors.price && <div className={css.error}>{errors.price.message}</div>}
                </div>

                <div className={css.errors}>
                    {errors.year && <div className={css.error}>{errors.year.message}</div>}
                </div>
                <div className={css.errors}></div>

            </div>
        </div>
    );
};

export {
    CarForm2
};
