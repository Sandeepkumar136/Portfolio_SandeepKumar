import React from "react";

const Complitation = ({ openDialog, setOpenDialog, icon, text }) => {
  const handleDialogueClick = () => {
    setOpenDialog(false);
  };

  if (!openDialog) return null; // If false, hide

  return (
    <div className="submit-dialogue" onClick={handleDialogueClick}>
      <div className="submit-icon">{icon}</div>
      <div className="text-submit">{text}</div>
    </div>
  );
};

export default Complitation;