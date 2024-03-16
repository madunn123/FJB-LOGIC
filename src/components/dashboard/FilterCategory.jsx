export default function FilterCategory({ category, handleChangeSelectedTabs, selectedTabs }) {
  return (
    <button
      type="button"
      className={`flex-none p-3 ring-1 snap-center capitalize text-sm rounded-sm hover:ring-green-500 duration-500 transition-all ${selectedTabs ? 'ring-green-500 text-green-500' : 'ring-slate-400 text-slate-400'}`}
      onClick={() => handleChangeSelectedTabs(category)}
    >
      {category}
    </button>
  );
}
