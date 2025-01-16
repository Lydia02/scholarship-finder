const createErrorResponse = (statusCode, message, description = null) => ({
  status: "failed",
  message,
  data: {
    description: description || message,
    code: statusCode,
  },
});

export const handleValidationError = (error) => {
  const message = error.message || "Validation error";
  const description = error.details || null;
  return createErrorResponse(400, message, description);
};

export const handleDatabaseError = (error) => {
  const message = error.message || "Database error";
  return createErrorResponse(500, message);
};

export const handleNotFoundError = (resource, id) => {
  const message = `${resource} with ID ${id} not found`;
  return createErrorResponse(404, "Not Found", message);
};

export const handleMethodNotAllowedError = (method) => {
  const message = `Method ${method} Not Allowed`;
  return createErrorResponse(405, message);
};

export const handleInternalServerError = (error) => {
  const message = error?.message || "An unexpected error occurred";
  return createErrorResponse(500, "Internal Server Error", message);
};

export const handleServerError = (message) => {
  return createErrorResponse(500, "Internal Server Error", message);
};

export const handleBadRequestError = (message) => {
  return createErrorResponse(400, "Bad Request", message);
};
