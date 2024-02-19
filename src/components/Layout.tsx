import { ReactNode } from 'react';
import { Container } from 'reactstrap';

const Layout = ({
  col1,
  header,
  col2,
}: {
  col1: ReactNode;
  header?: ReactNode;
  col2?: ReactNode;
  title?: ReactNode;
}) => {
  return (
    <Container fluid className="p-0">
      <div className="layout-header">{header}</div>
      <div className="layout-col1">{col1}</div>
      <div className="layout-col2">{col2}</div>
    </Container>
  );
};

export default Layout;
