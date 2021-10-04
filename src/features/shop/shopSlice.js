import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { AUTH_TOKEN, removeToken } from "../../localStorage";
import { toast } from "../../components/Toast/Toast";

const initialState = {
  shops: [],
  status: "idle",
  instanceShop: null,
  error: "",
};

export const fetchShops = createAsyncThunk(
  "shop/fetchShops",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/api/company/", {
        headers: {
          Authorization: `Token ${AUTH_TOKEN}`,
        },
      });
      console.log(response.data);
      return response.data.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    currentShop: (state, action) => {
      console.log(action.payload);
      state.instanceShop = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShops.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchShops.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload);
        state.shops = action.payload;
        state.error = "";
      })
      .addCase(fetchShops.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export const { currentShop } = shopSlice.actions;
export default shopSlice.reducer;
