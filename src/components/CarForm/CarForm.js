import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './CarForm.module.css';
import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = ({setNewCars, updateCar, setUpdateCar}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const submit = async (car) => {
        if (updateCar) {
            const {data} = await carService.updateCarById(updateCar.id, car);
            setNewCars(data);
            setUpdateCar(null);
            reset();
        } else {
            const {data} = await carService.createCar(car);
            setNewCars(data);
            reset();
        }
    }

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand);
            setValue('price', updateCar.price);
            setValue('year', updateCar.year);
        }
    }, [updateCar, setValue])

    return (
        <div className={css.bigBox}>
            <form onSubmit={handleSubmit(submit)} className={css.forms}>
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
                    <button disabled={!isValid}>{updateCar ? 'Update car' : 'Create car'}</button>
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
                <div className={css.errors}> </div>

            </div>
        </div>
    );
};

export {
    CarForm
};
