import BookingRequestsList from "../components/booking/booking-requests/booking-requests-list";
import NewBooking from "../components/booking/new-booking";
import Home from "../components/home/home";
import PropertyList from "../components/property-list/property-list";
import PropertyView from "../components/property-view/property-view";
import { USERTYPES } from "../config";

export const routes = [
    {
        _viewId: 0,
        title: 'Properties',
        path: '/properties/:propertyId',
        component: PropertyView,
        authGuard: true,
        canAccess: [USERTYPES.HOST, USERTYPES.GUEST]
    }, {
        _viewId: 1,
        title: 'Properties',
        path: '/properties',
        component: PropertyList,
        authGuard: true,
        canAccess: [USERTYPES.HOST, USERTYPES.GUEST]
    }, {
        _viewId: 2,
        title: 'New Booking',
        path: '/bookings/new',
        component: NewBooking,
        authGuard: true,
        canAccess: [USERTYPES.GUEST]
    }, {
        _viewId: 3,
        title: 'All Requests',
        path: '/bookings',
        component: BookingRequestsList,
        authGuard: true,
        canAccess: [USERTYPES.HOST]
    }, {
        _viewId: 4,
        title: 'Home',
        path: '/',
        component: Home,
        authGuard: false,
        canAccess: [USERTYPES.HOST, USERTYPES.GUEST]
    }
];

export const getViewTitle = (path) => {
    let index = routes.findIndex(route => path.includes(route.path));

    if(index !== -1) return routes[index].title;
    else return null;
}