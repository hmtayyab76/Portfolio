import React, { useState } from "react";

function Footer() {
  const [num, setnum] = useState(0);
  function ff() {
    setnum(num + 1);
  }
  return (
    <>
      <div onClick={ff}>Plus</div>
      <p>{num}</p>
    </>
  );
}
export default Footer;
