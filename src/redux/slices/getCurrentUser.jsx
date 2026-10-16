import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:8080/me",
        {
          method: "GET",
          credentials: "include",
        }
      );

      const data = await response.json();

     
      if (!response.ok) {
        return rejectWithValue(data.message || "Failed to get user");
      }

      return data.user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getCurrentUserme = createSlice({
  name: "UserMe",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
    setUser: (state , action) =>{
      state.user = action.payload
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;

      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const {logout , setUser}  = getCurrentUserme.actions
export default getCurrentUserme.reducer