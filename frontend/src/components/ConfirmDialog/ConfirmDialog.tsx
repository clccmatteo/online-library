import React from "react";
import "./ConfirmDialog.css";

interface ConfirmDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  message,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
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
}
