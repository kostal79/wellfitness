import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements, useNavigate } from "react-router-dom";
import Layout from "@layout/Layout";
import HomePage from "@pages/HomePage/HomePage";

const AppRoutes = () => {
  // const navigate = useNavigate();

  // const handleNavigateWithQueryParams = (path, queryParams) => {
  //   navigate({
  //     pathname: path,
  //     search: new URLSearchParams(queryParams).toString(),
  //   });
  // };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          path="/home"
          element={<HomePage />}
          
        />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
};

export default AppRoutes;
