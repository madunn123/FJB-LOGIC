import React, { useMemo, useState } from 'react';

const initialState = [
  {
    id: 1,
    title: 'hesoyam0',
  },
  {
    id: 2,
    title: 'hesoyam1',
  },
  {
    id: 3,
    title: 'hesoyam2',
  },
  {
    id: 4,
    title: 'hesoyam3',
  },
  {
    id: 5,
    title: 'hesoyam4',
  },
  {
    id: 6,
    title: 'hesoyam5',
  },
  {
    id: 7,
    title: 'hesoyam6',
  },
  {
    id: 8,
    title: 'hesoyam7',
  },
  {
    id: 9,
    title: 'hesoyam8',
  },
  {
    id: 10,
    title: 'hesoyam9',
  },
  {
    id: 11,
    title: 'hesoyam10',
  },
];

export default function Pagination() {
  const [state, updateState] = useState(initialState);
  const [currentPage, setCurrentPage] = useState(1);

  const showDataPerPage = 4;
  const totalPages = Math.ceil(state.length / showDataPerPage);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const paginationData = useMemo(() => state.slice((currentPage - 1) * showDataPerPage, currentPage * showDataPerPage), [currentPage]);

  return (
    <div className="container p-20 mx-auto">
      <div className="p-20 rounded-lg bg-slate-800 text-slate-400">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-4 gap-4">
            {paginationData?.map((item) => (
              <div key={item?.id} className="p-3 rounded-sm ring-1 ring-green-500">{item?.title}</div>
            ))}
          </div>

          <div className="flex flex-row items-center gap-3">
            {
                    Array.from({ length: totalPages }, (_, index) => index + 1)?.map((page) => (
                      <button
                        key={page}
                        type="button"
                        aria-label="pagination-button"
                        className={`p-2 rounded-sm ring-1 ${page === currentPage ? 'ring-green-500' : 'ring-slate-800'}`}
                        onClick={() => handleChangePage(page)}
                      >
                        {page}
                      </button>
                    ))
        }
          </div>
        </div>
      </div>
    </div>
  );
}
