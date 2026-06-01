import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export default function Badge({ children, icon, className = "" }: BadgeProps) {
  return (
    <div
      className={`
        flex items-center gap-2 px-10 py-3 rounded-full w-fit
        text-[16px]  font-medium
        ${className}
      `}
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        border: "0.73px solid rgba(225, 250, 0, 0.2)",
        boxShadow: "0px 0.73px 0px 0.73px rgba(255, 255, 255, 0.1) inset, 0px 5.8px 23.21px 0px rgba(0, 0, 0, 0.37)",
        backdropFilter: "blur(8.7px)",
        WebkitBackdropFilter: "blur(8.7px)",
      }}
    >
      {icon && <div className="flex-shrink-0">{icon}</div>}
      <div className="flex items-center gap-1 font-medium">
        {children}
      </div>
    </div>
  );
}
