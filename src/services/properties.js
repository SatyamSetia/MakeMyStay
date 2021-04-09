import { properties } from "../data/properties"
import fakeApi from "../utils/http-client";

export const getProperty = (_propertyId) => {
    const matchProperty = (propertyData => {
        return propertyData._propertyId === _propertyId;
    });

    let property = properties.find(matchProperty);

    if(property) return fakeApi(property);
    else return fakeApi(null);
}