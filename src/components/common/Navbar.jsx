import React, { useContext, useEffect } from 'react';

import {
  TbListSearch, TbMessage, TbNotification, TbShoppingBag,
} from 'react-icons/tb';
import { Link, useSearchParams } from 'react-router-dom';
import AuthContext from '../../context/authContext';
import StoreContext from '../../context/storeContext';

export default function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { state, handleLogoutUser } = useContext(AuthContext);
  const { keyword, setKeyword } = useContext(StoreContext);

  const handleSearchParams = (e) => {
    const newInput = e.target.value;

    setKeyword(newInput);
  };

  useEffect(() => {
    let ignore = true;

    if (ignore) {
      if (keyword.length > 0) {
        setSearchParams({ q: keyword });
      } else {
        const params = new URLSearchParams(searchParams);
        params.delete('q');

        setSearchParams(params);
      }
    }

    return () => {
      ignore = false;
    };
  }, [keyword]);

  return (
    <nav className="group">
      <div className="flex flex-row items-center justify-between p-6 duration-500 rounded-md shadow-sm bg-slate-700 group-hover:ring-1 group-hover:ring-green-500">
        <Link to="/dashboard">
          <h1 className="text-2xl tracking-wider capitalize duration-500 cursor-pointer text-slate-300 nav-title madimi-font group-hover:text-green-500">MarketBurit</h1>
        </Link>

        <div className="flex flex-row items-center gap-4">
          <div className="relative w-auto group/input">
            <input
              type="text"
              className="flex-none p-2 px-3 pr-10 text-sm duration-500 bg-transparent rounded-md outline-none ubuntu-font ring-1 ring-slate-600 max-w-96 min-w-96 focus:ring-1 focus:ring-green-500 focus:text-green-500"
              placeholder="Cari Produk..."
              value={keyword}
              onChange={handleSearchParams}
            />

            <div className="absolute top-0 flex items-center h-full right-3">
              <TbListSearch className="text-lg duration-500 text-slate-400 group-hover/input:text-green-500" />
            </div>
          </div>

          <ul className="flex flex-row items-center gap-4 text-slate-500">
            <li>
              <Link to="/cart">
                <TbShoppingBag className="text-2xl duration-500 hover:text-green-500" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <TbNotification className="text-2xl duration-500 hover:text-green-500" />

              </Link>
            </li>
            <li>
              <Link to="/">
                <TbMessage className="text-2xl duration-500 hover:text-green-500" />
              </Link>
            </li>

          </ul>
        </div>

        <div className="flex flex-row items-center gap-4">
          <button type="button" className="text-base font-normal text-slate-400 ubuntu-font" onClick={handleLogoutUser}>
            {state?.user?.email?.slice(0, 1).toUpperCase()}
            {state?.user?.email?.slice(1)}
          </button>
        </div>
      </div>
    </nav>
  );
}
