import { getToLocalStorage, saveToLocalStorage } from '../utils/helper';

export const initialState = {
  user: getToLocalStorage('user') ?? null,
  users: getToLocalStorage('users') ?? [],
  loading: false,
  error: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_REQUEST': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'AUTH_LOGIN': {
      saveToLocalStorage('user', action.payload);

      return {
        ...state,
        error: null,
        loading: false,
        user: action.payload,
      };
    }
    case 'AUTH_REGISTER': {
      const users = [...state.users, action.payload];
      saveToLocalStorage('users', users);
      saveToLocalStorage('user', action.payload);

      return {
        ...state,
        error: null,
        loading: false,
        users,
        user: action.payload,
      };
    }
    case 'AUTH_ERROR': {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case 'AUTH_LOGOUT': {
      localStorage.removeItem('user');

      return {
        ...state,
        user: null,
        loading: false,
      };
    }
    default: {
      throw Error(`unknown action: ${action.type}`);
    }
  }
};
