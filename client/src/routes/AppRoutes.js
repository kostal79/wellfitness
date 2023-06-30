import {
  Route,
  RouterProvider,
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
const Lising = lazy(() => import("@pages/Lising"));
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

const AppRoutes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          path="/home"
          element={<Home />}

        />
        <Route
          path="/catalog"
          element={<Catalog />}
        />
        <Route
          path="/brands"
          element={<Brands />}
          loader={brandsLoader}
        />
        <Route
          path="/delivery"
          element={<Delivery />}
        />
        <Route
          path="/refound"
          element={<Refound />}
        />
        <Route
          path="/servicerequest"
          element={<ServiceRequest />}
        />
        <Route
          path="/fitnessclubsevrice"
          element={<FitnessClubSevrice />}
        />
        <Route
          path="/faq"
          element={<Faq />}
        />
        <Route
          path="/instructions"
          element={<Instructions />}
        />
        <Route
          path="/warranty"
          element={<Warranty />}
        />
        <Route
          path="/project3d"
          element={<Project3D />}
        />
        <Route
          path="/consalting"
          element={<Consalting />}
        />
        <Route
          path="/bizplan"
          element={<BizPlan />}
        />
        <Route
          path="/lising"
          element={<Lising />}
        />
        <Route
          path="/tradein"
          element={<Tradein />}
        />
        <Route
          path="/credit"
          element={<Credit />}
        />
        <Route
          path="/about"
          element={<About />}
        >

          <Route
            path="/about"
            element={<AboutIntro />}
          />
          <Route
            path="/about/mission"
            element={<Mission />}
          />
          <Route
            path="/about/team"
            element={<Team />}
          />
          <Route
            path="/about/projects"
            element={<OurProjects />}
          />
          <Route
            path="/about/news"
            element={<News />}
          />

        </Route>
        <Route
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/showrooms"
          element={<Showrooms />}
        />
        <Route
          path="/contacts"
          element={<Contacts />}
        />
        <Route
          path="/private-policy"
          element={<PrivatePolicy />}
        />
        <Route
          path="/*"
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
