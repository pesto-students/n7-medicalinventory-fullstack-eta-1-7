import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { AUTH_TOKEN, removeToken } from "../../localStorage";

const initialState = {
  shops: [],
  status: "idle",
  instanceShop: null,
  error: "",
};

export const fetchShops = createAsyncThunk(
<<<<<<< HEAD
    'shop/fetchShops',
    async (thunkAPI) => {
      try {
          const response = await axios.get('/api/company/',{
            headers: {
              'Authorization': `Token ${ls.get('token')}`
            }
          })
          console.log(response.data)
          return response.data.data
    
      } 
        catch (error) {
            alert("Authentication denied")
            ls.remove('token')
           return thunkAPI.rejectWithValue( error.message);
        }
=======
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
      alert("Authentication denied");
      removeToken("token");
      return thunkAPI.rejectWithValue(error.message);
>>>>>>> 9bfdf4148401f62410718ebcb5f619bd8996d97f
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
