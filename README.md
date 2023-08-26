# MERN Task App

This project is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. It helps you manage and track tasks, providing a user-friendly interface for creating, updating, and deleting tasks.

## Features

- User Authentication: Register and log in to manage tasks securely.
- Task Management: Create, update, and delete tasks.
- Task Filtering: View tasks based on their status (e.g., pending, completed).
- Responsive Design: Provides a seamless experience across devices.
- MongoDB Integration: Store task data in a MongoDB database.
- RESTful API: Communicate with the backend through a RESTful API.

## Getting Started

### Prerequisites

To run this project, you'll need the following tools:

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/ahmedllshafiey/MERN-Task-App.git
   ```

2. Navigate to the project directory:

   ```sh
   cd MERN-Task-App
   ```

3. Install server dependencies:

   ```sh
   cd server
   npm install
   ```

4. Install client dependencies:

   ```sh
   cd ../client
   npm install
   ```

5. Create .env file in `Server` and write following code:

   ```sh
   PORT=<PORT>
   MONGO_URL=<MONGODB_URL>
   ```

## Usage

1. Start the server:

   ```sh
   cd server
   npm start
   ```

2. Start the client:

   ```sh
   cd ../client
   npm start
   ```

3. Open your web browser and access the app at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or improvements, please open an issue or submit a pull request. Be sure to follow the code of conduct.

## License

This project is licensed under the [MIT License](LICENSE).
