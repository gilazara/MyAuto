import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '@assets/arrow.svg';

interface Props {
  items: { to?: string; label: string }[];
}

const Breadcrumb = ({ items }: Props) => {
  return (
    <div className="flex items-center mt-8 w-fit">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        const content =
          item.to && !isLast ? (
            <Link
              to={item.to}
              className="text-sm text-[#6F7383] hover:underline"
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={`text-sm ${
                isLast ? 'text-primary font-medium' : 'text-[#6F7383]'
              }`}
            >
              {item.label}
            </span>
          );

        return (
          <div key={i} className="flex items-center">
            {content}
            {!isLast && <Arrow className="w-4 h-4" />}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
