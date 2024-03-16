import React from 'react';
import { TbJewishStar, TbJewishStarFilled, TbStarFilled } from 'react-icons/tb';

import { Link } from 'react-router-dom';
import { usdCurrency } from '../../utils/helper';

export default function ListProduct({ store, handleAddToWishlist }) {
  return (
    <div className="relative duration-500 rounded-lg bg-slate-900 ring-1 ring-inset ring-slate-800 ubuntu-font group shadow-slate-200 hover:bg-slate-800 hover:ring-green-500 hover:ring-2">
      <div className="flex flex-col gap-2.5">
        <div className="w-full h-48 overflow-hidden rounded-t-lg">
          <img
            src={store?.image}
            alt={store?.image}
            className="object-cover object-top w-full h-full"
            draggable="false"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-1 px-4 py-1.5 pb-5">
          <Link to={`/detail-product/${store?.id}`}>
            <span className="text-sm duration-500 text-slate-400 hover:text-slate-200 group-hover:text-green-base">
              {store?.title}
            </span>
          </Link>

          <span className="text-lg font-semibold text-slate-300">{usdCurrency(store?.price)}</span>

          <div className="flex flex-row items-center gap-1.5 text-sm text-yellow-500">
            <TbStarFilled />
            <span>
              {store?.rating?.rate}

            </span>
            |
            <span className="text-slate-400">
              {store?.rating?.count}
              + terjual
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="add-wishlist"
        className="absolute right-4 bottom-7"
        onClick={() => handleAddToWishlist(store?.id)}
      >
        {store?.wishlist
          ? <TbJewishStarFilled className="text-xl text-green-500 duration-500 hover:text-green-500 hover:text-2xl" />
          : <TbJewishStar className="text-xl duration-500 text-slate-600 hover:text-green-500 hover:text-2xl" />}
      </button>
    </div>
  );
}
