import React from "react";
import "./Modal.css";
import { Button } from '@chakra-ui/react'

const header = {
    fontWeight: 'bold',
    fontSize: '30px'
}

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <Button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </Button>
        </div>
        <div className="title">
          <header style={header}>Submit text poll</header>
        </div>
        
        <div className="body">
          <form>
            <div>
                <div>Title</div>
                <input type="text" name="title"></input>

                <div>Description</div>
                <textarea name="description" cols="23"></textarea>

                <div>Information Link (optional)</div>
                <input type="text" name="informationLink" ></input>
            </div>
          </form>
        </div>

        <div className="footer">
          <Button onClick={() => {
              setOpenModal(false);
              alert("Poll submitted!")
            }}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;