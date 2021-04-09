import { BOOKING_REQUEST_STATE } from "../config";
import fakeApi from "../utils/http-client";
import { getHostIdByPropertyId } from "./users";

const BOOKING_REQUESTS_KEY = "BOOKING_REQUESTS";

export const createBookingRequestService = async (request) => {
    let requests = JSON.parse(window.localStorage.getItem(BOOKING_REQUESTS_KEY));

    if(!requests) requests = [];

    const _hostId = await getHostIdByPropertyId(request._propertyId);
    window.localStorage.setItem(BOOKING_REQUESTS_KEY, JSON.stringify([
        ...requests,
        {
            ...request,
            _requestId: requests.length,
            _hostId,
            state: BOOKING_REQUEST_STATE.PENDING
        }
    ]));

    return fakeApi(requests.length);
}

export const getBookingRequestByHostId = (_hostId) => {
    let requests = JSON.parse(window.localStorage.getItem(BOOKING_REQUESTS_KEY));

    if(!requests) requests = [];

    const matchRequest = (requestData => {
        return requestData._hostId === _hostId;
    });

    let requestList = requests.filter(matchRequest);

    return fakeApi(requestList);
}

export const updateBookingRequest = (_requestId, state) => {
    let requests = JSON.parse(window.localStorage.getItem(BOOKING_REQUESTS_KEY));

    if(!requests) requests = [];

    const matchRequest = (requestData => {
        return requestData._requestId === _requestId;
    });

    let index = requests.findIndex(matchRequest);

    if(index !== -1) {
        requests[index].state = state;
        window.localStorage.setItem(BOOKING_REQUESTS_KEY, JSON.stringify(requests));
        return fakeApi(state);
    }
    else return fakeApi(null);
}