import React from "react";

export const CenteredContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={`w-full flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export const RowContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={`w-full flex flex-row items-center justify-between ${className}`}
    >
      {children}
    </div>
  );
};
