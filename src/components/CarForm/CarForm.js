import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = ({getNewCar, updateCar, setUpdateCar}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    const submit = async (car) => {
        if (updateCar) {
            console.log(car, 'car');
            console.log(updateCar, 'updateCar');
            const {data} = await carService.updateCarById(updateCar.id, car);
            getNewCar(data);
            setUpdateCar(null);
            reset();
        } else {
            const {data} = await carService.createCar(car);
            getNewCar(data);
            setUpdateCar(null);
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
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <input type={"text"} placeholder={'brand'} {...register('brand')}/>
                    {errors.brand && <div>{errors.brand.message}</div>}
                </div>
                <div>
                    <input type={"text"} placeholder={'price'} {...register('price')}/>
                    {errors.price && <div>{errors.price.message}</div>}
                </div>
                <div>
                    <input type={"text"} placeholder={'year'} {...register('year')}/>
                    {errors.year && <div>{errors.year.message}</div>}
                </div>
                <button disabled={!isValid}>{updateCar ? 'Update car' : 'Create car'}</button>
            </form>
        </div>
    );
};

export {
    CarForm
};
