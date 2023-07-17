import {
  NavLink,
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
import { getAllBrands } from "@services/brandsAPI";
import { get } from "@services/api";
import { brandsLoader } from "@pages/Brands";
import ErrorPage from "@pages/ErrorPage";
import {
  ABOUT_PAGE,
  BLOG_PAGE,
  BRANDS_PAGE,
  BUSINESS_PLAN_PAGE,
  CATALOG_PAGE,
  CATALOG_PAGE_COMPILATIONS,
  CATALOG_PAGE_FOR_FITNESS_CENTER,
  CATALOG_PAGE_FOR_HOME,
  CATALOG_PAGE_NEW,
  CATALOG_PAGE_OFFER,
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
  SERVICE_PAGE,
  SHOWROOMS_PAGE,
  TEAM_PAGE,
  TRANDIN_PAGE,
  WARRANTY_PAGE
} from "../constants";
import HomeIcon from "@components/HomeIcon";
const Home = lazy(() => import("@pages/Home"));
const Catalog = lazy(() => import("@pages/Catalog"));
const CatalogForHome = lazy(() => import("@pages/CatalogForHome"));
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
      <Route
        path="/"
        element={<Layout />}
        handle={{
          crumb: () => <HomeIcon />
        }}>

        <Route
          path={HOME_PAGE}
          element={<Home />}
        />

        <Route
          path={CATALOG_PAGE}
          element={<Catalog />}
        >
          <Route
            path={CATALOG_PAGE_FOR_HOME}
            element={<CatalogForHome />}
            handle={{
              crumb: () => <NavLink to={CATALOG_PAGE_FOR_HOME}>Для дома</NavLink>
            }}
          />
          <Route
            path={CATALOG_PAGE_FOR_FITNESS_CENTER}
            element={<Catalog />}
            handle={{
              crumb: () => <NavLink to={CATALOG_PAGE_FOR_FITNESS_CENTER}>Для фитнес клубов</NavLink>
            }}
          />
          <Route
            path={CATALOG_PAGE_OFFER}
            element={<Catalog />}
            handle={{
              crumb: () => <NavLink to={CATALOG_PAGE_OFFER}>Акции</NavLink>
            }}
          />
          <Route
            path={CATALOG_PAGE_COMPILATIONS}
            element={<Catalog />}
            handle={{
              crumb: () => <NavLink to={CATALOG_PAGE_COMPILATIONS}>Идеи и подборки</NavLink>
            }}
          />
          <Route
            path={CATALOG_PAGE_NEW}
            element={<Catalog />}
            handle={{
              crumb: () => <NavLink to={CATALOG_PAGE_NEW}>Новинки</NavLink>
            }}
          />
        </Route>

        <Route
          path={BRANDS_PAGE}
          element={<Brands />}
          loader={brandsLoader}
          handle={{
            crumb: () => <NavLink to={BRANDS_PAGE}>Брэнды</NavLink>
          }}
        />

        <Route
          path={DELIVERY_PAGE}
          element={<Delivery />}
          handle={{
            crumb: () => <NavLink to={DELIVERY_PAGE}>Доставка</NavLink>
          }}
        />

        <Route
          path={REFOUND_PAGE}
          element={<Refound />}
          handle={{
            crumb: () => <NavLink to={REFOUND_PAGE}>Возврат</NavLink>
          }}
        />

        <Route
          path={SERVICE_PAGE}
          element={<ServiceRequest />}
          handle={{
            crumb: () => <NavLink to={SERVICE_PAGE}>Сервис</NavLink>
          }}
        />

        <Route
          path={FITNESS_CLUB_SERVICE_PAGE}
          element={<FitnessClubSevrice />}
          handle={{
            crumb: () => <NavLink to={FITNESS_CLUB_SERVICE_PAGE}>Сервис для клубов</NavLink>
          }}
        />

        <Route
          path={FAQ_PAGE}
          element={<Faq />}
          handle={{
            crumb: () => <NavLink to={FAQ_PAGE}>FAQ</NavLink>
          }}
        />

        <Route
          path={INSTRUCTIONS_PAGE}
          element={<Instructions />}
          handle={{
            crumb: () => <NavLink to={INSTRUCTIONS_PAGE}>Инструкции</NavLink>
          }}
        />

        <Route
          path={WARRANTY_PAGE}
          element={<Warranty />}
          handle={{
            crumb: () => <NavLink to={WARRANTY_PAGE}>Гарантия</NavLink>
          }}
        />

        <Route
          path={PROJECT_3D_PAGE}
          element={<Project3D />}
          handle={{
            crumb: () => <NavLink to={PROJECT_3D_PAGE}>3D проккты</NavLink>
          }}
        />

        <Route
          path={CONSALTING_PAGE}
          element={<Consalting />}
          handle={{
            crumb: () => <NavLink to={CONSALTING_PAGE}>Консалтинг</NavLink>
          }}
        />

        <Route
          path={BUSINESS_PLAN_PAGE}
          element={<BizPlan />}
          handle={{
            crumb: () => <NavLink to={BUSINESS_PLAN_PAGE}>Бизнес план</NavLink>
          }}
        />

        <Route
          path={LEASING_PAGE}
          element={<Leasing />}
          handle={{
            crumb: () => <NavLink to={LEASING_PAGE}>Лизинг</NavLink>
          }}
        />

        <Route
          path={TRANDIN_PAGE}
          element={<Tradein />}
          handle={{
            crumb: () => <NavLink to={TRANDIN_PAGE}>Trade-IN</NavLink>
          }}
        />

        <Route
          path={CREDIT_PAGE}
          element={<Credit />}
          handle={{
            crumb: () => <NavLink to={CREDIT_PAGE}>Кредит</NavLink>
          }}
        />

        <Route
          path={ABOUT_PAGE}
          element={<About />}
          handle={{
            crumb: () => <NavLink to={ABOUT_PAGE}>О нас</NavLink>
          }}
        >
          <Route
            path={ABOUT_PAGE}
            element={<AboutIntro />}
          />
          <Route
            path={MISSION_PAGE}
            element={<Mission />}
            handle={{
              crumb: () => <NavLink to={ABOUT_PAGE}>Наша миссия</NavLink>
            }}
          />
          <Route
            path={TEAM_PAGE}
            element={<Team />}
            handle={{
              crumb: () => <NavLink to={TEAM_PAGE}>Наша команда</NavLink>
            }}
          />
          <Route
            path={OUT_PROJECTS_PAGE}
            element={<OurProjects />}
            handle={{
              crumb: () => <NavLink to={OUT_PROJECTS_PAGE}>Наши проекты</NavLink>
            }}
          />
          <Route
            path={NEWS_PAGE}
            element={<News />}
            handle={{
              crumb: () => <NavLink to={NEWS_PAGE}>Новости</NavLink>
            }}
          />
        </Route>

        <Route
          path={BLOG_PAGE}
          element={<Blog />}
          handle={{
            crumb: () => <NavLink to={BLOG_PAGE}>Блог</NavLink>
          }}
        />

        <Route
          path={SHOWROOMS_PAGE}
          element={<Showrooms />}
          handle={{
            crumb: () => <NavLink to={SHOWROOMS_PAGE}>Где купить</NavLink>
          }}
        />

        <Route
          path={CONTACTS_PAGE}
          element={<Contacts />}
          handle={{
            crumb: () => <NavLink to={CONTACTS_PAGE}>Контакты</NavLink>
          }}
        />

        <Route
          path={POLICY_PAGE}
          element={<PrivatePolicy />}
          handle={{
            crumb: () => <NavLink to={POLICY_PAGE}>Политика конфиленциальности</NavLink>
          }}
        />

        <Route
          path={CATEGORIES_PAGE}
          element={<Categories />}
          handle={{
            crumb: () => <NavLink to={CATEGORIES_PAGE}>Categories page</NavLink>
          }}
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
