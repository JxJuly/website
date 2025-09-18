import type { DOMAttributes } from 'react';
import './button.css';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: DOMAttributes<HTMLButtonElement>['onClick'];
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button className="icon-button" onClick={onClick}>
      {icon}
    </button>
  );
};

type ButtonProps = React.PropsWithChildren<{
  icon?: React.ReactNode;
  onClick: DOMAttributes<HTMLButtonElement>['onClick'];
}>;
const Button: React.FC<ButtonProps> = ({ icon, children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {icon && <div>{icon}</div>}
      <div>{children}</div>
    </button>
  );
};

export { Button, IconButton };
