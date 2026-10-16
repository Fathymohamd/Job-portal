
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const res = createAsyncThunk(
  "logout/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://job-portal-three-chi.vercel.app/logout",
        {
          method: "POST",
          credentials: "include",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return rejectWithValue(
          data.message || "Logout failed"
        );
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const Logout = createSlice({
  name: "logoutS",

  initialState: {
    loading: false,
    error: null,
    success: false,
  },

  reducers: {
    resetLogout: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(res.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(res.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(res.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Logout failed";
      });
  },
});

export const { resetLogout } = Logout.actions;

export default Logout.reducer;