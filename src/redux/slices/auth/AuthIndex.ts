import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';
import { type AxiosResponse, type AxiosError } from 'axios';
import { type Thunk } from '../../store';

export interface Login {
  email: string;
  password: string;
}

export interface AuthState {
  token: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  token: null,
  isLoading: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const { setToken, setIsLoading } = authSlice.actions;

export default authSlice.reducer;

export const login =
  (data: Login): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const resp: AxiosResponse = await axios.post('/login', data);
      dispatch(setToken(resp.data.token));
      return resp;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
