import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "./styles/styles";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {

  // ---------------- AUTH ----------------
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("cafe-users")) || [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("current-user")) || null;
  });

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [signupForm, setSignupForm] = useState({
    username: "",
    password: "",
  });

  // ---------------- BOOKING ----------------
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
  });

  const [selectedTable, setSelectedTable] = useState("");

  const availableTables = [
    "Table 1",
    "Table 2",
    "Table 3",
    "Table 4",
    "VIP Table",
  ];

  const [bookings, setBookings] = useState(() => {
    return JSON.parse(localStorage.getItem("bookings")) || [];
  });

  // ---------------- TOAST ----------------
  const [toast, setToast] = useState("");

  // ---------------- CART ----------------
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  // ---------------- ORDERS ----------------
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [];
  });
  // ---------------- CONTACT FORM ----------------
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messages, setMessages] = useState(() => {
    return JSON.parse(localStorage.getItem("messages")) || [];
  });

  // ---------------- MENU ----------------
  const menuItems = [
    {
      name: "Cappuccino",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=300&q=80",
    },

    {
      name: "Cold Coffee",
      price: 100,
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=60",
    },

    {
      name: "Latte",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80",
    },

    {
      name: "Mocha",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=300&q=80",
    },

    {
      name: "Chocolate Brownie",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=300&q=80",
    },

    {
      name: "Cheese Cake",
      price: 220,
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=300&q=80",
    },

    {
      name: "Ice Cream Sundae",
      price: 160,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=300&q=80",
    },
  ];
  const filteredItems = menuItems.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);

  // ---------------- SAVE USERS ----------------
  useEffect(() => {
    localStorage.setItem("cafe-users", JSON.stringify(users));
  }, [users]);

  // ---------------- SAVE ORDERS ----------------
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // ---------------- SAVE BOOKINGS ----------------
  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);
  // ---------------- SAVE CONTACT MESSAGES ----------------
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  // ---------------- LOGIN ----------------
  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) =>
        u.username === loginForm.username &&
        u.password === loginForm.password
    );

    if (!user) {
      alert("Invalid username or password ❌");
      return;
    }

    setCurrentUser(user);
    localStorage.setItem("current-user", JSON.stringify(user));

    alert("Login Successful 🎉");

    setLoginForm({
      username: "",
      password: "",
    });

    setLoginOpen(false);
  };

  // ---------------- SIGNUP ----------------
  const handleSignup = (e) => {
    e.preventDefault();

    if (!signupForm.username || !signupForm.password) {
      alert("Please fill all fields ❗");
      return;
    }

    const exists = users.find(
      (u) => u.username === signupForm.username
    );

    if (exists) {
      alert("User already exists ❌");
      return;
    }

    const newUser = {
      username: signupForm.username,
      password: signupForm.password,
    };

    setUsers([...users, newUser]);

    alert("Account Created Successfully 🎉");

    setSignupForm({
      username: "",
      password: "",
    });

    setSignupOpen(false);
    setLoginOpen(true);
  };

  // ---------------- LOGOUT ----------------
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("current-user");
    setCart([]);
    document
  .getElementById("orders")
  ?.scrollIntoView({ behavior: "smooth" });
  };

  // ---------------- INPUT CHANGE ----------------
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e) => {
    setSignupForm({
      ...signupForm,
      [e.target.name]: e.target.value,
    });
  };
  // ---------------- CONTACT INPUT CHANGE ----------------
  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  // ---------------- BOOK TABLE ----------------
  // ---------------- BOOK TABLE ----------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("Please login first 🔐");
      setLoginOpen(true);
      return;
    }

    if (
      !form.name ||
      !form.phone ||
      !form.date ||
      !form.time ||
      !selectedTable
    ) {
      alert("Please fill all fields ❗");
      return;
    }

    // PHONE VALIDATION
    if (!/^[0-9]{10}$/.test(form.phone)) {
      alert("Enter valid 10 digit phone number 📱");
      return;
    }

    // DATE VALIDATION
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(form.date);

    if (selectedDate < today) {
      alert("Past dates are not allowed ❌");
      return;
    }

    // TIME VALIDATION
    const now = new Date();

    // If booking for today, check current time
    if (selectedDate.toDateString() === now.toDateString()) {

      const currentTime =
        now.getHours() * 60 + now.getMinutes();

      const [hours, minutes] = form.time.split(":");

      const selectedTime =
        parseInt(hours) * 60 + parseInt(minutes);

      if (selectedTime <= currentTime) {
        alert("Please select future time ⏰");
        return;
      }
    }

    // CHECK TABLE ALREADY BOOKED
    const alreadyBooked = bookings.find(
      (b) =>
        b.table === selectedTable &&
        b.date === form.date &&
        b.time === form.time
    );

    if (alreadyBooked) {
      alert("This table is already booked at that time ❌");
      return;
    }

    const newBooking = {
      username: currentUser.username,
      name: form.name,
      phone: form.phone,
      table: selectedTable,
      date: form.date,
      time: form.time,
      bookedAt: new Date().toLocaleString(),
    };

    setBookings([...bookings, newBooking]);

    alert(`🎉 ${selectedTable} booked successfully`);

    setForm({
      name: "",
      phone: "",
      date: "",
      time: "",
    });

    setSelectedTable("");

    setOpen(false);
    document
  .getElementById("bookings")
  ?.scrollIntoView({ behavior: "smooth" });
  };
  // ---------------- CONTACT FORM SUBMIT ----------------
  const handleContactSubmit = (e) => {
    e.preventDefault();

    if (
      !contactForm.name ||
      !contactForm.email ||
      !contactForm.message
    ) {
      alert("Please fill all contact fields ❗");
      return;
    }

    const newMessage = {
      ...contactForm,
      date: new Date().toLocaleString(),
    };

    setMessages([newMessage, ...messages]);

    alert("Message Sent Successfully 🎉");

    setContactForm({
      name: "",
      email: "",
      message: "",
    });
  };

  // ---------------- ADD TO CART ----------------
  const addToCart = (item) => {

    if (!currentUser) {
      alert("Please login first 🔐");
      setLoginOpen(true);
      return;
    }

    setCart((prev) => {
      const exists = prev.find((c) => c.name === item.name);

      if (exists) {
        return prev.map((c) =>
          c.name === item.name
            ? { ...c, qty: c.qty + 1 }
            : c
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });

    setToast(`${item.name} added to cart 🛒`);

    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  // ---------------- QUANTITY ----------------
  const increaseQty = (name) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (name) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (name) => {
    setCart((prev) =>
      prev.filter((item) => item.name !== name)
    );
  };

  // ---------------- TOTAL ----------------
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ---------------- CHECKOUT ----------------
  const checkout = () => {

    if (!currentUser) {
      alert("Please login first 🔐");
      setLoginOpen(true);
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty ❗");
      return;
    }

    const newOrder = {
      username: currentUser.username,
      items: [...cart],
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    setOrders([newOrder, ...orders]);

    alert("Order Placed Successfully 🎉");

    setCart([]);
  };

  // ---------------- USER ORDERS ----------------
  const userOrders = orders.filter(
    (o) => o.username === currentUser?.username
  );

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        scrollBehavior: "smooth",
        background: "#f7f4f1",
padding: "20px",
      }}
    >

    <Navbar
  currentUser={currentUser}
  setLoginOpen={setLoginOpen}
  setSignupOpen={setSignupOpen}
  logout={logout}
  cart={cart}
/>
      {/* HERO */}
      <motion.section
  className="hero"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <div className="hero-overlay">

    <motion.div
      className="hero-content"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >

      <p className="hero-tag">
        Premium Cafe Experience ☕
      </p>

      <h1>
        Fresh Coffee <br />
        Cozy Moments
      </h1>

      <p className="hero-desc">
        Discover handcrafted coffee, delicious desserts,
        and the perfect ambience to relax, work,
        and create memories.
      </p>

      <div className="hero-buttons">

        <a href="#menu">
          <button className="hero-btn">
            Explore Menu
          </button>
        </a>

        <a href="#contact">
          <button className="hero-btn-outline">
            Book Table
          </button>
        </a>

      </div>

    </motion.div>
  </div>
</motion.section>
      {/* ABOUT */}
      <motion.section
  id="about"
  style={{
    ...styles.section,
    background: "#fffaf5",
    marginBottom: "50px",
  }}>
       <h2 className="section-title">
  About Bean Bliss ☕
</h2>
        <div style={styles.aboutBox}>

          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=300&q=80"
            style={styles.aboutImg}
          />

          <div style={styles.aboutText}>
            <p>
              Welcome to Bean Bliss Cafe — a cozy place
              where coffee meets comfort ❤️
            </p>

            <p>
              We serve freshly brewed coffee, delicious
              desserts, and a peaceful ambience for
              friends, families, and coffee lovers.
            </p>

            <p>
              Our mission is to make every visit special
              with premium quality drinks and warm
              hospitality ☕✨
            </p>
          </div>

        </div>
      </motion.section>

      {/* MENU */}
      <motion.section
  id="menu"
  style={{
    ...styles.section,
    background: "#fdf6f0",
  }}>
       <center><h2>Menu ☕🍰</h2></center>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
    marginTop: "20px",
  }}
>
  <input
    type="text"
    placeholder="Search coffee..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      padding: "12px 20px",
      width: "300px",
      maxWidth: "90%",
      borderRadius: "30px",
      border: "2px solid #6f4e37",
      outline: "none",
      fontSize: "16px",
    }}
  />
</div>

        <div style={styles.row}>
         {filteredItems.map((item, i) => (
            <div
  key={i}
  style={styles.menuCard}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";

    e.currentTarget.style.boxShadow =
      "0 15px 35px rgba(0,0,0,0.18)";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";

    e.currentTarget.style.boxShadow =
      "0 10px 25px rgba(0,0,0,0.1)";
  }}
>
              <img
                style={styles.menuImg}
                src={item.image}
              />

              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

              <button
                style={styles.smallBtn}
                onClick={() => addToCart(item)}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </motion.section>
      {/* GALLERY */}
      <section
        id="gallery"
        style={{
          ...styles.section,
          background: "#fff8f0",
        }}
      >
        <h2>Cafe Gallery 📸</h2>

        <div style={styles.row}>

          <img
            style={styles.galleryImg}
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80"
          />

          <img
            style={styles.galleryImg}
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=300&q=80"
          />

          <img
            style={styles.galleryImg}
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=300&q=80"
          />

          <img
            style={styles.galleryImg}
            src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=300&q=80"
          />

        </div>
      </section>

      {/* CART */}
      {/* CART */}
<section
  id="cart"
  style={{
    ...styles.section,
    background: "linear-gradient(135deg, #f8f5f2, #efe7df)",
  }}
>
  <h2>Your Cart 🛒</h2>

  {cart.length === 0 ? (
    <div style={{ textAlign: "center", padding: "40px 10px" }}>
  <div style={{ fontSize: "50px" }}>🛒</div>
  <h3 style={{ marginTop: "10px" }}>Your cart is empty</h3>
  <p style={{ color: "#777" }}>
    Add some delicious items from menu ☕
  </p>
</div>
  ) : (
    <>
      {cart.map((item, i) => (

        <div className="cart-card" key={i}>

         <img
  src={item.image}
  className="cart-img"
  alt={item.name}
/>

          <div className="cart-details">

            <h3>{item.name}</h3>

            <p>
              ₹{item.price} × {item.qty}
            </p>

            <h4>
              ₹{item.price * item.qty}
            </h4>

          </div>

          <div className="qty-controls">

            <button
              className="qty-btn"
              onClick={() => decreaseQty(item.name)}
            >
              -
            </button>

            <span>{item.qty}</span>

            <button
              className="qty-btn"
              onClick={() => increaseQty(item.name)}
            >
              +
            </button>

            <button
              className="delete-btn"
              onClick={() => removeItem(item.name)}
            >
              ✕
            </button>

          </div>

        </div>

      ))}

      <div style={styles.totalBox}>
        <h2>Total Price: ₹{totalPrice}</h2>

        <button
          onClick={checkout}
          style={styles.btn}
        >
          Checkout
        </button>
        <button
  onClick={() => setCart([])}
  style={{
    marginLeft: "10px",
    background: "#d32f2f",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "10px",
    cursor: "pointer",
  }}
>
  Clear Cart
</button>
      </div>
    </>
  )}
</section>
      {/* ORDERS */}
<section
  id="bookings"
  style={{
    ...styles.section,
    background: "linear-gradient(135deg, #f3ede7, #e8ddd3)",
  }}
>
        <h2>Your Orders 📦</h2>

        {!currentUser ? (
          <p>Please login to view orders.</p>
        ) : userOrders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          userOrders.map((o, i) => (
            <div key={i} style={styles.orderBox}>

              <h3 style={{ marginBottom: "10px" }}>
                Order #{i + 1}
              </h3>

              <p>
                <b>Order Date:</b> {o.date}
              </p>

              {o.items.map((item, idx) => (
                <div
                  key={idx}
                  style={styles.orderItem}
                >
                  <img
                    src={item.image}
                    style={styles.orderImg}
                  />

                  <div>
                    <p>
                      <b>{item.name}</b>
                    </p>

                    <p>
                      ₹{item.price} × {item.qty} =
                      ₹{item.price * item.qty}
                    </p>
                  </div>
                </div>
              ))}

              <h3 style={{ marginTop: "15px" }}>
                Total: ₹{o.total}
              </h3>

            </div>
          ))
        )}
      </section>

      {/* BOOKINGS */}
      <section
  id="bookings"
  style={styles.section}
>
        <h2>Your Table Bookings 🍽️</h2>

        {!currentUser ? (
          <p>Please login first.</p>
        ) : bookings.filter(
          (b) => b.username === currentUser.username
        ).length === 0 ? (
          <p>No bookings yet.</p>
        ) : (
          bookings
            .filter(
              (b) =>
                b.username === currentUser.username
            )
            .map((b, i) => (
              <div key={i} style={styles.bookingCard}>

                <h3>{b.table}</h3>

                <p>
                  <b>Name:</b> {b.name}                </p>

                <p>
                  <b>Phone:</b> {b.phone}
                </p>

                <p>
                  <b>Date:</b> {b.date}
                </p>

                <p>
                  <b>Time:</b> {b.time}
                </p>

                <p>
                  <b>Booked At:</b> {b.bookedAt}
                </p>

              </div>
            ))
        )}
      </section>

      {/* CONTACT */}
     <section
  id="contact"
  style={{
    ...styles.section,
        background: "linear-gradient(135deg, #e6d3c5, #d7b8a3)",
    color: "#3e2723",
  }}
>
        <h2>Visit Us 📍</h2>

        <p>Email: beanbliss@gmail.com</p>
        <p>Phone: +91 9876543210</p>

        <button
          style={styles.btn}
          onClick={() => setOpen(true)}
        >
          Book Table
        </button>

        {/* CONTACT FORM */}
        <div style={styles.contactBox}>
          <h2>Contact Us ✉️</h2>

          <form onSubmit={handleContactSubmit}>
            <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="Your Name"
              value={contactForm.name}
              onChange={handleContactChange}
            />

            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={handleContactChange}
            />

            <textarea
              style={styles.textarea}
              name="message"
              placeholder="Your Message"
              value={contactForm.message}
              onChange={handleContactChange}
            />

            <button
              type="submit"
              style={styles.btn}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      {/* BOOK TABLE */}
      {open && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2>Book Table 🍽️</h2>

            <form onSubmit={handleSubmit}>

              <input
                style={styles.input}
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
              />

              <input
                style={styles.input}
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
              />

              <input
                style={styles.input}
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
              />

              <input
                style={styles.input}
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
              />

              <select
                style={styles.input}
                value={selectedTable}
                onChange={(e) =>
                  setSelectedTable(e.target.value)
                }
              >
                <option value="">
                  Select Table
                </option>

                {availableTables.map((table, i) => (
                  <option key={i}>
                    {table}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                style={styles.btn}
              >
                Confirm Booking
              </button>

              <button
                type="button"
                style={styles.cancelBtn}
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      {/* LOGIN MODAL */}
      {loginOpen && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2>Login 🔐</h2>

            <form onSubmit={handleLogin}>

              <input
                style={styles.input}
                type="text"
                name="username"
                placeholder="Username"
                value={loginForm.username}
                onChange={handleLoginChange}
              />

              <input
                style={styles.input}
                type="password"
                name="password"
                placeholder="Password"
                value={loginForm.password}
                onChange={handleLoginChange}
              />

              <button
                type="submit"
                style={styles.btn}
              >
                Login
              </button>

              <button
                type="button"
                style={styles.cancelBtn}
                onClick={() => setLoginOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* SIGNUP MODAL */}
      {signupOpen && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h2>Create Account ✨</h2>

            <form onSubmit={handleSignup}>

              <input
                style={styles.input}
                type="text"
                name="username"
                placeholder="Username"
                value={signupForm.username}
                onChange={handleSignupChange}
              />

              <input
                style={styles.input}
                type="password"
                name="password"
                placeholder="Password"
                value={signupForm.password}
                onChange={handleSignupChange}
              />

              <button
                type="submit"
                style={styles.btn}
              >
                Signup
              </button>

              <button
                type="button"
                style={styles.cancelBtn}
                onClick={() => setSignupOpen(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* TOAST */}
     {toast && (
  <div
    style={{
      position: "fixed",
      top: "30px",
      right: "30px",
      background: "linear-gradient(135deg,#6f4e37,#3e2723)",
      color: "white",
      padding: "16px 24px",
      borderRadius: "14px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      zIndex: 9999,
      fontWeight: "600",
      animation: "slideIn 0.4s ease",
    }}
  >
    ✅ {toast}
  </div>
)}

<button
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  style={{
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    background: "linear-gradient(135deg,#5c7cfa,#364fc7)",
    color: "white",
    fontSize: "22px",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    zIndex: 999,
  }}
>
  ↑
</button>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Bean Bliss Cafe ☕ | Made with ❤️
      </footer>
    </div>
  );
}




