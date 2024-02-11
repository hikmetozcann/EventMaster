
const NotFoundResponse = {
    status: false,
    message: 'Route not found'
}

const ErrorResponse = (error) => {
    return {
        status: false,
        message: error
    }
}


export default { NotFoundResponse, ErrorResponse };