# UrbanNest - A Cutting-Edge Real Estate Marketplace

Welcome to UrbanNest, a cutting-edge real estate marketplace built with the MERN stack. This project aims to provide a comprehensive platform for users to buy, sell, and rent properties with ease.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Register and login with secure authentication.
- **Property Listings**: Browse and search for properties.
- **Property Details**: View detailed information about each property.
- **User Profiles**: Manage user profiles and property listings.
- **Admin Panel**: Admin functionalities to manage users and properties.
- **Responsive Design**: Fully responsive design for a seamless experience on all devices.

## Technologies Used

- **MongoDB**: Database for storing user and property data.
- **Express.js**: Backend framework for building the API.
- **React**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for the backend server.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JWT**: JSON Web Tokens for secure authentication.
- **Redux**: State management for the React application.
- **Tailwind CSS**: CSS framework for responsive design.

## Installation

1. Clone the repository:
   ``` bash
   git clone https://github.com/ananya-gta/UrbanNest.git
   cd UrbanNest           
   ```

2. Install backend dependencies:
   ``` bash
   cd api
   npm install 
   ```

3. Install frontend dependencies:

   ``` bash
   cd ../client
   npm install
   ```

4. Create a .env file in the backend directory and add the following environment variables:
   ``` env
   MONGODB=mongodb+srv://<username>:<password>@urbannest.iufdvdc.mongodb.net/?retryWrites=true&w=majority&appName=UrbanNest
   JWT_SECRET=your_jwt_secret
   ```

5. Start the backend server:
   ``` bash
   cd api
   npm run dev 
   ```

6. Start the frontend development server:
   ``` bash
   cd ../client
   npm run dev
   ```

## Usage
Open your browser and navigate to http://localhost:5173 to access the application.
Register a new account or login with an existing account.
Browse available properties, view details, and manage your profile.

## API Endpoints
Here are some key API endpoints for the backend:

- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Login a user.
- `GET /api/properties`: Get a list of properties.
- `POST /api/properties`: Create a new property (admin only).
- `GET /api/properties/:id`: Get details of a specific property.
- `PUT /api/properties/:id`: Update a property (admin only).
- `DELETE /api/properties/:id`: Delete a property (admin only).

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

- Fork the repository.
- Create a new branch: `git checkout -b feature/your-feature-name`.
- Commit your changes: `git commit -m 'Add some feature'`.
- Push to the branch: `git push origin feature/your-feature-name`.
- Open a pull request.
