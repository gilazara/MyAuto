import { type ElementType } from 'react';

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
};

export const Container = ({
  children,
  className = '',
  as = 'div',
}: ContainerProps) => {
  const Tag: ElementType = as ?? 'div';

  return (
    <Tag className={['container', className].filter(Boolean).join(' ')}>
      {children}
    </Tag>
  );
};

export default Container;
