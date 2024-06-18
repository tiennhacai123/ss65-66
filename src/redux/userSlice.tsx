import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Bài 2
interface User {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
