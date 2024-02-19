import clsx from 'clsx';
import { ReactNode } from 'react';

type HeaderProps = {
  title: ReactNode;
  actions?: ReactNode;
  classes?: string;
};

const Header = ({ title, actions, classes }: HeaderProps) => {
  return (
    <div className={clsx('mt-4 mb-2', classes)}>
      <div className="d-flex justify-content-between">
        <div>{title}</div>
        <div>{actions}</div>
      </div>
    </div>
  );
};

export default Header;
