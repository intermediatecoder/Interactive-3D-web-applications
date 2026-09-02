import React from "react";
import { FaBriefcase } from "react-icons/fa6";

export const NaukriIcon: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className,
  style,
}) => {
  return <FaBriefcase className={className} style={style} />;
};

export default NaukriIcon;

