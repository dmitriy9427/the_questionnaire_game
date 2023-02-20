import React, { useState } from "react";

function Modal(props, { children }) {
  const [open, setOpen] = useState(false);
  return (
    // Открытие модального окна с анимацией
    <div className="popup">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        ✨ Открыть окно
      </button>
      <div className={`overlay animated ${open ? "show" : ""}`}>
        <div className="modal">
          <svg
            onClick={() => setOpen(false)}
            height="200"
            viewBox="0 0 200 200"
            width="200"
          >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <h3>{props.title}</h3>
          <img
            src="https://i.gifer.com/embedded/download/NCXT.gif"
            alt="Губка Боб"
          />
        </div>
      </div>
    </div>

    // =======================================================================================

    // Открытие модального окна без анимации
    // <div className="popup">
    //   <button onClick={() => setOpen(true)} className="open-modal-btn">
    //     ✨ Открыть окно
    //   </button>
    //   {open && (<div className='overlay'>
    //     <div className="modal">
    //       <svg
    //         onClick={() => setOpen(false)}
    //         height="200"
    //         viewBox="0 0 200 200"
    //         width="200"
    //       >
    //         <title />
    //         <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
    //       </svg>
    //       <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
    //     </div>
    //   </div>)}
    // </div>
  );
}

export default Modal;
