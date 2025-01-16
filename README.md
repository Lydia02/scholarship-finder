# Scholarship Finder Platform

## Introduction

The **Scholarship Finder Platform** is a comprehensive application designed to simplify the search, management, and discovery of scholarships. It includes a **frontend** for users to browse and search scholarships and a **backend API** for managing scholarship data. 

This platform leverages modern technologies like **Next.js**, **Fastify**, **Prisma**, and **PostgreSQL** to provide a seamless user experience while ensuring robust backend operations.

---


## Deployed Application Links

- **scholarship-finder Url**: [Scholarship Finder Url](https://scholarship-finderr.netlify.app/) 
- **Frontend**: [Scholarship Finder Frontend](https://scholarship-finderr.netlify.app/) (hosted on Netlify)
- **Backend**: [Scholarship Finder Backend](https://scholarship-finder-ha7y.onrender.com/) (hosted on Render)
- **Database**: The database is built using PostgreSQL, hosted on Render.com, and integrated with Prisma ORM for efficient data management.

## System Architecture

### High-Level Overview
1. **Frontend**:
   - Built with modern web technologies.
   - Deployed on Netlify for speed and reliability.

2. **Backend**:
   - Fastify framework for building APIs.
   - Prisma ORM for database management.

3. **Database**:
   - PostgreSQL hosted on Render.
   - Prisma ensures seamless migrations and queries.

### Technical Decisions
- **Fastify**: Chosen for its speed and simplicity.
- **Prisma**: Allows easy schema management and reduces boilerplate code.
- **PostgreSQL**: Robust and reliable relational database.



## Local Setup Instructions

### Prerequisites
- Node.js installed on your system.
- PostgreSQL database set up locally or hosted online.
- Git for version control.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-repository-link.git](https://github.com/Lydia02/scholarship-finder.git)
   cd scholarship-finder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up `.env` file:
   ```plaintext
   DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>"
   JWT_SECRET="your_jwt_secret"
   PORT=3004
   ```

4. Run Prisma migrations to set up the database schema:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the backend server:
   ```bash
   npm run server
   ```

6. Start the frontend server (if running locally):
   ```bash
   npm run dev
   ```

## Testing and Demonstration

- **Frontend**: Visit the deployed frontend [here](https://scholarship-finderr.netlify.app/).
- **Backend**: Explore API routes with tools like Postman or directly interact through the frontend.
- **Database**: Interact with real-time data managed through Prisma and hosted on Render.

## Future Enhancements
- Add email notifications for scholarship updates.
- Introduce user profiles for personalized experiences.
- Enhance search filters with AI-based recommendations.

---

## Key Features

### Frontend
- **Dynamic Search**: Search scholarships using filters like name, degree level, type, state, and deadline.
- **Pagination**: Navigate through search results with `Previous` and `Next` buttons.
- **Responsive Design**: Fully responsive design using **Bootstrap** and **custom CSS**.

### Backend
- **CRUD Operations**: Manage scholarships with create, read, update, and delete functionality.
- **Filtering and Pagination**: Search scholarships with advanced filtering and pagination using Fastify and Prisma.
- **Error Handling**: Centralized error handling for consistent responses.
- **Role-Based Access**: Admin and user roles for restricted access to certain features.

- ---

## Tools Used

### Backend
- **Fastify**: Lightweight and efficient Node.js framework.
- **Prisma**: Modern ORM for database interactions.
- **PostgreSQL**: Relational database.
- **JWT**: Secure authentication.

### Frontend
- **Next.js**: React-based framework for server-rendered and static websites.
- **Bootstrap**: Responsive design framework.
- **Custom CSS and JS**: For additional styling and interactivity.

### Utilities
- **Nodemon**: Development utility for live reloads.


---

## File Structure

```plaintext
scholarship-finder/
├── backend/
│   ├── api/
│   │   ├── auth/
│   │   │   └── signin.js             # Authentication routes
│   │   ├── scholarships/
│   │   │   ├── [scholarshipId].js    # Single scholarship routes
│   │   │   └── index.js              # All scholarships routes
│   ├── config/
│   │   ├── seed.js                   # Database seeding script
│   │   └── fastify.js                # Fastify configuration
│   ├── controllers/
│   │   └── scholarshipController.js  # Business logic for scholarships
│   ├── models/
│   │   └── scholarshipModel.js       # Prisma models and queries
│   ├── plugins/
│   │   ├── auth.js                   # Authentication plugin
│   │   
│   ├── services/
│   │   └── scholarshipService.js     # Service layer for business logic
│   ├── utils/
│   │   ├── error.js                  # Centralized error handling
│   │   ├── jwt.js                    # JWT helper functions
│   │   └── paginationAndFiltering.js # Helper for pagination and filtering
│   └── server.js                     # Entry point for Fastify server
│
├── frontend/
│   ├── pages/
│   │   ├── _app.js                   # Custom App component
│   │   └── api/
│   │       └── scholarships/         # API routes for scholarships
│   │           ├── [scholarshipId].js
│   │           └── index.js
│   ├── public/
│   │   ├── css/
│   │   │   ├── bootstrap.min.css     # Bootstrap CSS
│   │   │   ├── scholarshiplanding.css
│   │   ├── images/                   # Images used in the frontend
│   │   │   ├── avatar/               # Avatars
│   │   │   └── ...                   # Other images
│   │   ├── js/
│   │   │   ├── bootstrap.bundle.min.js
│   │   │   ├── jquery.min.js
│   │   │   ├── search.js             # Main search functionality
│   │   │   └── custom.js             # Custom JS scripts
│   │   └── styles.css
│
├── package.json                      # Project dependencies and scripts
├── README.md                         # Documentation
└── .env                              # Environment variables
```


## Testing

### Backend
Use **Postman**  to test API endpoints:
- Scholarships (`/scholarships`)

### Testing the Backend with Postman

Follow these steps to test the backend API using **Postman**:

---

#### 1. **Scholarships**

**Create Scholarship** (Admin Only)
- **Endpoint**: `/scholarships`
- **Method**: `POST`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <admin_jwt_token>"
  }
  ```
- **Body (JSON)**:
  ```json
  {
    "name": "National Merit Scholarship",
    "type": "Undergraduate",
    "degreeLevel": "Bachelor",
    "state": "California",
    "deadline": "2025-12-31",
    "website": "https://example.com/scholarship",
    "schoolId": 1
  }
  ```
- **Expected Response**:
  ```json
  {
    "message": "Scholarship created successfully",
    "data": { ... }
  }
  ```

**Get All Scholarships**
- **Endpoint**: `/scholarships`
- **Method**: `GET`
- **Query Parameters** (optional):
  - `name`: Filter by name
  - `degreeLevel`: Filter by degree level
  - `state`: Filter by state
  - `type`: Filter by type
  - `page`: Pagination (default: 1)
  - `limit`: Number of results per page (default: 10)
- **Expected Response**:
  ```json
  {
    "scholarships": [
      {
        "id": 1,
        "name": "National Merit Scholarship",
        "type": "Undergraduate",
        "degreeLevel": "Bachelor",
        "state": "California",
        "deadline": "2025-12-31",
        "website": "https://example.com/scholarship"
      }
    ],
    "pagination": {
      "total": 50,
      "page": 1,
      "limit": 10
    }
  }
  ```

**Update Scholarship** (Admin Only)
- **Endpoint**: `/scholarships/:id`
- **Method**: `PUT`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <admin_jwt_token>"
  }
  ```
- **Body (JSON)**:
  ```json
  {
    "name": "Updated Scholarship Name",
    "type": "Graduate",
    "degreeLevel": "Master",
    "state": "New York",
    "deadline": "2026-12-31",
    "website": "https://example.com/updated-scholarship"
  }
  ```
- **Expected Response**:
  ```json
  {
    "message": "Scholarship updated successfully",
    "data": { ... }
  }
  ```

**Delete Scholarship** (Admin Only)
- **Endpoint**: `/scholarships/:id`
- **Method**: `DELETE`
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <admin_jwt_token>"
  }
  ```
- **Expected Response**:
  ```json
  {
    "message": "Scholarship deleted successfully"
  }
  ```

---

#### 3. **Error Handling**

**Invalid Token**
- **Headers**:
  ```json
  {
    "Authorization": "Bearer invalid_token"
  }
  ```
- **Expected Response**:
  ```json
  {
    "error": "Invalid token"
  }
  ```

**Missing Fields**
- **Create Scholarship** with missing fields:
  ```json
  {
    "name": "Scholarship without type"
  }
  ```
- **Expected Response**:
  ```json
  {
    "error": "Missing required fields: type, degreeLevel, state, deadline"
  }
  ```

---


### Frontend
- Open the application in your browser and test the search functionality, filtering, and pagination.

### Unit Testing
- Use a testing framework like **Jest** to write unit tests for backend services and controllers.

---


## Author
 **Lydia Ojoawo**: [GitHub](https://github.com/Lydia02)  

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
