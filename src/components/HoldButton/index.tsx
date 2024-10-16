import React, { useRef, ReactNode, useEffect } from "react";
import styles from "./HoldButton.module.css";

interface HoldButtonProps {
  onClick: () => void;
  onHold: () => void;
  children: ReactNode;
  holdTimeoutInMS: number;
  holdIntervalInMS: number;
  disabled?: boolean;
  stopCondition?: boolean;
}

const HoldButton: React.FC<HoldButtonProps> = ({
  onClick,
  onHold,
  children,
  holdTimeoutInMS,
  holdIntervalInMS,
  disabled,
  stopCondition,
}) => {
  const holdTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (stopCondition) {
      if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current);
      if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
    }
  }, [stopCondition]);

  const handleMouseDown = () => {
    onClick();

    holdTimeoutRef.current = setTimeout(() => {
      onHold();

      holdIntervalRef.current = setInterval(() => {
        onHold();
      }, holdIntervalInMS);
    }, holdTimeoutInMS);
  };

  const handleMouseUp = () => {
    if (holdTimeoutRef.current) clearTimeout(holdTimeoutRef.current);
    if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={styles["hold-button"]}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default HoldButton;
