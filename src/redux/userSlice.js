import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk("users/fetchUsers", async (page) => {
  const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
  return { data: response.data.data, totalPages: response.data.total_pages, currentPage: page };
});


export const updateUser = createAsyncThunk("users/updateUser", async ({ id, userData }) => {
  // eslint-disable-next-line no-unused-vars
  const response = await axios.put(`https://reqres.in/api/users/${id}`, userData);
  return { id, ...userData };
});


export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await axios.delete(`https://reqres.in/api/users/${id}`);
  return id;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    currentPage: 1,
    totalPages: 1,
    loading: false,
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })


      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = { ...state.users[index], ...action.payload };
        }
      })


      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      });
  },
});

export const { setPage } = userSlice.actions;
export default userSlice.reducer;
