import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const AppLayout = lazy(() => import('../App'));
const Products = lazy(() =>
  import('../features/Products').then((m) => ({ default: m.Products }))
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div className="p-6">Loading...</div>}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div className="p-6">Loading...</div>}>
            <Navigate to="/product" replace />
          </Suspense>
        ),
      },
      {
        path: 'product',
        element: (
          <Suspense fallback={<div className="p-6">Loading...</div>}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <div>Not Found</div>,
      },
    ],
  },
]);
