import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";
import {ICar} from "../../interfaces";
import {AxiosError} from "axios";

interface IState {
    cars:ICar[];
    carForUpdate: ICar | null;
    loading: boolean;
}

const initialState: IState = {
    cars: [],
    carForUpdate: null,
    loading: false
};

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            await new Promise<void>(resolve => setTimeout(() => resolve(), 3000));
            const {data} = await carService.getAllCars();
            return data
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response?.data)
        }
    }
);

const create = createAsyncThunk<void, {car:ICar}>(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car);
            thunkAPI.dispatch(getAll())
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response?.data)
        }
    }
);

const deleteById = createAsyncThunk<void, {id:number}>(
    'carSlice/deleteById',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id.toString());
            thunkAPI.dispatch(getAll())
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response?.data)
        }
    }
);

const updateById = createAsyncThunk<void, {id:string, car:ICar}>(
    'carSlice/updateById',
    async ({id, car}, thunkAPI) => {
        try {
            await carService.updateById(id, car);
            thunkAPI.dispatch(getAll())
        } catch (e) {
            const err = e as AxiosError;
            return thunkAPI.rejectWithValue(err.response?.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: ((state, action) => {
            state.carForUpdate = action.payload
        })
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.cars = action.payload
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    create,
    deleteById,
    setCarForUpdate,
    updateById
};

export {
    carReducer,
    carActions
}