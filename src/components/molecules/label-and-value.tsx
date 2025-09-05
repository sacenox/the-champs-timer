import React from "react";

const LabelAndValue: React.FC<{
  label: string;
  value: string;
  size?: "normal" | "large";
}> = ({ label, value, size = "normal" }) => {
  const labelSize = size === "normal" ? "text-xl" : "text-4xl";
  const valueSize =
    size === "normal"
      ? "text-3xl"
      : "text-9xl flex items-center justify-center";

  return (
    <div className="flex flex-col items-left justify-center px-6 py-4">
      <p className={`${labelSize} font-bold`}>{label}</p>
      <p className={valueSize}>{value}</p>
    </div>
  );
};

export default LabelAndValue;
