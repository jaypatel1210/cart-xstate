import { ReactNode } from 'react';
import '../assets/drawer.css';
import { Button } from 'reactstrap';

type DrawerProps = {
  open: boolean;
  direction: 'left' | 'right' | 'top' | 'bottom';
  handleClose: () => void;
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};

const Drawer = ({
  open,
  direction,
  children,
  handleClose,
  header = null,
  footer = null,
}: DrawerProps) => {
  const drawerClass = `drawer drawer-${direction} ${open ? 'open' : ''}`;

  return (
    <div className={drawerClass}>
      <div className="text-end p-2">
        <Button onClick={handleClose} size="sm">
          Close
        </Button>
      </div>
      {header}
      {children}
      {footer}
    </div>
  );
};

export default Drawer;
