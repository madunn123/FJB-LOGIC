import React, { useContext } from 'react';

import StoreContext from '../context/storeContext';

import Navbar from '../components/common/Navbar';
import FilterCategory from '../components/dashboard/FilterCategory';
import ListProduct from '../components/dashboard/ListProduct';

export default function Dashboard() {
  const {
    uniqCategory,
    selectedTabs,
    handleChangeSelectedTabs,
    filteredStores,
    handleAddToWishlist,
  } = useContext(StoreContext);

  return (
    <div className="container flex flex-col gap-8 py-10 mx-auto">
      <Navbar />

      <div className="flex flex-col gap-1.5">
        <div className="flex flex-row gap-3.5 px-1 pt-1 pb-2.5 overflow-x-scroll hidden-scroll scroll-pl-2 snap-x snap-mandatory">
          <button
            type="button"
            className={`flex-none p-3 ring-1 snap-center capitalize text-sm rounded-sm ${selectedTabs === 'all' ? 'ring-green-500 text-green-500' : 'ring-slate-400 text-slate-400'}`}
            onClick={() => handleChangeSelectedTabs('all')}
          >
            all
          </button>

          {uniqCategory?.map((category, index) => (
            <FilterCategory
              key={index}
              category={category}
              selectedTabs={selectedTabs === category}
              handleChangeSelectedTabs={handleChangeSelectedTabs}
            />
          ))}
        </div>

        <div className="grid grid-cols-4 pb-2 gap-x-6 gap-y-6">
          {filteredStores?.map((store) => (
            <ListProduct
              key={store.id}
              store={store}
              handleAddToWishlist={handleAddToWishlist}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
