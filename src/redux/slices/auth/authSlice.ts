import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "@/services/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

interface type {
  name?: string;
  email: string;
  password: string;
}

const initialState: type = {
  name: "",
  email: "",
  password: "",
};

export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }: type) => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user.user, { displayName: name });
    setDoc(doc(db, "users", user.user.uid), {
      name: name,
      email: email,
      id: user.user.uid,
    });
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: type) => {
    await signInWithEmailAndPassword(auth, email, password);
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await signOut(auth);
});

const googleProvider = new GoogleAuthProvider();

export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
  const user = await signInWithPopup(auth, googleProvider);

  setDoc(doc(db, "users", user.user.uid), {
    name: user.user.displayName,
    email: user.user.email,
    id: user.user.uid,
  });
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { changeName, changeEmail, changePassword } = authSlice.actions;

export default authSlice.reducer;
