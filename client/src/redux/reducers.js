const initialState = {
    toggleSnackbar: false,
    snackbarMessage: null,
    severity: 'success'
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "TOGGLE_SNACKBAR_OPEN": {
            return {
                ...state,
                toggleSnackbar: true,
                snackbarMessage: action.snackbarMessage,
                severity: action.severity
            };
        }

        case "TOGGLE_SNACKBAR_CLOSE": {
            return {
                ...state,
                toggleSnackbar: false,
                snackbarMessage: null,
                severity: 'success'
            };
        }

        default: {
            return state;
        }
    }
}