import { styles } from "../styles/styles";

export default function Navbar({
  currentUser,
  setLoginOpen,
  setSignupOpen,
  logout,
  cart,
}) {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Bean Bliss ☕</h1>

      <div>
        <a href="#about" style={styles.a}>
          About
        </a>

        <a href="#menu" style={styles.a}>
          Menu
        </a>

        <a href="#gallery" style={styles.a}>
          Gallery
        </a>

        <a href="#contact" style={styles.a}>
          Contact
        </a>

        {!currentUser ? (
          <>
            <button
              style={styles.smallBtn}
              onClick={() => setLoginOpen(true)}
            >
              Login
            </button>

            <button
              style={styles.smallBtn}
              onClick={() => setSignupOpen(true)}
            >
              Signup
            </button>
          </>
        ) : (
          <>
            <span style={{ marginLeft: "15px" }}>
              👋 {currentUser.username}
            </span>
           <a
  href="#cart"
  style={{
    textDecoration: "none",
    marginLeft: "20px",
    position: "relative",
    fontSize: "26px",
  }}
>
  🛒

  {cart.length > 0 && (
    <span
      style={{
        position: "absolute",
        top: "-10px",
        right: "-12px",
        background: "crimson",
        color: "white",
        borderRadius: "50%",
        width: "22px",
        height: "22px",
        fontSize: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
      }}
    >
      {cart.length}
    </span>
  )}
</a>
            <button
              style={styles.smallBtn}
              onClick={logout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}