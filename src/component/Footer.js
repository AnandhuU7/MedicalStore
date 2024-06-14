import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#888080",
    color: "white",
    padding: "5px",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Your Website Name</p>
    </footer>
  );
};

export default Footer;
