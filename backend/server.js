// backend/server.js
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Middlewares
app.use(cors());
app.use(express.json());

// Example route (agar routes folder ka use kar raha hai)
const aiRoutes = require("./routes/ai-route");
app.use("/api/ai", aiRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});