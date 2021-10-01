import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";
import { setAuthToken } from "../../localStorage";
import { toast } from "../../components/Toast/Toast";

const initialState = {
  value: 0,
  loggedIn: false,
  status: "idle",
  isAdmin: false,
  error: "",
};

export const createTokenAsync = createAsyncThunk(
  "user/fetchToken",
  async (data, thunkAPI) => {
    try {
      //const response = await fetch(`url`); //where you want to fetch data
      //Your Axios code part.
      const response = await axios.post("/api-token-auth/", data);
      setAuthToken("token", response.data.token);
      return response.data.token;
    } catch (error) {
      toast.error("Authentication denied");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    log: (state, action) => {
      state.loggedIn = true;
      state.isAdmin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTokenAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createTokenAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload);
        state.value = action.payload;
        state.error = "";
      })
      .addCase(createTokenAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export const { log } = loginSlice.actions;
export const selectUser = (state) => state;
export const selectLoggedIn = (state) => state.login.loggedIn;

export default loginSlice.reducer;
