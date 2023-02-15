import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null,
    loading: null
};

// const getAll = createAsyncThunk(
//     'carSlice/getAll',
//     async (_, thunkAPI) => {
//         try {
//             await new Promise(resolve => setTimeout(() => resolve(), 3000));
//             const {data} = await carService.getAllCars();
//             return data
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data)
//         }
//     }
// );

// const create = createAsyncThunk(
//     'carSlice/create',
//     async ({car}, thunkAPI) => {
//         try {
//             await carService.create(car);
//             thunkAPI.dispatch(getAll())
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data)
//         }
//     }
// );

// const deleteById = createAsyncThunk(
//     'carSlice/deleteById',
//     async ({id}, thunkAPI) => {
//         try {
//             await carService.deleteById(id);
//             thunkAPI.dispatch(getAll())
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data)
//         }
//     }
// );

// const updateById = createAsyncThunk(
//     'carSlice/updateById',
//     async ({id, car}, thunkAPI) => {
//         try {
//             await carService.updateById(id, car);
//             thunkAPI.dispatch(getAll())
//         } catch (e) {
//             return thunkAPI.rejectWithValue(e.response.data)
//         }
//     }
// );

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
            // .addCase(getAll.fulfilled, (state, action) => {
            //     state.loading = false
            //     state.cars = action.payload
            // })
            // .addCase(getAll.pending, (state) => {
            //     state.loading = true
            // })
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

// const carActions = {
//     getAll,
//     create,
//     deleteById,
//     setCarForUpdate,
//     updateById
// };

// export {
//     carReducer,
//     carActions
// }