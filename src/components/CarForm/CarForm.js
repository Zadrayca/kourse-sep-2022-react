import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './CarForm.module.css';
import {carValidator} from "../../validators";
import {carActions} from "../../reduxs";

const CarForm = () => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate, setValue])

    const save = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    };

    const update = async (car) => {
        await dispatch(carActions.updateById({id: carForUpdate.id, car}))
        reset()
    }

    return (
        <div className={css.bigBox}>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)} className={css.forms}>
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
                    <button disabled={!isValid}>{carForUpdate ? 'Update car' : 'Create car'}</button>
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
    CarForm
};
