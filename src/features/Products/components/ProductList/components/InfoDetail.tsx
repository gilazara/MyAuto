import React from 'react';

interface InfoDetailProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const InfoDetail = ({ icon, children, className }: InfoDetailProps) => {
  return (
    <div
      className={`flex items-center min-w-[120px] gap-1 md:gap-2 text-md lg:text-sm ${
        className ?? ''
      }`}
    >
      {icon ? (
        <span className="hidden md:inline-flex items-center justify-center w-5 h-5 text-raisin-100">
          {icon}
        </span>
      ) : null}
      <span className="truncate">{children}</span>
    </div>
  );
};

export default InfoDetail;
