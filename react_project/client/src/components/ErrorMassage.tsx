import React, { FC } from "react";
import "./ERROR.css";

interface ErrorModalProps {
  message: string;
  onClose: () => void;
}

const ErrorModal: FC<ErrorModalProps> = ({ message, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorModal;
