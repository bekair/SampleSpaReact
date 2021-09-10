import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';

export const NavbarMenuListFC =
    [
        {
            title: 'Homepage',
            to: '/home',
            path: '/home',
            component: Home
        },
        {
            title: 'Contact Us',
            to: '/contactUs',
            path: '/contactUs',
            component: ContactUs
        }
    ];

export default NavbarMenuListFC;