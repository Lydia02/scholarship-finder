export const buildFilters = (query) => {
  const { state, type, degreeLevel, search } = query;

  // Create filter object based on provided query parameters
  const filters = [];

  if (state) {
    filters.push({ school: { state: { equals: state, mode: "insensitive" } } });
  }
  if (type) {
    filters.push({ type: { equals: type, mode: "insensitive" } });
  }
  if (degreeLevel) {
    filters.push({
      degreeLevel: { equals: degreeLevel, mode: "insensitive" },
    });
  }
  if (search) {
    filters.push({ name: { contains: search, mode: "insensitive" } });
  }

  return filters.length > 0 ? { AND: filters } : {};
};

export const paginate = (page = 1, limit = 10) => {
  const currentPage = Math.max(1, Number(page)); // Ensure page is at least 1
  const itemsPerPage = Math.max(1, Number(limit)); // Ensure limit is at least 1

  return {
    skip: (currentPage - 1) * itemsPerPage,
    take: itemsPerPage,
  };
};
