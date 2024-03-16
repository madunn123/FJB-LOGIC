import { useContext, useEffect, useState } from 'react';

import FormAuth from '../components/auth/FormAuth';
import AuthContext from '../context/authContext';

export default function Auth() {
  const {
    visible,
    changeTabs,
    handleVisible,
    handleChangeTabs,
    handleRegister,
    handleLogin,
    state,
  } = useContext(AuthContext);

  const [textInput, setTextInput] = useState({
    email: '',
    password: '',
  });

  const handleChangeTextInput = (e) => setTextInput({
    ...textInput,
    [e.target.name]: e.target.value,
  });

  useEffect(() => {
    if (changeTabs === 'login' || changeTabs === 'register') {
      setTextInput({
        email: '',
        password: '',
      });
    }
  }, [changeTabs]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (changeTabs === 'login') handleLogin(textInput);
    if (changeTabs === 'register') handleRegister(textInput);
  };

  return (
    <section className="container flex items-center justify-center h-full mx-auto group">
      <div className="bg-slate-800 flex-none w-[800px] p-10 group-hover:ring-2 group-hover:ring-green-500 duration-500 rounded-sm text-slate-500">
        <div className="flex flex-col gap-6">
          <div className="flex flex-row items-center gap-2">
            <button
              type="button"
              className={`ring-1 p-2 px-4 uppercase rounded-sm text-sm hover:text-green-500 hover:ring-green-500 transition-all duration-500 ${
                changeTabs === 'login'
                  ? 'ring-green-500 text-green-500 ring-2'
                  : 'ring-slate-400'
              }`}
              onClick={() => handleChangeTabs('login')}
            >
              login
            </button>
            <button
              type="button"
              className={`ring-1 p-2 px-4 uppercase rounded-sm text-sm hover:text-green-500 hover:ring-green-500 transition-all duration-500 ${
                changeTabs === 'register'
                  ? 'ring-green-500 text-green-500 ring-2'
                  : 'ring-slate-400'
              }`}
              onClick={() => handleChangeTabs('register')}
            >
              register
            </button>
          </div>

          {changeTabs === 'login' && (
          <FormAuth
            key="login"
            formName="login form"
            buttonName="login"
            tabs={changeTabs}
            visible={visible}
            textInput={textInput}
            handleChangeTextInput={handleChangeTextInput}
            handleVisible={handleVisible}
            handleSubmit={handleSubmit}
            loading={state.loading}
          />
          )}

          {changeTabs === 'register' && (
          <FormAuth
            key="register"
            formName="register form"
            buttonName="register"
            tabs={changeTabs}
            visible={visible}
            textInput={textInput}
            handleChangeTextInput={handleChangeTextInput}
            handleVisible={handleVisible}
            handleSubmit={handleSubmit}
            loading={state.loading}
          />
          )}
        </div>
      </div>
    </section>
  );
}
