import { useReducer, useState } from 'react';

import { awaiter } from '../utils/helper';
import { authReducer, initialState } from '../reducers/authReducer';

export const useAuth = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const [visible, setVisible] = useState(false);
  const [changeTabs, setChangeTabs] = useState('login');

  const handleVisible = () => setVisible(!visible);

  const handleChangeTabs = (tabs) => {
    setChangeTabs(tabs);
  };

  async function handleLogin({ email, password }) {
    dispatch({ type: 'AUTH_REQUEST' });
    await awaiter(1000);

    try {
      dispatch({ type: 'AUTH_LOGIN', payload: { email, password } });

      const userValidation = state.users.find((item) => item?.email === email && item?.password === password);

      if (userValidation) {
        window.location.href = '/dashboard';
      } else {
        throw Error('username dan password tidak ada');
      }
    } catch (error) {
      dispatch({ type: 'AUTH_ERROR', payload: error.message });
    }
  }

  const handleRegister = async ({ email, password }) => {
    dispatch({ type: 'AUTH_REQUEST' });
    await awaiter(1000);

    try {
      dispatch({ type: 'AUTH_REGISTER', payload: { email, password } });
    } catch (error) {
      dispatch({ type: 'AUTH_ERROR', payload: error.message });
    }
  };

  const handleLogoutUser = async () => {
    dispatch({
      type: 'AUTH_LOGOUT',
    });

    await awaiter(1000);
    window.location.href = '/';
  };

  return {
    state,
    visible,
    changeTabs,
    handleVisible,
    handleChangeTabs,
    handleRegister,
    handleLogin,
    handleLogoutUser,
  };
};
