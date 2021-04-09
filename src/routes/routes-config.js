import BookingRequestsList from "../components/booking/booking-requests/booking-requests-list";
import NewBooking from "../components/booking/new-booking";
import Home from "../components/home/home";
import PropertyList from "../components/property-list/property-list";
import PropertyView from "../components/property-view/property-view";
import { USERTYPES } from "../config";

export const routes = [
    {
        path: '/properties/:propertyId',
        component: PropertyView,
        authGuard: true,
        canAccess: [USERTYPES.HOST, USERTYPES.GUEST]
    }, {
        path: '/properties',
        component: PropertyList,
        authGuard: true,
        canAccess: [USERTYPES.HOST, USERTYPES.GUEST]
    }, {
        path: '/bookings/new',
        component: NewBooking,
        authGuard: true,
        canAccess: [USERTYPES.GUEST]
    }, {
        path: '/bookings',
        component: BookingRequestsList,
        authGuard: true,
        canAccess: [USERTYPES.HOST]
    }, {
        path: '/',
        component: Home,
        authGuard: false,
        canAccess: [USERTYPES.HOST, USERTYPES.GUEST]
    }
]