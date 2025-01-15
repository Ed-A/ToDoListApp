# ToDoListApp

## Overview
This is a full-stack To-Do List application built to demonstrate CRUD operations with task prioritization. The app uses:
- **MVC structure**
- **Frontend**: React.js
- **Backend**: ASP.NET Core API
- **Database**: SQL Server

Users can add, delete, and prioritize tasks, with automatic adjustments task priorities.

---

## Features
- Create, read, update and delete tasks.
- Prioritize tasks.


---

## Folder Structure
- **`client/`**: Contains the React frontend.
- **`server/`**: Contains the ASP.NET Core backend.

---

## Prerequisites
To run this project locally, you need the following:
- **Node.js**: For running the React frontend.
- **.NET SDK**: For the ASP.NET Core backend.
- **SQL Server**: For database management.
- **Git**: For version control.

---

## Getting Started

### Clone the Repository
1. Clone this repository:
   ```bash
   git clone <https://github.com/Ed-A/ToDoListApp.git>
   cd ToDoListApp
   ```
   
---

### Backend (ASP.NET Core)
1. Navigate to the `server/` folder.
   ```bash
   cd server
   ```

2. Restore dependencies
   ```bash
   dotnet restore
   ```

3. Add a database connection string in appsettings.json:
   ```bash
    {
        "ConnectionStrings": {
            "ConnectionString": "Server=YOUR_SERVER_NAME;Database=ToDoListDB;Trusted_Connection=True;"
        }   
    }
    ```

4. Apply database migrations
   ```bash
   dotnet ef database update
   ```

5. Run the server
   ```bash
   dotnet run
   ```

The server will be available at `https://localhost:7271`.

---

### Frontend (React)
1. Navigate to the `client/` folder:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm Install
   ```

3. Create a `.env` file in the `client` root directory with the following:
   ```bash
   REACT_APP_API_URL = https://localhost:7271/api/DoTasks/
   ```

3. Start the React app:
   ```bash
   npm Start
   ```

The React app will be available at `http://localhost:3000`.

---

## Environment Variables
- The React uses a `.env` file to store the backend API URL.
- The backend uses `appsettings.json` for database connection strings.

---

## API Endpoints
### Task Endpoints
- GET `/api/DoTasks`: Retrieve all tasks.
- POST `/api/DoTasks`: Add a new task (requires Name and Description).
- DELETE `/api/DoTasks/{id}`: Delete a task by its ID.
- PATCH `/api/DoTasks/{id}`: Update a task by its ID.
- PUT `/api/DoTasks/{id}/up`: Update task priorities after a prioritization request.

---

## Deployment
### Backend
Deploy the backend using Azure App Service, AWS, or any hosting provider that supports ASP.NET Core.

### Frontend
Deploy the frontend using:
- Netlify
- Vercel
- GitHub Pages

### Environment Variables
For deployment, ensure the API URL is updated in .env:
   ```bash
   REACT_APP_API_URL = https://your-deployed-backend-url/api/DoTasks/
   ```

---

## Author
Nischal Atreya

---

## License
This project is licensed under the MIT License.

---
