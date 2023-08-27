import {PickKeywordTemplate} from './components/templates/PickKeywordTemplate';
import {MoodKeywords} from './dummy/keywords';
import './index.css';

const App = () => {
  return (
    <>
      <PickKeywordTemplate keywords={MoodKeywords} title="선호하는 분위기는 무엇인가요?" />
    </>
  );
};

export default App;
