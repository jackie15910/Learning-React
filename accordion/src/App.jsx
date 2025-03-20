import Accordion from "./components/Accordion";
import { accordionData } from "./utils/content";

const App = () => {
  return (
    <div>
      <div className="Accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;