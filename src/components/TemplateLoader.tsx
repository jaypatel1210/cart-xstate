import { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

const TemplateLoader = () => {
  const { templateName } = useParams();

  const TemplateC = lazy(() => import(`../templates/${templateName}`));

  return (
    <div className="template-loader">
      <Suspense fallback={<div>Loading...</div>}>
        <TemplateC />
      </Suspense>
    </div>
  );
};

export default TemplateLoader;
