import React, { useContext } from 'react';

import Navbar from '../components/common/Navbar';

import StoreContext from '../context/storeContext';

import ProductList from '../components/cart/ProductList';
import { usdCurrency } from '../utils/helper';

export default function Cart() {
  const {
    totalPrice,
    storeFilterForWislist,
    handleIncrementAmount,
    handleDecrementAmount,
    handleChangeInputAmount,
    handleRemoveProductInWislist,
    handleCheckedProductInWislist,
    handleSelectAllWislist,
  } = useContext(StoreContext);

  return (
    <div className="container flex flex-col gap-8 py-10 mx-auto">
      <Navbar />

      <div className="flex flex-col gap-4">
        <h1 className="m-0 text-xl tracking-normal capitalize text-slate-300 madimi-font">keranjang</h1>

        <div className="grid grid-cols-6 gap-10">
          <div className="flex flex-col col-span-4 gap-4">
            <label htmlFor="select-all" className="flex flex-row items-center gap-3 p-4 duration-500 rounded-lg shadow-sm group bg-slate-800 hover:ring-1 hover:ring-green-500">
              <input
                id="select-all"
                type="checkbox"
                name="select-all"
                className="w-5 h-5 accent-green-500"
                onChange={handleSelectAllWislist}
              />
              <span className="text-sm capitalize text-slate-400 ubuntu-font group-hover:text-green-500">select all</span>
            </label>

            <div className="grid grid-cols-1 gap-2.5">
              {
            storeFilterForWislist?.map((store) => (
              <ProductList
                key={store?.id}
                store={store}
                handleChangeInputAmount={handleChangeInputAmount}
                handleDecrementAmount={handleDecrementAmount}
                handleIncrementAmount={handleIncrementAmount}
                handleRemoveProductInWislist={handleRemoveProductInWislist}
                handleCheckedProductInWislist={handleCheckedProductInWislist}
              />
            ))
        }
            </div>
          </div>

          <div className="col-span-2 p-5 rounded-lg min-h-48 max-h-48 bg-slate-800">
            <div className="flex flex-col gap-4">
              <h1 className="m-0 text-xl font-semibold text-slate-200 ubuntu-font">Ringkasan belanja</h1>

              <div className="flex flex-row items-center justify-between pb-1.5 border-b border-slate-600">
                <span className="text-base text-slate-400 ubuntu-font">total:</span>
                <span className="text-lg font-bold text-slate-300 ubuntu-font">
                  {storeFilterForWislist?.filter((item) => item?.isChecked).length > 0
                    ? usdCurrency(totalPrice)
                    : usdCurrency(0)}
                </span>
              </div>

              <button
                type="button"
                className="p-2 text-sm font-semibold capitalize duration-500 bg-green-600 rounded-lg hover:bg-green-700 hover:text-slate-300 text-slate-100 ubuntu-font"
              >
                beli
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
