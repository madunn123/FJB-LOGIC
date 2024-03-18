import {
  useContext,
} from 'react';

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
            handleVisible={handleVisible}
            loading={state.loading}
            handleLogin={handleLogin}
          />
          )}

          {changeTabs === 'register' && (
          <FormAuth
            key="register"
            formName="register form"
            buttonName="register"
            tabs={changeTabs}
            visible={visible}
            handleVisible={handleVisible}
            loading={state.loading}
            handleRegister={handleRegister}
          />
          )}
        </div>
      </div>
    </section>
  );
}
