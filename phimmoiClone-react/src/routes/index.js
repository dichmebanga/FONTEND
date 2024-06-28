// Pages
import Home from '~/pages/Home';
import DetailMovie from '~/pages/DetailMovie';
import SearchMovie from '~/pages/SearchMovie';
import WatchingMovie from '~/pages/WatchingMovie';
import CategoryMovie from '~/pages/CategoryMovie';
import ListMovie from '~/pages/ListMovie';
import CountryMovie from '~/pages/CountryMovie';
import YearMovie from '~/pages/YearMovie';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/detailMovie/:film', component: DetailMovie },
    { path: '/searchMovie/:key', component: SearchMovie },
    { path: '/listMovie/:category', component: ListMovie },
    { path: '/countries/:country', component: CountryMovie },
    { path: '/yearMovie/:year', component: YearMovie },
    { path: '/watchingMovie/:film', component: WatchingMovie },
    { path: '/categoryMovie/:category', component: CategoryMovie },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
