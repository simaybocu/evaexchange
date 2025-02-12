export const STATUS_CODES = {
    SUCCESS: 200, // HTTP status code for successful operation.
    BAD_REQUEST: 400, // HTTP status code for bad request.
    NOT_FOUND: 404, // HTTP status code for resource not found.
    SERVER_ERROR: 500, // HTTP status code for server error.
};

export const SUCCESS_MESSAGES = {
    SHARES_BOUGHT_SUCCESS: "Shares bought successfully",
    SHARES_SOLD_SUCCESS: "Shares sold successfully" 
}

export const ERROR_MESSAGES = {
    UNKNOWN_ERROR_OCC: "An unknown error occurred",
    SHARE_NOT_REGISTERED: "Share not registered",
    PORTFOLIO_NOT_FOUND: "Portfolio not found",
    NOT_ENOUGH_SHARES: "Not enough shares",
    INVALID_PARAMETERS: "Invalid parameters. Please provide userId, symbol, and quantity.",
    SHARE_CREATION_FAILED: "Failed to create the share in the database.",
    SHARE_UPDATE_FAILED: "Failed to update the share quantity in the database.",
};