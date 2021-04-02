export const toggleSnackbarOpen = (snackbarMessage, severity) => ({
    type: "TOGGLE_SNACKBAR_OPEN",
    snackbarMessage,
    severity
});

export const toggleSnackbarClose = () => ({
    type: "TOGGLE_SNACKBAR_CLOSE",
});