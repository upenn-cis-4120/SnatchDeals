import React from 'react';

interface CircularButtonProps {
  icon: React.ReactNode; // The icon to display (can be any JSX element)
  onClick: () => void; // Handler for button click
  backgroundColor?: string; // Optional: Button background color
  size?: number; // Optional: Size of the button (width and height)
}

const CircularButton: React.FC<CircularButtonProps> = ({
  icon,
  onClick,
  backgroundColor = "#ff7043", // Default background color
  size = 80, // Default size
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "25%",
        border: "none",
        backgroundColor,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {icon}
    </button>
  );
};

export default CircularButton;
