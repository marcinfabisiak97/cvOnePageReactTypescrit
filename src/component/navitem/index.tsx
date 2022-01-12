import React from "react";

const NavItem = (props) => {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
  return (
    <li onClick={() => scrollToRef(props.linker)}>
      <p>{props.name}</p>
    </li>
  );
};
export default NavItem;
