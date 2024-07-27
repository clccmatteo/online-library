import React from "react";

interface ConfirmDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="confirm-dialog">
      <div className="confirm-dialog-content">
        <p>{message}</p>
        <div className="confirm-dialog-buttons">
          <button className="btn btn--confirm" onClick={onConfirm}>
            Sì
          </button>
          <button className="btn btn--cancel" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
