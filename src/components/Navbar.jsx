import { styles } from "../styles/styles";

export default function Navbar({
  currentUser,
  setLoginOpen,
  setSignupOpen,
  logout,
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