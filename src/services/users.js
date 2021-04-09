import { getProperty } from "./properties"

export const getHostIdByPropertyId = async (_propertyId) => {
    const property = await getProperty(_propertyId);
    return property._hostId;
}