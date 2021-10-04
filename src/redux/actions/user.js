import { signInWithGoogle, signOut } from "../../apis/firebase"

export function startLoading() {
    return{
        type: 'START_LOADING'
    }
}

export function updateUserData(payload) {
    return{
        type: 'UPDATE_USER_DATA',
        payload
    }
}

export function updateUserError(payload) {
    return{
        type: 'UPDATE_USER_ERROR',
        payload: payload
    }
}

export function signInWithGoogleAction() {
    return (dispatch) => {
        dispatch(startLoading());

        signInWithGoogle().then(userData => {
            dispatch(updateUserData(userData.user));
            })
            .catch((error) => {
                dispatch(updateUserError(error));
        })

    }
}

export function signOutAction() {
     return (dispatch) => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData(null));
        }).catch((error) => {
            dispatch(updateUserError(error));
        })
     }
}