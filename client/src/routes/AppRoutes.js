import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "@layout/Layout";
import { lazy } from "react";
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
import { loadGroup } from "@utils/loadGroup";
import { groupLoader } from "../pages/Group";
import { categoryLoader } from "@pages/Category";
import { allCategoriesLoader } from "../pages/Category";

const Device = lazy(() => import("@pages/Device"));
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
const Category = lazy(() => import("@pages/Category"));
const Group = lazy(() => import("@pages/Group"));

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
          index
          element={<Home />}
        />

        <Route
          path={CATALOG_PAGE}
          element={<Catalog />}
          handle={{
            crumb: () => <span>Каталог</span>
          }}
        />

        <Route
          path={CATALOG_PAGE_FOR_HOME}
          handle={{
            crumb: () => <span>Для дома</span>
          }}
        >
          <Route
            index
            element={<CatalogForHome />}
          />
          <Route
            path={`:groupId`}
            loader={groupLoader}
            handle={{
              crumb: (data) => <span>{data.groupName}</span>
            }}
            element={<Group />}
          >
            <Route
              index
              loader={allCategoriesLoader}
              element={<Category all={true} />}
            />

            <Route
              path={`:typeId`}
              element={<Category />}
              loader={categoryLoader}
              handle={{
                // crumb: (data) => <span>{data.name}</span>
              }}
            />
          </Route>
        </Route>

        <Route
          path={CATALOG_PAGE_FOR_FITNESS_CENTER}
          element={<Catalog />}
          handle={{
            crumb: () => <span>Для фитнес клубов</span>
          }}
        >
          <Route
            path={`:groupId`}
            element={<Group />}
            loader={({ params, request }) => loadGroup(params.groupId)}
            handle={{
              crumb: (data) => <span>{data.name}</span>
            }}
          />

          {/* <Route
            path={`:groupId/:typeId`}
            element={<Category />}
          /> */}
        </Route>

        <Route
          path={CATALOG_PAGE_OFFER}
          element={<Catalog />}
          handle={{
            crumb: () => <span>Акции</span>
          }}
        />

        <Route
          path={CATALOG_PAGE_COMPILATIONS}
          element={<Catalog />}
          handle={{
            crumb: () => <span>Идеи и подборки</span>
          }}
        />

        <Route
          path={CATALOG_PAGE_NEW}
          element={<Catalog />}
          handle={{
            crumb: () => <span>Новинки</span>
          }}
        />



        <Route
          path={BRANDS_PAGE}
          element={<Brands />}
          loader={brandsLoader}
          handle={{
            crumb: () => <span>Брэнды</span>
          }}
        />

        <Route
          path={DELIVERY_PAGE}
          element={<Delivery />}
          handle={{
            crumb: () => <span>Доставка</span>
          }}
        />

        <Route
          path={REFOUND_PAGE}
          element={<Refound />}
          handle={{
            crumb: () => <span>Возврат</span>
          }}
        />

        <Route
          path={SERVICE_PAGE}
          element={<ServiceRequest />}
          handle={{
            crumb: () => <span>Сервис</span>
          }}
        />

        <Route
          path={FITNESS_CLUB_SERVICE_PAGE}
          element={<FitnessClubSevrice />}
          handle={{
            crumb: () => <span>Сервис для клубов</span>
          }}
        />

        <Route
          path={FAQ_PAGE}
          element={<Faq />}
          handle={{
            crumb: () => <span>FAQ</span>
          }}
        />

        <Route
          path={INSTRUCTIONS_PAGE}
          element={<Instructions />}
          handle={{
            crumb: () => <span>Инструкции</span>
          }}
        />

        <Route
          path={WARRANTY_PAGE}
          element={<Warranty />}
          handle={{
            crumb: () => <span>Гарантия</span>
          }}
        />

        <Route
          path={PROJECT_3D_PAGE}
          element={<Project3D />}
          handle={{
            crumb: () => <span>3D проккты</span>
          }}
        />

        <Route
          path={CONSALTING_PAGE}
          element={<Consalting />}
          handle={{
            crumb: () => <span>Консалтинг</span>
          }}
        />

        <Route
          path={BUSINESS_PLAN_PAGE}
          element={<BizPlan />}
          handle={{
            crumb: () => <span>Бизнес план</span>
          }}
        />

        <Route
          path={LEASING_PAGE}
          element={<Leasing />}
          handle={{
            crumb: () => <span>Лизинг</span>
          }}
        />

        <Route
          path={TRANDIN_PAGE}
          element={<Tradein />}
          handle={{
            crumb: () => <span>Trade-IN</span>
          }}
        />

        <Route
          path={CREDIT_PAGE}
          element={<Credit />}
          handle={{
            crumb: () => <span>Кредит</span>
          }}
        />

        <Route
          path={ABOUT_PAGE}
          element={<About />}
          handle={{
            crumb: () => <span>О нас</span>
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
              crumb: () => <span>Наша миссия</span>
            }}
          />
          <Route
            path={TEAM_PAGE}
            element={<Team />}
            handle={{
              crumb: () => <span>Наша команда</span>
            }}
          />
          <Route
            path={OUT_PROJECTS_PAGE}
            element={<OurProjects />}
            handle={{
              crumb: () => <span>Наши проекты</span>
            }}
          />
          <Route
            path={NEWS_PAGE}
            element={<News />}
            handle={{
              crumb: () => <span>Новости</span>
            }}
          />
        </Route>

        <Route
          path={BLOG_PAGE}
          element={<Blog />}
          handle={{
            crumb: () => <span>Блог</span>
          }}
        />

        <Route
          path={SHOWROOMS_PAGE}
          element={<Showrooms />}
          handle={{
            crumb: () => <span>Где купить</span>
          }}
        />

        <Route
          path={CONTACTS_PAGE}
          element={<Contacts />}
          handle={{
            crumb: () => <span>Контакты</span>
          }}
        />

        <Route
          path={POLICY_PAGE}
          element={<PrivatePolicy />}
          handle={{
            crumb: () => <span>Политика конфиленциальности</span>
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
