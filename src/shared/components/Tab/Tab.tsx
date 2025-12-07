interface TabProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Tab = ({ isActive, onClick, children }: TabProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex-1 h-12 flex justify-center items-center
        border-b-2 transition-all duration-200 cursor-pointer
        ${
          isActive
            ? 'bg-surface border-brand'
            : 'bg-surface-muted border-border'
        }
      `}
    >
      {children}
    </button>
  );
};

export default Tab;
