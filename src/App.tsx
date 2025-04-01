import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routes } from './routes';
import './App.css';

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  return (
    <BrowserRouter>
      {/* Suspense permite mostrar un fallback mientras se cargan los componentes */}
      <Suspense fallback={<div>Cargando...</div>}>
        {/* <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/factory' element={<FactoryPage />} />
        </Routes> */}
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
