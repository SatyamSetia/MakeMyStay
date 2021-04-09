import * as actionTypes from './action-types';

export const updateView = (view) => {
    return {
        type: actionTypes.UPDATE_VIEW,
        view
    }
}
