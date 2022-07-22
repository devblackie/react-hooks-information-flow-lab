import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h2>Shopster</h2>
      <button onClick={props.onDarkModeClick}>
        {props.isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}   

export default Header;