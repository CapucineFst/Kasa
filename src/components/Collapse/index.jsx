import "./collapse.scss";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";

export default function Collapse({ title, children }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="collapse">
      <h3 className="collapse_title" onClick={() => setToggle(!toggle)}>
        {title}
        <img
          className={toggle ? "arrow arrow_up" : "arrow arrow_down"}
          src={arrow}
          alt="show content"
        />
      </h3>
      <div className={toggle ? "collapse_content" : "collapse_content_hidden"}>
        <div>{children}</div>
      </div>
    </div>
  );
}
