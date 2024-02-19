import { ReactNode } from 'react';

type TemplateLoaderProps = {
  children: ReactNode;
};

const TemplateLoader = ({ children }: TemplateLoaderProps) => {
  return <div className="template-loader">{children}</div>;
};

export default TemplateLoader;
