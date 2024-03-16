export const storeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WISHLIST': {
      return state?.map((store) => {
        if (store.id === action.storeId) {
          return {
            ...store,
            wishlist: !store.wishlist,
          };
        }

        return store;
      });
    }
    case 'INCREMENT_AMOUNT': {
      return state?.map((store) => {
        if (store.id === action.storeId) {
          return {
            ...store,
            amount: store.amount + 1,
          };
        }

        return store;
      });
    }
    case 'DECREMENT_AMOUNT': {
      return state?.map((store) => {
        if (store?.id === action.storeId) {
          return {
            ...store,
            amount: store.amount - 1,
          };
        }
        return store;
      });
    }
    case 'CHANGE_INPUT_AMOUNT': {
      return state?.map((store) => {
        if (store?.id === action.storeId) {
          return {
            ...store,
            amount: action.newInputAmount,
          };
        }

        return store;
      });
    }
    case 'REMOVE_PRODUCT_WISLIST': {
      return state?.map((store) => {
        if (store?.id === action.storeId) {
          return {
            ...store,
            wishlist: !store?.wishlist,
            isChecked: false,
            amount: 1,
          };
        }

        return store;
      });
    }
    case 'CHECKED_WISLIST': {
      return state?.map((store) => {
        if (store?.id === action.storeId) {
          return {
            ...store,
            isChecked: !store.isChecked,
          };
        }

        return store;
      });
    }
    case 'SELECT_ALL': {
      return state?.map((store) => ({
        ...store,
        isChecked: !store.isChecked,
      }));
    }
    default: {
      throw Error(`unknown action: ${action.type}`);
    }
  }
};
