import TemplateLoader from './components/TemplateLoader';
import Template1 from './templates/Template1';
// import Template2 from './templates/Template2';

function App() {
  return (
    <>
      <TemplateLoader>
        <Template1 />
        {/* <Template2 /> */}
      </TemplateLoader>
    </>
  );
}

export default App;
