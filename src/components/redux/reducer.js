import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/", async () => {
    return fetch("http://127.0.0.1:8088/api/users")
        .then((res) => res.json());
});

const crudSlice = createSlice({
    name: 'crud',
    initialState: {
        allUsers: [],
        loading: false,
    },
    reducers: {
        // add your non-async reducers here
        addUser: (state, action) => {
           
            state.allUsers.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value -= 1
        },
        updateUser: (state, action) => {
            state.value += action.payload
        },
    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.allUsers = action.payload;
        },
        [fetchUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    }
});

export const { addUser, deleteUser, updateUser } = crudSlice.actions;
export default crudSlice.reducer;