import {
  Route,
  RouterProvider, 
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Layout from "@layout/Layout";
import HomePage from "@pages/HomePage/HomePage";
import CatalogPage from "@pages/CatalogPage/CatalogPage"

const AppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          path="/home"
          element={<HomePage />}

        />
        <Route
          path="/catalog"
          element={<CatalogPage />}

        />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
};

export default AppRoutes;
