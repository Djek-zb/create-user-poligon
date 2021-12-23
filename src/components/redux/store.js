import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './addReducer';
// import crudSlice from './reducer';

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware:(getDefaultMiddlware)=>getDefaultMiddlware().concat(userApi.middleware)
});

export default store;