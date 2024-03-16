import { useEffect, useReducer, useState } from 'react';

import { getInitialStore } from '../utils/api';
import { storeReducer } from '../reducers/storeReducer';

export const useStore = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [keyword, setKeyword] = useState('');

  const [state, dispatch] = useReducer(storeReducer, getInitialStore());

  const [selectedTabs, setSelectedTabs] = useState('all');

  const uniqCategory = [...new Set(state?.map((store) => store?.category))];

  const filteredStores = selectedTabs !== 'all'
    ? state.filter((store) => (store.category === selectedTabs) && store?.title?.toLowerCase().includes(keyword?.toLowerCase()))
    : state.filter((store) => store?.title?.toLowerCase().includes(keyword?.toLowerCase()));

  const storeFilterForWislist = state?.filter((store) => store?.wishlist);

  const handleChangeSelectedTabs = (tabs) => {
    setSelectedTabs(tabs);
  };

  const handleAddToWishlist = (id) => {
    dispatch({
      type: 'ADD_WISHLIST',
      storeId: id,
    });
  };

  const handleIncrementAmount = (id) => {
    dispatch({
      type: 'INCREMENT_AMOUNT',
      storeId: id,
    });
  };

  const handleDecrementAmount = (id) => {
    dispatch({
      type: 'DECREMENT_AMOUNT',
      storeId: id,
    });
  };

  const handleChangeInputAmount = (e, id) => {
    const inputAmount = parseFloat(e.target.value);

    dispatch({
      type: 'CHANGE_INPUT_AMOUNT',
      storeId: id,
      newInputAmount: inputAmount,
    });
  };

  const handleRemoveProductInWislist = (id) => {
    dispatch({
      type: 'REMOVE_PRODUCT_WISLIST',
      storeId: id,
    });
  };

  const handleCheckedProductInWislist = (id) => {
    dispatch({
      type: 'CHECKED_WISLIST',
      storeId: id,
    });
  };

  const calculateTotalPrice = () => {
    let total = 0;

    state?.forEach((item) => {
      if (item?.wishlist) {
        const isInWislist = item?.isChecked;

        if (isInWislist) {
          total += item.price * item.amount;
        }
      }
    });

    setTotalPrice(total);
  };

  const handleSelectAllWislist = () => dispatch({
    type: 'SELECT_ALL',
  });

  useEffect(() => {
    calculateTotalPrice();
  }, [storeFilterForWislist]);

  /**
   * !bikin filter pertabs untuk produk = done
   * !bikin function buat mindahin data ke wislist
   * !bikin detail produck
   * !bikin function buy product
   */

  return {
    state,
    setKeyword,
    keyword,
    selectedTabs,
    filteredStores,
    uniqCategory,
    totalPrice,
    handleChangeSelectedTabs,
    handleAddToWishlist,
    storeFilterForWislist,
    handleIncrementAmount,
    handleDecrementAmount,
    handleChangeInputAmount,
    handleRemoveProductInWislist,
    handleCheckedProductInWislist,
    handleSelectAllWislist,
  };
};
