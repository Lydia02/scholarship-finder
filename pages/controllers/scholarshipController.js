import {
  getScholarshipDetails,
  updateScholarshipDetails,
  removeScholarship,
  getFilteredScholarships,
  createScholarshipService,
} from "../services/scholarshipService";
import { handleServerError, handleBadRequestError } from "../utils/error";

export const getScholarshipHandler = async (req, res) => {
  const { scholarshipId } = req.query;

  try {
    const scholarship = await getScholarshipDetails(scholarshipId);
    return res.status(200).json(scholarship);
  } catch (error) {
    return res.status(error.code || 500).json(error);
  }
};

export const updateScholarshipHandler = async (req, res) => {
  const { scholarshipId } = req.query;
  const { name, type, eligibility, deadline, website, schoolId } = req.body;

  try {
    const updatedScholarship = await updateScholarshipDetails(scholarshipId, {
      name,
      type,
      eligibility,
      deadline,
      website,
      schoolId,
    });

    return res.status(200).json(updatedScholarship);
  } catch (error) {
    return res.status(error.code || 400).json(error);
  }
};

export const deleteScholarshipHandler = async (req, res) => {
  const { scholarshipId } = req.query;

  try {
    await removeScholarship(scholarshipId);
    return res.status(200).json({
      status: "success",
      message: "Scholarship deleted successfully",
    });
  } catch (error) {
    return res.status(error.code || 400).json(error);
  }
};

export const getScholarshipsHandler = async (req, res) => {
  try {
    const result = await getFilteredScholarships(req.query);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const createScholarshipHandler = async (req, res) => {
  const { name, type, eligibility, deadline, website, schoolId } = req.body;

  try {
    const createdScholarship = await createScholarshipService({
      name,
      type,
      eligibility,
      deadline,
      website,
      schoolId,
    });

    return res.status(201).json({
      status: "success",
      message: "Scholarship created successfully",
      data: createdScholarship,
    });
  } catch (error) {
    return res.status(error.code || 400).json(error);
  }
};
