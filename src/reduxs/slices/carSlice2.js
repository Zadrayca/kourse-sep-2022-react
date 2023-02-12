import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService2} from "../../services";

const initialState = {
    cars2: [],
    prev: null,
    next: null,
    carForUpdate2: null,
    errors2: null,
    loading2: null
};

const getAll = createAsyncThunk(
    'carSlice2/getAll',
    async ({page}, thunkAPI) => {
        try {
            await new Promise(resolve => setTimeout(() => resolve(), 3000));
            const {data} = await carService2.getAllCars(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    'carSlice2/create',
    async ({car}, thunkAPI) => {
        try {
            await carService2.create(car);
            thunkAPI.dispatch(getAll({page: 1}))
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice2/deleteById',
    async ({id}, thunkAPI) => {
        try {
            await carService2.deleteById(id);
            thunkAPI.dispatch(getAll({page: 1}))
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, thunkAPI) => {
        try {
            await carService2.updateById(id, car);
            thunkAPI.dispatch(getAll({page: 1}))
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const carSlice2 = createSlice({
    name: 'carSlice2',
    initialState,
    reducers: {
        setCarForUpdate: ((state, action) => {
            state.carForUpdate2 = action.payload;
        })
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {prev, next, items} = action.payload;
                state.cars2 = items;
                state.prev = prev;
                state.next = next;
                state.loading2 = false;
            })
            .addCase(getAll.pending, (state) => {
                state.loading2 = true;
            })
});

const {reducer: carReducer2, actions: {setCarForUpdate}} = carSlice2;

const carActions2 = {
    getAll,
    create,
    deleteById,
    setCarForUpdate,
    updateById
};

export {
    carReducer2,
    carActions2
}