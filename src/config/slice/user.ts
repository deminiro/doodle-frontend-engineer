import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  userName: string;
}

const initialState: UserState = {
  userName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
