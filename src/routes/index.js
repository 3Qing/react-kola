import Login from './login.js';
import Public from '@/views/public';

export default {
    routes: [
        Login,
        {
            path: '/',
            component: Public
        }
    ]
};
