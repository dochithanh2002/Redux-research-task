import * as types from '../constants/ActionTypes';

export function getResult() {
    return {
        type: types.GET_RESULT
    };
}

export function getResultSuccess(response) {
    return {
        type: types.GET_RESULT_SUCCESS,
        response: response
    };
}
