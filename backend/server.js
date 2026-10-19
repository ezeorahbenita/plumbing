require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;
const app = express();
const PORT = 5000;


// =========================
// MIDDLEWARE
// =========================

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use(express.json());


// =========================
// ADMIN LOGIN
// =========================

app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign(
      { email: ADMIN_EMAIL, role: "admin" },
      JWT_SECRET,
      { expiresIn: "2h" }
    );

    return res.json({
      success: true,
      message: "Admin login successful",
      token
    });
  }

  res.status(401).json({
    success: false,
    message: "Invalid email or password"
  });
});
// =========================
// ADMIN AUTHENTICATION
// =========================

function authenticateAdmin(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Authentication required."
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({
        message: "Admin access required."
      });
    }

    req.admin = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired authentication token."
    });
  }
}

// =========================
// HOME ROUTE
// =========================

app.get("/", (req, res) => {
  res.send("De-Sofex backend is running!");
});


// =========================
// GET ALL BOOKINGS
// =========================

app.get("/api/bookings", authenticateAdmin, (req, res) => {
  try {
    const bookings = JSON.parse(
      fs.readFileSync("bookings.json", "utf8")
    );

    res.json(bookings);

  } catch (error) {
    console.error("Error reading bookings:", error);

    res.status(500).json({
      message: "Unable to retrieve bookings."
    });
  }
});


// =========================
// CREATE BOOKING
// =========================

app.post("/api/bookings", (req, res) => {

  const {
    fullName,
    phone,
    email,
    service,
    address,
    problem,
    date,
    time,
    emergency
  } = req.body;


  if (
    !fullName ||
    !phone ||
    !service ||
    !address ||
    !problem ||
    !date ||
    !time
  ) {
    return res.status(400).json({
      message: "Please provide all required booking information."
    });
  }


  try {

    const bookings = JSON.parse(
      fs.readFileSync("bookings.json", "utf8")
    );


    const newBooking = {
      id: Date.now(),
      fullName,
      phone,
      email,
      service,
      address,
      problem,
      date,
      time,
      emergency,
      status: "Pending",
      createdAt: new Date().toISOString()
    };


    bookings.push(newBooking);


    fs.writeFileSync(
      "bookings.json",
      JSON.stringify(bookings, null, 2)
    );


    console.log("New Plumbing Booking:");
    console.log(newBooking);


    res.status(201).json({
      message: "Booking received and saved successfully!",
      booking: newBooking
    });


  } catch (error) {

    console.error("Error saving booking:", error);

    res.status(500).json({
      message: "Unable to save booking."
    });

  }
});


// =========================
// UPDATE BOOKING STATUS
// =========================

app.put("/api/bookings/:id", authenticateAdmin, (req, res) => {

  const bookingId = Number(req.params.id);
  const { status } = req.body;

  const allowedStatuses = [
    "Pending",
    "Confirmed",
    "Completed"
  ];


  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({
      message: "Invalid booking status."
    });
  }


  try {

    const bookings = JSON.parse(
      fs.readFileSync("bookings.json", "utf8")
    );


    const booking = bookings.find(
      (item) => item.id === bookingId
    );


    if (!booking) {
      return res.status(404).json({
        message: "Booking not found."
      });
    }


    booking.status = status;


    fs.writeFileSync(
      "bookings.json",
      JSON.stringify(bookings, null, 2)
    );


    res.json({
      message: "Booking status updated successfully.",
      booking
    });


  } catch (error) {

    console.error("Error updating booking:", error);

    res.status(500).json({
      message: "Unable to update booking."
    });

  }

});


// =========================
// DELETE BOOKING
// =========================

app.delete("/api/bookings/:id", authenticateAdmin, (req, res) => {

  const bookingId = Number(req.params.id);


  try {

    const bookings = JSON.parse(
      fs.readFileSync("bookings.json", "utf8")
    );


    const updatedBookings = bookings.filter(
      (booking) => booking.id !== bookingId
    );


    if (updatedBookings.length === bookings.length) {
      return res.status(404).json({
        message: "Booking not found."
      });
    }


    fs.writeFileSync(
      "bookings.json",
      JSON.stringify(updatedBookings, null, 2)
    );


    res.json({
      message: "Booking deleted successfully."
    });


  } catch (error) {

    console.error("Error deleting booking:", error);

    res.status(500).json({
      message: "Unable to delete booking."
    });

  }

});


// =========================
// START SERVER
// =========================

app.listen(PORT, () => {
  console.log(
    `Backend server running on http://localhost:${PORT}`
  );
});