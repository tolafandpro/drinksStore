const createError = (message, status) => {
    const err = new Error();
    message = err.message;
    status = err.status;
    return err
}

module.exports = createError;