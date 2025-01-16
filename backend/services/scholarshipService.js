import {
  getScholarshipById,
  updateScholarshipById,
  deleteScholarshipById,
  getScholarships,
  countScholarships,
  createScholarship,
} from "../models/scholarshipModel.js";
import { buildFilters, paginate } from "../utils/paginationAndFiltering.js";
import {
  handleServerError,
  handleNotFoundError,
  handleBadRequestError,
} from "../utils/error.js";

export const getScholarshipDetails = async (id) => {
  if (!id || isNaN(id)) {
    throw handleBadRequestError("Invalid scholarship ID");
  }

  try {
    const scholarship = await getScholarshipById(id);
    if (!scholarship) {
      throw handleNotFoundError(`Scholarship with ID ${id} not found`);
    }
    return scholarship;
  } catch (error) {
    throw handleServerError(error.message);
  }
};

export const updateScholarshipDetails = async (id, data) => {
  if (!id || isNaN(id)) {
    throw handleBadRequestError("Invalid scholarship ID");
  }
  if (!data.name || !data.type || !data.eligibility || !data.deadline) {
    throw handleBadRequestError(
      "Missing required fields: name, type, eligibility, or deadline"
    );
  }

  try {
    return await updateScholarshipById(id, data);
  } catch (error) {
    throw handleServerError(error.message);
  }
};

export const removeScholarship = async (id) => {
  if (!id || isNaN(id)) {
    throw handleBadRequestError("Invalid scholarship ID");
  }

  try {
    return await deleteScholarshipById(id);
  } catch (error) {
    throw handleServerError(error.message);
  }
};

export const getFilteredScholarships = async (query) => {
  const { page = 1, limit = 10 } = query;

  try {
    const filters = buildFilters(query);
    const { skip, take } = paginate(page, limit);

    const scholarships = await getScholarships(filters, skip, take);
    const total = await countScholarships(filters);
    const totalPages = Math.ceil(total / limit); // Calculate total pages

    return {
      scholarships,
      pagination: {
        total,
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        totalPages,
      },
    };
  } catch (error) {
    throw handleServerError(error.message);
  }
};

export const createScholarshipService = async (data) => {
  if (!data.name || !data.type || !data.eligibility || !data.deadline) {
    throw handleBadRequestError(
      "Missing required fields: name, type, eligibility, or deadline"
    );
  }

  try {
    return await createScholarship(data);
  } catch (error) {
    throw handleBadRequestError(error.message);
  }
};
