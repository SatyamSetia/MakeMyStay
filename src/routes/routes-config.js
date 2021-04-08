import Booking from "../components/booking/booking";
import Home from "../components/home/home";
import PropertyList from "../components/property-list/property-list";

export const routes = [
    {
        path: '/properties',
        component: PropertyList,
        authGuard: true
    }, {
        path: '/booking',
        component: Booking,
        authGuard: true
    }, {
        path: '/',
        component: Home,
        authGuard: false
    }
]