Shopper E-commerce Platform
Overview
Shopper is a full-featured e-commerce platform built using the MERN (MongoDB, Express, React, Node.js) stack. The platform offers a seamless shopping experience for users, with an intuitive admin panel for managing products, categories, users, and orders.

Features
User Authentication & Authorization: Secure login and registration using JWT tokens.
Product Management: Add, edit, and delete products with ease.
Shopping Cart: Add products to the cart, adjust quantities, and proceed to checkout.

Admin Panel: Manage products, users, and orders with a robust admin interface.
Responsive Design: Optimized for desktop and mobile devices.
Tech Stack
Frontend: React.js, Context API, React Router, CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JSON Web Tokens (JWT)
Deployment: Vercel (Frontend), Render(Backend)
Installation
Prerequisites
Make sure you have the following installed on your system:

Node.js
npm or yarn
MongoDB
Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/shopper-ecommerce.git
cd shopper-ecommerce
Install Dependencies
Navigate to the frontend and backend directories and install the required dependencies.

bash
Copy code
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
Set Up Environment Variables
Create a .env file in the backend directory with the following content:

env
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
Run the Application
To start the application, run the following commands:

bash
Copy code
# Run backend
cd backend
npm run server

# Run frontend
cd ../frontend
npm start
Visit https://e-com-website-blond.vercel.app/ to view the application.
