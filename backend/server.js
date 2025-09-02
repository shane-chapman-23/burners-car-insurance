require("dotenv").config();

const PORT = process.env.PORT || 5000;

const express = require("express");
const multer = require("multer");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());
app.use(multer().none());

// Export the app for testing
module.exports = app;

// Only start the server if this file is run directly.
// This prevents the server from starting automatically during tests.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
