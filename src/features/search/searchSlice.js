import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { AUTH_TOKEN } from "../../localStorage";

const initialState = {
  status: "idle",
  error: "",
  searchedData: [],
};

export const getSearchedData = createAsyncThunk(
  "searchSlice/getSearchedData",
  async (data, thunkAPI) => {
    let config = {
      headers: {
        Authorization: `Token ${AUTH_TOKEN}`,
      },
      params: {
        searchQuery: data.searchedQuery,
      },
    };

    await axios
      .get(`/search`, config)
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => {
        return thunkAPI.rejectWithValue(error.message);
      });
  }
);

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSearchedData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSearchedData.fulfilled, (state, { payload }) => {
        state.status = "idle";
        console.log(payload);
        state.searchedData = payload;
        state.error = "";
      })
      .addCase(getSearchedData.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload;
      });
  },
});

// export const { search } = searchSlice.actions;
export default searchSlice.reducer;
