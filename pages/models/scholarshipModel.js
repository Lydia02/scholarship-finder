import { PrismaClient } from "@prisma/client";
import {
  handleServerError,
  handleNotFoundError,
  handleBadRequestError,
} from "../utils/error";

const prisma = new PrismaClient();

export const getScholarshipById = async (id) => {
  try {
    const scholarship = await prisma.scholarship.findUnique({
      where: { id: parseInt(id) },
    });

    if (!scholarship) {
      throw handleNotFoundError(`Scholarship with ID ${id} not found`);
    }

    return scholarship;
  } catch (error) {
    throw handleServerError(error.message);
  }
};

export const getScholarships = async (filters, skip, take) => {
  try {
    return await prisma.scholarship.findMany({
      where: filters,
      include: { school: true },
      skip,
      take,
    });
  } catch (error) {
    throw handleServerError(error.message);
  }
};

export const countScholarships = async (filters) => {
  try {
    return await prisma.scholarship.count({ where: filters });
  } catch (error) {
    throw handleServerError(error.message);
  }
};

export const createScholarship = async (data) => {
  try {
    if (!data.name || !data.type || !data.eligibility || !data.deadline) {
      throw handleBadRequestError("Missing required fields for scholarship");
    }

    return await prisma.scholarship.create({
      data: {
        ...data,
        deadline: data.deadline ? new Date(data.deadline) : null,
      },
    });
  } catch (error) {
    throw handleServerError(error.message);
  }
};

export const deleteScholarshipById = async (id) => {
  try {
    return await prisma.scholarship.delete({ where: { id: parseInt(id) } });
  } catch (error) {
    throw handleServerError(`Error deleting scholarship: ${error.message}`);
  }
};

export const updateScholarshipById = async (id, data) => {
  try {
    return await prisma.scholarship.update({
      where: { id: parseInt(id) },
      data: {
        ...data,
        deadline: data.deadline ? new Date(data.deadline) : null,
      },
    });
  } catch (error) {
    throw handleServerError(error.message);
  }
};
