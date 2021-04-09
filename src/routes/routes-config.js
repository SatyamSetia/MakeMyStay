import NewBooking from "../components/booking/new-booking";
import Home from "../components/home/home";
import PropertyList from "../components/property-list/property-list";
import PropertyView from "../components/property-view/property-view";

export const routes = [
    {
        path: '/properties/:propertyId',
        component: PropertyView,
        authGuard: true
    }, {
        path: '/properties',
        component: PropertyList,
        authGuard: true
    }, {
        path: '/booking/new',
        component: NewBooking,
        authGuard: true
    }, {
        path: '/',
        component: Home,
        authGuard: false
    }
]