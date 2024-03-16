import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import StoreContext from '../context/storeContext';

export const useDetailProduct = () => {
  const { id } = useParams();
  const { state, handleAddToWishlist } = useContext(StoreContext);

  const numberId = parseInt(id, 10);

  const filterStoreById = () => state?.find((store) => store?.id === numberId);

  return {
    id: numberId,
    item: filterStoreById(),
    handleAddToWishlist,
  };
};
