import React from 'react';
import { TbJewishStarFilled } from 'react-icons/tb';

import { useDetailProduct } from '../hooks/useDetailProduct';
import { usdCurrency } from '../utils/helper';

export default function DetailProduct() {
  const { item, handleAddToWishlist } = useDetailProduct();

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="flex-none p-4 rounded-lg shadow-sm bg-slate-800 max-w-[50em] min-w-[50em]">
        <div className="flex flex-row items-center gap-6">
          <div className="w-full h-full rounded-lg">
            <img src={item?.image} alt={item?.image} className="object-cover w-full h-full bg-cover rounded-lg" />
          </div>

          <div className="flex flex-col gap-0.5">
            <h1 className="m-0 text-lg font-medium tracking-wide madimi-font text-slate-300">{item?.title}</h1>

            <div className="flex flex-col gap-4">
              <ul className="flex flex-row items-center gap-3 list-disc list-inside">
                <li className="text-sm text-slate-400">
                  Terjual
                  {item?.rating?.count}
                  +
                </li>
                <li className="flex flex-row items-center gap-1 text-sm text-slate-400">
                  Rating
                  {' '}
                  {item?.rating?.rate}
                  <TbJewishStarFilled className="text-yellow-500" />
                </li>
              </ul>

              <h1 className="m-0 text-2xl font-semibold text-slate-200 ubuntu-font">
                {usdCurrency(item?.price)}
              </h1>
            </div>

            <div className="flex flex-col gap-2">
              <span className="mt-5 font-semibold text-green-500 border-b border-slate-600 ubuntu-font">Detail</span>

              <p className="m-0 text-sm text-slate-400">{item?.description}</p>

              <div className="flex flex-row items-center gap-4 mt-4">
                <button
                  type="button"
                  aria-label="buy-now"
                  className="p-2 px-6 text-sm font-medium capitalize duration-500 bg-green-500 rounded-sm hover:bg-green-700 hover:ring-green-700 ring-1 ring-green-500 ubuntu-font text-slate-200"
                >
                  beli sekarang
                </button>

                <button
                  type="button"
                  aria-label="keranjang"
                  className="p-2 px-6 text-sm font-medium text-green-500 capitalize duration-500 rounded-sm ring-1 ring-green-500 ubuntu-font hover:ring-green-700 hover:text-green-700"
                  onClick={() => handleAddToWishlist(item?.id)}
                >
                  +Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
