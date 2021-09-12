import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';

export const NavbarMenuListFC =
    [
        {
            to: '/home',
            path: '/home',
            component: Home
        },
        {
            to: '/contactUs',
            path: '/contactUs',
            component: ContactUs
        }
    ];

export default NavbarMenuListFC;