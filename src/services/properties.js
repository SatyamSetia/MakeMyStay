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

export const getPropertiesByHostId = (_hostId) => {
    let propertiesByHostId = properties.filter(propertyData => propertyData._hostId === _hostId);
    return fakeApi(propertiesByHostId);
}

export const getAllProperties = () => {
    return fakeApi(properties);
}