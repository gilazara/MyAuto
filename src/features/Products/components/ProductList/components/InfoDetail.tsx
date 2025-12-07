import React from 'react';

interface InfoDetailProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const InfoDetail = ({ icon, children, className }: InfoDetailProps) => {
  return (
    <div
      className={`flex items-center min-w-30 gap-2 text-sm text-gray-700 ${
        className ?? ''
      }`}
    >
      {icon ? (
        <span className="inline-flex items-center justify-center w-5 h-5 text-gray-600">
          {icon}
        </span>
      ) : null}
      <span className="truncate">{children}</span>
    </div>
  );
};

export default InfoDetail;
