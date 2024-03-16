import React from 'react';
import {
  TbMinus, TbPlus, TbStarFilled, TbTrash,
} from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { usdCurrency } from '../../utils/helper';

export default function ProductList({
  store, handleChangeInputAmount, handleDecrementAmount, handleIncrementAmount, handleRemoveProductInWislist, handleCheckedProductInWislist,
}) {
  return (
    <div className="relative flex flex-row items-center w-full gap-3 p-4 duration-500 rounded-lg shadow-sm group bg-slate-800 hover:ring-1 hover:ring-green-500">
      <div className="absolute top-4 right-4">
        <input
          type="checkbox"
          checked={store?.isChecked}
          className="w-5 h-5 accent-green-500"
          onChange={() => handleCheckedProductInWislist(store?.id)}
        />
      </div>

      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center gap-2.5">
          <div className="w-24 h-24 overflow-hidden rounded-t-lg">
            <img
              src={store?.image}
              alt={store?.image}
              className="object-cover object-top w-full h-full"
              draggable="false"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-1 px-4">
            <Link to={`/detail-product/${store?.id}`}>
              <span className="text-base duration-500 text-slate-400 group-hover:text-green-500">
                {store?.title}
              </span>
            </Link>

            <div className="flex flex-row items-center gap-1.5 text-sm text-yellow-500">
              <TbStarFilled />
              <span className="text-sm">
                {store?.rating?.rate}

              </span>
              |
              <span className="text-sm text-slate-400">
                {store?.rating?.count}
                + terjual
              </span>
            </div>

            <div className="flex flex-row items-center gap-3 mt-4">
              <button type="button" aria-label="button-delete" className="flex-none">
                <TbTrash className="text-2xl duration-500 text-slate-400 hover:text-red-500" onClick={() => handleRemoveProductInWislist(store?.id)} />
              </button>

              <div className="flex flex-row items-center gap-0 p-1 duration-500 rounded-lg ring-1 ring-slate-600 hover:ring-green-500">
                <button
                  type="button"
                  aria-label="decrement-button"
                  onClick={() => handleDecrementAmount(store?.id)}
                  disabled={store?.amount <= 0}
                  className={`text-lg ${store?.amount >= 1 ? 'text-green-600' : 'text-slate-600'}`}
                >
                  <TbMinus />
                </button>

                <input
                  type="number"
                  value={store?.amount}
                  min={0}
                  max={store?.rating?.count}
                  maxLength={store?.rating?.count}
                  className="flex-none text-sm text-center bg-transparent text-slate-300 max-w-16 min-w-16"
                  onChange={(e) => handleChangeInputAmount(e, store?.id)}
                  disabled
                />

                <button
                  type="button"
                  aria-label="increment-button"
                  onClick={() => handleIncrementAmount(store?.id)}
                  className={`text-lg ${store?.amount >= 0 && 'text-green-600'}`}
                >
                  <TbPlus />
                </button>
              </div>
            </div>
          </div>
        </div>

        <span className="text-xl font-semibold text-slate-300">{usdCurrency(store?.price)}</span>
      </div>
    </div>
  );
}
