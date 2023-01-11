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
          >yarn start
            X
          </Button>
        </div>
        <div className="title">
          <header style={header}>Submit text poll</header>
        </div>
        
        <div className="body">
          <form>
            <div>
                <label>
                    <div>Title</div>
                    <input type="text" name="title"></input>
                </label>

                <label>
                    <div>Description</div>
                    <textarea name="description"></textarea>
                </label>

                <label>
                    <div>Information Link (optional)</div>
                    <input type="text" name="informationLink" ></input>
                </label>
            </div>
          </form>
        </div>
        <div className="footer">
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;