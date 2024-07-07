import { types } from "../types";

export function heaverOnn() {
    return {
        type: types.HEAVER_ONN,
    };
}
export function heaverOff() {
    return {
        type: types.HEAVER_OFF,
    };
}

export function fetchUserData(user) {
    return async function (dispatch) {
        dispatch(heaverOnn());
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        };
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts`,
            options
        );
        if (response.status >= 200 || response.status <= 204) {
            dispatch(heaverOff());
        } else if (response.status === 404) {
            dispatch(heaverOff());
        }
    };
}

export function fetchUserPosts(users) {
    return async function (dispatch) {
        dispatch(heaverOnn());
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(users),
        };
        const response = await fetch(`https://httpbin.org/post`, options);
        if (response.status >= 200 || response.status <= 204) {
            dispatch(heaverOff());
        } else if (response.status === 404) {
            dispatch(heaverOff());
        }
    };
}