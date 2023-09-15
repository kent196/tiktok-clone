import Home from '~/component/pages/Home';
import Following from '~/component/pages/Following';
import Uploads from '~/component/pages/Uploads';
import Search from '~/component/pages/Search';
import { HeaderOnly } from '~/component/Layouts';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/search', component: Search, layout: null },
    { path: '/uploads', component: Uploads, layout: HeaderOnly },
];
export const privateRoutes = [];
