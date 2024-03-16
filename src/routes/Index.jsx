import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthProvider } from '../context/authContext';

import { useAuth } from '../hooks/useAuth';

import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import { NonRequireAuthentication, RequireAuthentication } from '../outlet/RequiredAuth';
import { useStore } from '../hooks/useStore';
import { StoreProvider } from '../context/storeContext';
import Cart from '../pages/Cart';
import DetailProduct from '../pages/DetailProduct';

export default function Routers() {
  const authValue = useAuth();
  const storeValue = useStore();

  return (
    <AuthProvider value={authValue}>
      <StoreProvider value={storeValue}>
        <BrowserRouter>
          <div className="bg-slate-900 text-slate-600 h-[100vh] w-[100vw] overflow-x-hidden">
            <Routes>
              <Route element={<NonRequireAuthentication />}>
                <Route path="/" element={<Auth />} />
              </Route>

              <Route element={<RequireAuthentication />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/detail-product/:id" element={<DetailProduct />} />
              </Route>

              <Route path="*" element={<h1>not found</h1>} />
            </Routes>
          </div>
        </BrowserRouter>
      </StoreProvider>
    </AuthProvider>
  );
}
