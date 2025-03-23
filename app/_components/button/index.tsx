import type { DOMAttributes } from 'react';
import './button.scss';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: DOMAttributes<HTMLButtonElement>['onClick'];
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button className="july-button" onClick={onClick}>
      {icon}
    </button>
  );
};

export { IconButton };
