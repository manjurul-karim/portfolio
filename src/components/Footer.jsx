import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 p-4 text-white text-center">
      <div>
        <p className="text-xs">
          &copy; {currentYear} - All rights reserved by <span className="font-signature">Manjurul Karim</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
