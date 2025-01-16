import {
  getScholarshipDetails,
  updateScholarshipDetails,
  removeScholarship,
  getFilteredScholarships,
  createScholarshipService,
} from "../services/scholarshipService.js";

import {
  handleServerError,
  handleBadRequestError,
  handleNotFoundError,
} from "../utils/error.js";

export const getScholarshipHandler = async (req, reply) => {
  const { scholarshipId } = req.query;

  try {
    if (!scholarshipId) {
      throw handleBadRequestError("Scholarship ID is required.");
    }

    const scholarship = await getScholarshipDetails(scholarshipId);
    if (!scholarship) {
      throw handleNotFoundError(
        `Scholarship with ID ${scholarshipId} not found.`
      );
    }

    return reply.code(200).send(scholarship);
  } catch (error) {
    return reply
      .code(error.code || 500)
      .send({ message: error.message || "Internal Server Error" });
  }
};

export const updateScholarshipHandler = async (req, reply) => {
  const { scholarshipId } = req.query;
  const { name, type, eligibility, deadline, website, schoolId } = req.body;

  try {
    if (!scholarshipId) {
      throw handleBadRequestError("Scholarship ID is required.");
    }

    const updatedScholarship = await updateScholarshipDetails(scholarshipId, {
      name,
      type,
      eligibility,
      deadline,
      website,
      schoolId,
    });

    return reply.code(200).send(updatedScholarship);
  } catch (error) {
    return reply
      .code(error.code || 400)
      .send({ message: error.message || "Bad Request" });
  }
};

export const deleteScholarshipHandler = async (req, reply) => {
  const { scholarshipId } = req.query;

  try {
    if (!scholarshipId) {
      throw handleBadRequestError("Scholarship ID is required.");
    }

    await removeScholarship(scholarshipId);

    return reply.code(200).send({
      status: "success",
      message: "Scholarship deleted successfully.",
    });
  } catch (error) {
    return reply
      .code(error.code || 400)
      .send({ message: error.message || "Bad Request" });
  }
};

export const getScholarshipsHandler = async (req, reply) => {
  try {
    const result = await getFilteredScholarships(req.query);
    return reply.code(200).send(result);
  } catch (error) {
    return reply
      .code(500)
      .send({ message: error.message || "Internal Server Error" });
  }
};

export const createScholarshipHandler = async (req, reply) => {
  const { name, type, eligibility, deadline, website, schoolId } = req.body;

  try {
    if (!name || !type || !eligibility || !deadline) {
      throw handleBadRequestError(
        "Missing required fields: name, type, eligibility, or deadline."
      );
    }

    const createdScholarship = await createScholarshipService({
      name,
      type,
      eligibility,
      deadline,
      website,
      schoolId,
    });

    return reply.code(201).send({
      status: "success",
      message: "Scholarship created successfully.",
      data: createdScholarship,
    });
  } catch (error) {
    return reply
      .code(error.code || 400)
      .send({ message: error.message || "Bad Request" });
  }
};
