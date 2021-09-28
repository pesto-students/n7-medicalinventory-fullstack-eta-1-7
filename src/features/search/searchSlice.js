import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import ls from "local-storage";

const initialState = {
  status: "idle",
  error: "",
  searchedData: [],
};

export const getSearchedData = createAsyncThunk(
  "searchSlice/getSearchedData",
  async (data, thunkAPI) => {
    console.log(data, "Searched DATA");
    let config = {
      headers: {
        Authorization: `Token ${ls.get("token")}`,
      },
      params: {
        searchQuery: data.searchedQuery,
      },
    };

    console.log(config);
    await axios
      .post(`/search`, null, config)
      .then((response) => {
        console.log(response);
        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
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
