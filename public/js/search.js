let currentPage = 1; // Initialize current page
const resultsContainer = document.getElementById("scholarship-results");
const paginationContainer = document.createElement("div"); // For pagination controls
paginationContainer.id = "pagination-controls";
resultsContainer.after(paginationContainer);

const loadScholarships = async (page = 1) => {
  const name = document.getElementById("search-name").value.trim();
  const degreeLevel = document.getElementById("search-degree").value;
  const state = document.getElementById("search-state").value.trim();
  const type = document.getElementById("search-type").value.trim();
  const deadline = document.getElementById("search-deadline").value.trim();

  resultsContainer.innerHTML = "Loading...";
  console.log("Fetching page:", page);

  const queryParams = new URLSearchParams({
    name,
    degreeLevel,
    deadline,
    state,
    type,
    page, // Add the current page to query parameters
    limit: 10, // Number of scholarships per page
  });

  try {
    const API_URL = "/api";
    const response = await fetch(
      `${API_URL}/scholarships?${queryParams.toString()}`
    );
    if (!response.ok) throw new Error("Failed to fetch scholarships");

    const data = await response.json();
    resultsContainer.innerHTML = "";

    if (data.scholarships && data.scholarships.length > 0) {
      data.scholarships.forEach((scholarship) => {
        const scholarshipCard = `
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${scholarship.name}</h5>
                <p class="card-text">
                  <strong>Degree Level:</strong> ${
                    scholarship.degreeLevel
                  }<br />
                  <strong>Deadline:</strong> ${
                    scholarship.deadline
                      ? new Date(scholarship.deadline).toLocaleDateString()
                      : "N/A"
                  }<br />
                  <strong>State:</strong> ${scholarship.state || "N/A"}<br />
                  <a href="${
                    scholarship.website
                  }" target="_blank">Learn more</a>
                </p>
              </div>
            </div>
          </div>
        `;
        resultsContainer.innerHTML += scholarshipCard;
      });
      renderPagination(data.pagination.totalPages, page); // Render pagination controls
    } else {
      resultsContainer.innerHTML = "<p>No scholarships found.</p>";
    }
  } catch (error) {
    resultsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
};

const renderPagination = (totalPages, currentPage) => {
  paginationContainer.innerHTML = ""; // Clear existing buttons

  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.className = "btn btn-secondary me-2";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      loadScholarships(currentPage);
    }
  });
  paginationContainer.appendChild(prevButton);

  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.className = "btn btn-secondary ms-2";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      loadScholarships(currentPage);
    }
  });
  paginationContainer.appendChild(nextButton);

  const pageInfo = document.createElement("span");
  pageInfo.textContent = ` Page ${currentPage} of ${totalPages} `;
  pageInfo.className = "mx-2";
  paginationContainer.insertBefore(pageInfo, nextButton);
};

// Add event listener for the search button
document.getElementById("search-button").addEventListener("click", () => {
  currentPage = 1; // Reset to first page on new search
  loadScholarships(currentPage);
});
