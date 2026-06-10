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
      <h1 style={styles.logo}>
        Bean Bliss <span style={{ fontSize: "50px" }}>☕︎</span>
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          flexWrap: "nowrap",
        }}
      >
        <a href="#about" style={styles.a} className="nav-link">
          About
        </a>

        <a href="#menu" style={styles.a} className="nav-link">
          Menu
        </a>

        <a href="#gallery" style={styles.a} className="nav-link">
          Gallery
        </a>

        <a href="#contact" style={styles.a} className="nav-link">
          Contact
        </a>

        {!currentUser ? (
          <>
            <button
              style={styles.authBtn}
              onClick={() => setLoginOpen(true)}
            >
              Login
            </button>

            <button
              style={styles.authBtn}
              onClick={() => setSignupOpen(true)}
            >
              Signup
            </button>
          </>
        ) : (
          <>
            <span
              style={{
                marginLeft: "15px",
                padding: "8px 16px",
                background: "rgba(255,255,255,0.08)",
                borderRadius: "30px",
                color: "#fff",
                fontWeight: "500",
              }}
            >
              👋 {currentUser.username}
            </span>
            <a
              href="#cart"
              style={{
                textDecoration: "none",
                marginLeft: "15px",
                position: "relative",

                width: "50px",
                height: "50px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                borderRadius: "50%",

                background: "rgba(255,255,255,0.08)",

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
              onClick={logout}
              style={{
                padding: "11px 22px",
                borderRadius: "50px",
                border: "none",
                background: "#d4a373",
                color: "#4e342e",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all .3s ease",
                boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}