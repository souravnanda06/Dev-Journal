# Dev-Journal

A full-stack developer journal application built with React (Vite) on the frontend and Node.js/Express on the backend, using MongoDB for data persistence.

## Features

- User authentication (register / login)
- Create, view, and delete journal entries
- Dashboard to manage your entries

## Project Structure

```
Dev-Journal/
├── dev-journal/   # React frontend (Vite)
└── server/        # Node.js/Express backend
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- A MongoDB Atlas cluster (or local MongoDB instance)

### Backend Setup

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your MongoDB connection string:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and replace the placeholders with your actual credentials:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
   ```
   > Replace `<username>`, `<password>`, `<cluster>`, and `<dbname>` with your MongoDB Atlas values.
4. Start the server:
   ```bash
   npm start
   ```
   The API will be available at `http://localhost:3000`.

### Frontend Setup

1. Navigate to the `dev-journal` directory:
   ```bash
   cd dev-journal
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

| Variable      | Description                        |
|---------------|------------------------------------|
| `MONGODB_URI` | MongoDB connection string          |

## License

ISC
