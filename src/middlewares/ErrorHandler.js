export const errorHandler = (error, req, res, next) => {
    let errorCode = error?.statusCode || 500;
    let message = error?.message || "Internal server Error"
    let status = errorCode < 300 ? "success" : "error"

    if (message.includes("E11000")) {
        return {
            errorCode: 400,
            status: "error",
            message: "DUPLICATE ERRROR!!"
        }
    }

    return res.status(errorCode).json({
        status: status,
        message: message
    })
}