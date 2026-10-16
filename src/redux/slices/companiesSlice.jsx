
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getCompanies = createAsyncThunk(
  "companies/getCompanies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/companies"
      );

      const data = await response.json();
console.log("API response:", data);
      if (!response.ok) {
        return rejectWithValue(
          data.message || "Failed to fetch companies"
        );
      }

      return data.companies;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const companiesSlice = createSlice({
  name: "companies",

  initialState: {
    companies: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload;
      })

      .addCase(getCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default companiesSlice.reducer;

