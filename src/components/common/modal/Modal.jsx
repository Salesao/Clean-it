import "./Modal.css";

export default function Modal({ status, setActive, children }) {

  return (
    <div
      className={status ? "modalLogin active" : "modalLogin"}
      // onClick={() => {
      //   setActive(false);
      //   document.querySelector("body").style = "";
      // }}
    >
      <div
        className={status ? "modal_content active position-relative" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
        style={{ padding: "40px" }}
      >
        {children}
      </div>
    </div>
  );
}
