export const styles = {

   nav: {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 40px",
  background: "#111",
  color: "white",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 1000,
},
  logo: {
    fontSize: "28px",
  },
a: {
  color: "white",
  marginLeft: "20px",
  textDecoration: "none",
  fontWeight: "500",
  transition: "0.3s",
},
  hero: {
    display: "flex",
    justifyContent: "space-between",
    padding: "60px",
    alignItems: "center",
    gap: "30px",
    flexWrap: "wrap",
  },

  h1: {
    fontSize: "45px",
  },

   btn: {
  padding: "12px 22px",
  background: "linear-gradient(135deg,#ffb74d,#ff9800)",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  marginTop: "10px",
  color: "white",
  fontWeight: "bold",
  transition: "0.3s",
},

  smallBtn: {
    marginLeft: "10px",
    padding: "10px 16px",
    border: "none",
    background: "linear-gradient(135deg,#ffb74d,#ff9800)",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  heroImg: {
    width: "45%",
    borderRadius: "15px",
  },

  section: {
  padding: "60px",
  textAlign: "center",
  scrollMarginTop: "90px",
},

  row: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  menuCard: {
  background: "white",
  padding: "15px",
  borderRadius: "20px",
  width: "230px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  transition: "0.3s",
  cursor: "pointer",
},

  menuImg: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  galleryImg: {
  width: "260px",
  height: "220px",
  objectFit: "cover",
  borderRadius: "18px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
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
  },

   modal: {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "20px",
  width: "320px",
  color: "#111",
},

  input: {
  width: "100%",
  padding: "12px",
  boxSizing: "border-box",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  marginBottom: "12px",
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
  background: "rgba(255,255,255,0.1)",
  padding: "25px",
  borderRadius: "18px",
},

textarea: {
  width: "100%",
  padding: "12px",
  boxSizing: "border-box",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  marginBottom: "12px",
  fontSize: "15px",
  minHeight: "120px",
  resize: "none",
},
  footer: {
    textAlign: "center",
    padding: "15px",
    background: "black",
    color: "white",
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
  gap: "40px",
  flexWrap: "wrap",
  marginTop: "30px",
},

aboutImg: {
  width: "350px",
  borderRadius: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
},

aboutText: {
  maxWidth: "500px",
  textAlign: "left",
  lineHeight: "1.8",
  fontSize: "18px",
},
};