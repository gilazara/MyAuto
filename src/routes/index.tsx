import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PageLoader } from '../shared';

const AppLayout = lazy(() => import('../App'));
const Products = lazy(() =>
  import('../features/Products').then((m) => ({ default: m.Products }))
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<PageLoader />}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Navigate to="/product" replace />
          </Suspense>
        ),
      },
      {
        path: 'product',
        element: (
          <Suspense fallback={<PageLoader />}>
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
