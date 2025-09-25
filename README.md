# Express TypeScript API

This project is a RESTful API built with Express.js and TypeScript, using MongoDB for data storage and Passport JWT for authentication.

## Features
- User authentication and management
- Customer endpoint example
- Greeting endpoint example
- Centralized error and response handling
- Environment-based configuration
- Modular structure for scalability

## Project Structure
```
app-1/
├── package.json
├── tsconfig.json
├── src/
│   ├── app.ts                  # Entry point
│   ├── config/                 # App configuration
│   ├── controller/             # Controllers (User, Customer)
│   ├── dao/                    # Data access objects
│   ├── interface/              # TypeScript interfaces & enums
│   ├── loader/                 # Loaders (MongoDB)
│   ├── models/                 # Mongoose models
│   ├── routes/                 # Express routes
│   ├── service/                # Business logic/services
│   └── common/                 # Common utilities (response handler, constants)
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance

### Installation
```powershell
npm install
```

### Environment Variables
Create a `.env` file in the root directory with:
```
PORT=3000
JWT_SECRET=your_secret_key
JWT_EXPIRATION=1h
MONGODB_URI=mongodb://localhost:27017/your-db
PASSWORD=your_password
```

### Running the App
Development mode (with auto-reload):
```powershell
npm run dev
```
Build TypeScript:
```powershell
npm run build
```
Start production server:
```powershell
npm start
```

## API Endpoints
- `POST /api/user` - Create user
- `GET /api/user/:email` - Get user by email
- `GET /api/customer/:id` - Get customer info
- `GET /api/greeting` - Greeting endpoint

## License
ISC
