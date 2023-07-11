import {
  Route,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
  createRoutesFromElements,
  defer,
  useLocation,
} from "react-router-dom";
import Layout from "@layout/Layout";
import { lazy } from "react";
import { getAllBrands } from "../services/brandsAPI";
import { get } from "../services/api";
import { brandsLoader } from "../pages/Brands";
import ErrorPage from "../pages/ErrorPage";
import {
  ABOUT_PAGE,
  BLOG_PAGE,
  BRANDS_PAGE,
  BUSINESS_PLAN_PAGE,
  CATALOG_PAGE,
  CATEGORIES_PAGE,
  CONSALTING_PAGE,
  CONTACTS_PAGE,
  CREDIT_PAGE,
  DELIVERY_PAGE,
  ERROR_PAGE,
  FAQ_PAGE,
  FITNESS_CLUB_SERVICE_PAGE,
  HOME_PAGE,
  INSTRUCTIONS_PAGE,
  LEASING_PAGE,
  MISSION_PAGE,
  NEWS_PAGE,
  OUT_PROJECTS_PAGE,
  POLICY_PAGE,
  PROJECT_3D_PAGE,
  REFOUND_PAGE,
  SERVICE_REQUEST_PAGE,
  SHOWROOMS_PAGE,
  TEAM_PAGE,
  TRANDIN_PAGE,
  WARRANTY_PAGE
} from "../constants";
const Home = lazy(() => import("@pages/Home"));
const Catalog = lazy(() => import("@pages/Catalog"));
const Brands = lazy(() => import("@pages/Brands"));
const Delivery = lazy(() => import("@pages/Delivery"));
const Refound = lazy(() => import("@pages/Refound"));
const ServiceRequest = lazy(() => import("@pages/ServiceRequest"));
const FitnessClubSevrice = lazy(() => import("@pages/FitnessClubSevrice"));
const Faq = lazy(() => import("@pages/Faq"));
const Instructions = lazy(() => import("@pages/Instructions"));
const Warranty = lazy(() => import("@pages/Warranty"));
const Project3D = lazy(() => import("@pages/Project3D"));
const Consalting = lazy(() => import("@pages/Consalting"));
const BizPlan = lazy(() => import("@pages/BizPlan"));
const Leasing = lazy(() => import("@pages/Leasing"));
const Tradein = lazy(() => import("@pages/Tradein"));
const Credit = lazy(() => import("@pages/Credit"));
const About = lazy(() => import("@pages/About"));
const AboutIntro = lazy(() => import("@pages/About/AboutIntro"));
const Mission = lazy(() => import("@pages/About/Mission"));
const Team = lazy(() => import("@pages/About/Team"));
const OurProjects = lazy(() => import("@pages/About/OurProjects"));
const News = lazy(() => import("@pages/About/News"));
const Blog = lazy(() => import("@pages/Blog"));
const Showrooms = lazy(() => import("@pages/Showrooms"));
const Contacts = lazy(() => import("@pages/Contacts"));
const PrivatePolicy = lazy(() => import("@pages/PrivatePolicy"));
const Categories = lazy(() => import("@pages/Categories"));

const AppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          path={HOME_PAGE}
          element={<Home />}

        />
        <Route
          path={CATALOG_PAGE}
          element={<Catalog />}
        />
        <Route
          path={BRANDS_PAGE}
          element={<Brands />}
          loader={brandsLoader}
        />
        <Route
          path={DELIVERY_PAGE}
          element={<Delivery />}
        />
        <Route
          path={REFOUND_PAGE}
          element={<Refound />}
        />
        <Route
          path={SERVICE_REQUEST_PAGE}
          element={<ServiceRequest />}
        />
        <Route
          path={FITNESS_CLUB_SERVICE_PAGE}
          element={<FitnessClubSevrice />}
        />
        <Route
          path={FAQ_PAGE}
          element={<Faq />}
        />
        <Route
          path={INSTRUCTIONS_PAGE}
          element={<Instructions />}
        />
        <Route
          path={WARRANTY_PAGE}
          element={<Warranty />}
        />
        <Route
          path={PROJECT_3D_PAGE}
          element={<Project3D />}
        />
        <Route
          path={CONSALTING_PAGE}
          element={<Consalting />}
        />
        <Route
          path={BUSINESS_PLAN_PAGE}
          element={<BizPlan />}
        />
        <Route
          path={LEASING_PAGE}
          element={<Leasing />}
        />
        <Route
          path={TRANDIN_PAGE}
          element={<Tradein />}
        />
        <Route
          path={CREDIT_PAGE}
          element={<Credit />}
        />
        <Route
          path={ABOUT_PAGE}
          element={<About />}
        >

          <Route
            path={ABOUT_PAGE}
            element={<AboutIntro />}
          />
          <Route
            path={MISSION_PAGE}
            element={<Mission />}
          />
          <Route
            path={TEAM_PAGE}
            element={<Team />}
          />
          <Route
            path={OUT_PROJECTS_PAGE}
            element={<OurProjects />}
          />
          <Route
            path={NEWS_PAGE}
            element={<News />}
          />

        </Route>
        <Route
          path={BLOG_PAGE}
          element={<Blog />}
        />
        <Route
          path={SHOWROOMS_PAGE}
          element={<Showrooms />}
        />
        <Route
          path={CONTACTS_PAGE}
          element={<Contacts />}
        />
        <Route
          path={POLICY_PAGE}
          element={<PrivatePolicy />}
        />
        <Route
          path={CATEGORIES_PAGE}
          element={<Categories />}
        />
        <Route
          path={ERROR_PAGE}
          element={<ErrorPage />}
        />


      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
};

export default AppRoutes;
