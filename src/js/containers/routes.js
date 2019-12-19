import FilmDetailsPage from "../pages/FilmDetailsPage";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import NoFoundPage from "../pages/NoFoundPage";

const routes = [
    {
        path: "/",
        exact: true,
        component: HomePage
    },
    {
        path: "/film/:id",
        component: FilmDetailsPage,

    },
    {
        path: "/search",
        component: SearchPage,
    }
];

export default routes;
