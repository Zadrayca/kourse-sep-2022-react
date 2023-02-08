import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postsService} from "../../services";


const initialState = {
    posts: [],
    errors: null,
    loading: null,
    selectedUser: null
};

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            await new Promise(resolve => setTimeout( () => resolve(), 3000));
            const {data} = await postsService.getAllPosts();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getPostsById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const postSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload
        }
    },

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.posts = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.selectedPost = action.payload
            })

});

const {reducer: postReducer, actions: {setSelectedPost}} = postSlice;

const postActions = {
    getAll,
    getById,
    setSelectedPost
};

export {
    postReducer,
    postActions
}