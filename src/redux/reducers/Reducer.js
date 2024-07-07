import { types } from "../types";

const initialState = {
    preloader: false,
};

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case types.HEAVER_ONN:
            return {
                preloader: true,
            };
        case types.HEAVER_OFF:
            return {
                preloader: false,
            };
        default:
            return state;
    }
}