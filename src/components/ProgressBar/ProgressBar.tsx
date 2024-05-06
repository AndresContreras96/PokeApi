import React from "react";

import "../ProgressBar/ProgressBar.css";

interface Props {
  value: number;
  maxValue: number;
}

const ProgressBar: React.FC<Props> = ({ value, maxValue }) => {
  const percentage = (value * 100) / maxValue;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
