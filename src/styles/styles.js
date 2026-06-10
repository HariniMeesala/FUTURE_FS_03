export const styles = {

 nav: {
  position: "fixed",
  top: 0,
  left: 0,

  width: "100%",
  height: "80px",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "0 24px",  

  zIndex: 9999,

  background: "rgba(44,24,16,0.95)",
  backdropFilter: "blur(20px)",

  boxSizing: "border-box", 

  borderBottom: "1px solid rgba(255,255,255,0.08)",
},
  logo: {
    fontSize: "32px",
    fontWeight: "800",

    background:
      "linear-gradient(135deg,#f8e6c1,#d4a373)",

    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",

    letterSpacing: "1px",

    cursor: "pointer",

    textShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },

  a: {
    color: "#f5e6d3",

    textDecoration: "none",

    marginLeft: "28px",

    fontSize: "17px",

    fontWeight: "500",

    position: "relative",

    transition: "all .3s ease",
  },


  hero: {
    minHeight: "95vh",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    background:
      "linear-gradient(135deg,#fdf8f3,#efe3d4)",

    padding: "100px 60px",
  },
  h1: {
    fontSize: "58px",
    color: "#222",
    lineHeight: "1.2",
    marginBottom: "20px",
  },

  btn: {
    padding: "14px 30px",

    background:
      "linear-gradient(135deg,#6f4e37,#4e342e)",

    color: "#fff",

    border: "none",
    borderRadius: "50px",

    cursor: "pointer",

    fontWeight: "700",

    boxShadow:
      "0 10px 25px rgba(111,78,55,.3)",

    transition: "all .3s ease",
  },

  smallBtn: {
    marginLeft: "12px",

    padding: "11px 22px",

    border: "none",

    borderRadius: "50px",

    background:
      "linear-gradient(135deg,#6f4e37,#4e342e)",

    color: "#fff",

    cursor: "pointer",

    fontWeight: "700",

    boxShadow:
      "0 8px 20px rgba(111,78,55,.35)",

    transition: ".3s",
  },
  heroImg: {
    width: "45%",
    borderRadius: "30px",

    boxShadow:
      "0 20px 40px rgba(0,0,0,0.15)",
  },

  section: {
    padding: "90px 60px",

    margin: "40px auto",

    maxWidth: "1400px",

    background: "#fff",

    borderRadius: "30px",

    boxShadow:
      "0 15px 40px rgba(0,0,0,0.06)",

    textAlign: "center",

    scrollMarginTop: "100px",
  },

  row: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  menuCard: {
    width: "280px",

    background: "white",

    borderRadius: "24px",

    overflow: "hidden",

    boxShadow:
      "0 15px 35px rgba(0,0,0,0.08)",

    transition: "all .3s ease",

    cursor: "pointer",
  },

  menuImg: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
  },
  galleryImg: {
    width: "300px",
    height: "240px",

    objectFit: "cover",

    borderRadius: "24px",

    boxShadow:
      "0 12px 25px rgba(0,0,0,0.15)",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "10px auto",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    maxWidth: "700px",
  },

  cartImg: {
    width: "70px",
    height: "70px",
    borderRadius: "8px",
    objectFit: "cover",
  },

  qtyBox: {
    display: "flex",
    alignItems: "center",
  },

  qtyBtn: {
    padding: "6px 12px",
    border: "none",
    borderRadius: "6px",
    background: "#ff9800",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  deleteBtn: {
    marginLeft: "10px",
    padding: "6px 10px",
    border: "none",
    borderRadius: "6px",
    background: "#ef5350",
    color: "white",
    cursor: "pointer",
  },

  totalBox: {
    marginTop: "20px",
  },

  bookingCard: {
    background: "white",
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "18px",
    textAlign: "left",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    borderLeft: "6px solid #ff9800",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  modal: {
    background: "#fff",

    padding: "35px",

    width: "360px",

    borderRadius: "24px",

    boxShadow:
      "0 20px 50px rgba(0,0,0,0.25)",
  },

  input: {
    width: "100%",
    padding: "14px",

    borderRadius: "12px",

    border: "1px solid #ddd",

    marginBottom: "15px",

    fontSize: "15px",
  },

  toast: {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "#111",
    color: "white",
    padding: "14px 22px",
    borderRadius: "12px",
    zIndex: 999,
  },

  cancelBtn: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    border: "none",
    borderRadius: "10px",
    background: "#ef5350",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },
  contactBox: {
    maxWidth: "500px",
    margin: "40px auto 0",

    background:
      "rgba(255,255,255,0.08)",

    backdropFilter: "blur(12px)",

    border:
      "1px solid rgba(255,255,255,0.15)",

    padding: "30px",

    borderRadius: "22px",

    boxShadow:
      "0 10px 30px rgba(0,0,0,0.25)",
  },

  textarea: {
    width: "100%",
    minHeight: "140px",

    padding: "14px",

    borderRadius: "12px",

    border: "1px solid #ddd",

    resize: "none",

    fontSize: "15px",
  },
  footer: {
    background: "rgba(44,24,16,0.88)",
    color: "#f5e6d3",

    padding: "40px 20px",
    marginTop: "60px",
    textAlign: "center",
    fontSize: "15px",

    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },
  orderBox: {
    border: "1px solid #eee",
    margin: "15px auto",
    padding: "20px",
    maxWidth: "550px",
    borderRadius: "18px",
    textAlign: "left",
    background: "white",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },

  orderItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginTop: "15px",
    paddingBottom: "10px",
    borderBottom: "1px solid #eee",
  },

  orderImg: {
    width: "60px",
    height: "60px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  aboutBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    flexWrap: "wrap",

    marginTop: "40px",
    padding: "30px",

    background: "rgba(255, 255, 255, 0.6)",
    backdropFilter: "blur(10px)",

    borderRadius: "25px",
    border: "1px solid rgba(212, 163, 115, 0.3)",

    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
  },

  aboutImg: {
    width: "360px",
    borderRadius: "20px",

    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    transform: "scale(1)",
    transition: "0.3s ease",
  },

  aboutText: {
    maxWidth: "520px",
    textAlign: "left",
    lineHeight: "1.9",
    fontSize: "18px",
    color: "#3e2723",
  },


  authBtn: {
    marginLeft: "12px",

    padding: "11px 22px",

    borderRadius: "50px",

    border: "none",

    background:
      "#d4a373",

    color: "#4e342e",

    fontWeight: "700",

    cursor: "pointer",

    transition: "all .3s ease",

    boxShadow:
      "0 5px 15px rgba(0,0,0,0.08)",
  },
  contactCard: {
    background: "rgba(255,255,255,0.6)",
    padding: "20px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    backdropFilter: "blur(10px)",
  },

  mapBox: {
    width: "100%",
    maxWidth: "500px",
    height: "320px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },

};


