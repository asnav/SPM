/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'currentUser',
  initialState: {
    name: null,
    type: null,
    email: null,
    profilePic: null,
  },
  reducers: {
    connect: (state, action) => {
      state.name = action.payload.name;
      state.type = action.payload.type;
      state.email = action.payload.email;
    },
    disconnect: (state) => {
      state = {
        name: null,
        type: null,
        email: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { connect, disconnect } = userSlice.actions;

export default userSlice.reducer;
