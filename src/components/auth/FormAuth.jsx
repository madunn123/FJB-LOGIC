import React, { useState } from 'react';

import {
  TbUserHexagon, TbEyeCancel, TbEye, TbLivePhoto,
} from 'react-icons/tb';

export default function FormAuth({
  visible, formName, buttonName, handleVisible, loading, tabs, handleLogin, handleRegister,
}) {
  const [textInput, setTextInput] = useState({
    email: '',
    password: '',
  });

  const handleChangeTextInput = (e) => setTextInput({
    ...textInput,
    [e.target.name]: e.target.value,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tabs === 'login') handleLogin(textInput);
    if (tabs === 'register') handleRegister(textInput);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="m-0 text-xl font-semibold uppercase duration-500 group-hover:text-green-500">
        {formName}
      </h1>

      <form className="flex flex-col gap-2.5" onSubmit={handleSubmit}>
        <div className="relative w-auto">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 text-sm duration-500 bg-transparent rounded-sm outline-none placeholder:text-slate-600 focus:text-green-500 focus:ring-green-500 ring-1 ring-slate-600"
            value={textInput?.email}
            onChange={handleChangeTextInput}
          />

          <div className="absolute top-0 flex items-center h-full right-3">
            <TbUserHexagon className="text-lg duration-500 group-hover:text-green-500" />
          </div>
        </div>
        <div className="relative w-auto">
          <input
            type={visible ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className="w-full px-3 py-2 text-sm duration-500 bg-transparent rounded-sm outline-none placeholder:text-slate-600 focus:text-green-500 focus:ring-green-500 ring-1 ring-slate-600"
            value={textInput?.password}
            onChange={handleChangeTextInput}
          />
          <button
            type="button"
            className="absolute top-0 flex items-center h-full right-3"
            onClick={handleVisible}
          >
            {visible ? (
              <TbEye className="text-xl duration-500 group-hover:text-green-500" />
            ) : (
              <TbEyeCancel className="text-xl duration-500 group-hover:text-green-500" />
            )}
          </button>
        </div>

        <button
          type="submit"
          className="p-2 px-3 text-sm font-semibold uppercase duration-500 rounded-sm ring-1 ring-slate-600 hover:ring-green-500 hover:text-green-500 xl:mt-3"
        >
          {loading ? <TbLivePhoto className="w-5 h-5 mx-auto animate-spin" /> : buttonName}
        </button>
      </form>
    </div>
  );
}
