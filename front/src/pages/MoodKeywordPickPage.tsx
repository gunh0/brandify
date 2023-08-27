import {PickKeywordTemplate} from '../components/templates/PickKeywordTemplate';
import {useMoods} from '../hooks/states/useMoodKeywords';

export const MoodKeywordPickPage = () => {
  const {moods} = useMoods();
  return <PickKeywordTemplate keywords={moods} title="선호하는 분위기는 무엇인가요?" />;
};
