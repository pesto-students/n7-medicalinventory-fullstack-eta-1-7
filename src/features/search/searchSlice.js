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
  async (searchParams, thunkAPI) => {
    let config = {
      headers: {
        Authorization: `Token ${AUTH_TOKEN}`,
      },
    };

    try {
      const response = await axios.get(`/search?${searchParams}`, config);
      return response.data;
    } catch (error) {
      return error.message;
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: initialState,
  extraReducers: {
    // [getSearchedData.pending]: (state, action) => {
    //   state.status = "loading";
    // },
    [getSearchedData.fulfilled]: (state, { payload }) => {
      state.searchedData = payload;
      state.status = "success";
    },
    [getSearchedData.rejected]: (state, { payload }) => {
      state.error = payload;
      state.status = "failed";
    },
  },
});

export default searchSlice.reducer;
