import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
const initialState = {
  name: "",
  email: "",
  photo: "",
  password: "",
  address: "",
  phone: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ email, password, name, image }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image
    });

    return {
      email: data.user.email,
      name: data.user.displayName,
    };
  }
);

export const loginUser = createAsyncThunk(
  "userSlice/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return {
      email: data.user.email,
      name: data.user.displayName,
    };
  }
);

const googleProvider = new GoogleAuthProvider();

export const googleLogin = createAsyncThunk(
  "userSlice/googleLogin",
  async () => {
    const data = await signInWithPopup(auth, googleProvider);

    return {
      email: data.user.email,
      name: data.user.displayName,
    };
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
    },
    toggleLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.name = "";
        state.email = "";
      })

      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.name = payload.name;
        state.email = payload.email;
      })

      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.name = "";
        state.email = "";
      })

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.name = "";
        state.email = "";
      })

      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.name = payload.name;
        state.email = payload.email;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.name = "";
        state.email = "";
      })

      .addCase(googleLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
        state.name = "";
        state.email = "";
      })

      .addCase(googleLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.name = payload.name;
        state.email = payload.email;
      })

      .addCase(googleLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.name = "";
        state.email = "";
      });
  },
});

export const { setUser, toggleLoading, logout } = userSlice.actions;
export default userSlice.reducer;
