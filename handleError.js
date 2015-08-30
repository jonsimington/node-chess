var errorCodes = {
    NONE: 0,
    INVALID_ARGS: 20,
    COULD_NOT_CONNECT:  21,
    DISCONNECTED_UNEXPECTEDLY:  22,
    CANNOT_READ_SOCKET:  23,
    DELTA_MERGE_FAILURE:  24,
    REFLECTION_FAILED:  25,
    UNKNOWN_EVENT_FROM_SERVER:  26,
    SERVER_TIMEOUT:  27,
    INVALID_EVENT:  28,
    GAME_NOT_FOUND:  29,
    MALFORMED_JSON:  30,
    AI_ERRORED:  42,
}

function handleError(codeName, err, message) {
    if(message === undefined) {
        message = err;
    }

    console.error("Error:", codeName, "\n---");

    if(message) {
        console.error(message, "\n---");
    }

    if(err) {
        console.error(err.message, "\n---");
    }

    if(err && err.stack) {
        console.error(err.stack, "\n---");
    }
    else {
        console.trace();
        console.error("---");
    }

    var client = require("./client");
    client.disconnect();

    var errorCode = errorCodes[codeName];

    process.exit(errorCode || 0);
}

module.exports = handleError;