import React from 'react';
import {
  useCustomSelector,
  useCustomDispatch
} from '../../hooks/redux/HooksIndex';
import { login } from '../../redux/slices/auth/AuthIndex';
import { Button, Switch, Typography, CircularProgress } from '@mui/material';
import { setThemeMode } from '../../redux/slices/settings/SettingsIndex';

import {
  AppbarStyled,
  AppbarContainerStyled,
  BodyContainerStyled,
  CardStyled
} from './HomeStyles';

const Home: React.FC = () => {
  const {
    auth: { token, isLoading },
    settings: { themeMode }
  } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();
  console.log(token);
  const handleLogin = (): void => {
    dispatch(
      login({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })
    );
  };

  const handleChangeTheme = (): void => {
    dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  };
  return (
    <div>
      <AppbarStyled>
        <AppbarContainerStyled>
          <Typography variant="h6">
            TS-REACT-REDUX TOOLKIT-MATERIAL UI
          </Typography>
          <Switch onChange={handleChangeTheme} />
        </AppbarContainerStyled>
      </AppbarStyled>
      <BodyContainerStyled>
        <CardStyled>
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          {isLoading && <CircularProgress size={24} />}
        </CardStyled>
      </BodyContainerStyled>
    </div>
  );
};

export default Home;
