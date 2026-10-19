import { useEffect, useState } from "react";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // =========================
  // FETCH BOOKINGS
  // =========================

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        "http://localhost:5000/api/bookings",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        throw new Error("Unable to fetch bookings");
      }

      const data = await response.json();

      setBookings(data);

    } catch (error) {
      console.error("Error fetching bookings:", error);

    } finally {
      setLoading(false);
    }
  };


  // =========================
  // UPDATE BOOKING STATUS
  // =========================

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `http://localhost:5000/api/bookings/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },

          body: JSON.stringify({ status })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      setBookings((currentBookings) =>
        currentBookings.map((booking) =>
          booking.id === id
            ? { ...booking, status: status }
            : booking
        )
      );

    } catch (error) {
      console.error("Error updating booking:", error);

      alert("Unable to update booking.");
    }
  };


  // =========================
  // DELETE BOOKING
  // =========================

  const deleteBooking = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `http://localhost:5000/api/bookings/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      setBookings((currentBookings) =>
        currentBookings.filter(
          (booking) => booking.id !== id
        )
      );

      alert("Booking deleted successfully.");

    } catch (error) {
      console.error("Error deleting booking:", error);

      alert("Unable to delete booking.");
    }
  };


  // =========================
  // LOAD BOOKINGS
  // =========================

  useEffect(() => {
    fetchBookings();
  }, []);


  // =========================
  // DASHBOARD
  // =========================

  return (
    <section className="admin-bookings">

      {/* ADMIN HEADER */}

      <div className="admin-header">

        <div>

          <p className="admin-label">
            DE-SOFEX ADMIN
          </p>

          <h1>
            Booking Dashboard
          </h1>

          <p>
            View and manage plumbing service requests
            submitted by customers.
          </p>

        </div>

        <button
          onClick={fetchBookings}
          className="refresh-btn"
        >
          Refresh Bookings
        </button>

      </div>


      {/* DASHBOARD STATISTICS */}

      <div className="dashboard-stats">

        <div className="stat-card">

          <span className="stat-icon">
            📋
          </span>

          <div>

            <p>
              Total Bookings
            </p>

            <h2>
              {bookings.length}
            </h2>

          </div>

        </div>


        <div className="stat-card">

          <span className="stat-icon">
            ⏳
          </span>

          <div>

            <p>
              Pending Bookings
            </p>

            <h2>
              {
                bookings.filter(
                  (booking) =>
                    !booking.status ||
                    booking.status === "Pending"
                ).length
              }
            </h2>

          </div>

        </div>


        <div className="stat-card">

          <span className="stat-icon">
            🚨
          </span>

          <div>

            <p>
              Emergency Requests
            </p>

            <h2>
              {
                bookings.filter(
                  (booking) =>
                    booking.emergency?.toLowerCase() === "yes"
                ).length
              }
            </h2>

          </div>

        </div>


        <div className="stat-card">

          <span className="stat-icon">
            🔧
          </span>

          <div>

            <p>
              Services Requested
            </p>

            <h2>
              {
                new Set(
                  bookings.map(
                    (booking) => booking.service
                  )
                ).size
              }
            </h2>

          </div>

        </div>

      </div>


      {/* BOOKINGS */}

      {loading ? (

        <p className="loading-message">
          Loading bookings...
        </p>

      ) : bookings.length === 0 ? (

        <p className="empty-message">
          No bookings have been submitted yet.
        </p>

      ) : (

     <div className="bookings-container">
       {bookings.map((booking) => (

       <div className="booking-card"key={booking.id}>

              {/* BOOKING HEADER */}
              
    <div className="booking-card-header"><div>
    <h2>{booking.fullName}</h2>
    <span>{booking.service}</span>
    {booking.emergency?.toLowerCase() === "yes" && (
      <span className="emergency-badge">
        🚨 EMERGENCY
      </span>
    )}
  </div>

  <span className="booking-status">
    {booking.status || "Pending"}
  </span>

         </div>

              
              {/* BOOKING DETAILS */}

              <div className="booking-details">

                <div>
                  <strong>
                    Phone
                  </strong>

                  <p>
                    {booking.phone}
                  </p>
                </div>


                <div>
                  <strong>
                    Email
                  </strong>

                  <p>
                    {booking.email || "Not provided"}
                  </p>
                </div>


                <div>
                  <strong>
                    Address
                  </strong>

                  <p>
                    {booking.address}
                  </p>
                </div>


                <div>
                  <strong>
                    Problem
                  </strong>

                  <p>
                    {booking.problem}
                  </p>
                </div>


                <div>
                  <strong>
                    Date
                  </strong>

                  <p>
                    {booking.date}
                  </p>
                </div>


                <div>
                  <strong>
                    Time
                  </strong>

                  <p>
                    {booking.time}
                  </p>
                </div>


                <div>
                  <strong>
                    Emergency
                  </strong>

                  <p>
                    {booking.emergency}
                  </p>
                </div>

              </div>


              {/* BOOKING ACTIONS */}

              <div className="booking-actions">

                <button
                  className="confirm-btn"
                  onClick={() =>
                    updateStatus(
                      booking.id,
                      "Confirmed"
                    )
                  }
                >
                  Confirm
                </button>


                <button
                  className="complete-btn"
                  onClick={() =>
                    updateStatus(
                      booking.id,
                      "Completed"
                    )
                  }
                >
                  Mark Completed
                </button>


                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteBooking(booking.id)
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  );
}

export default AdminBookings;