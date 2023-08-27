import {useEffect, useState} from 'react';
import {getMoods} from '../api/getMoods';
import {PickKeywordTemplate} from '../components/templates/PickKeywordTemplate';
import {Keyword} from '../types/Keyword';

export const MoodKeywordPickPage = () => {
  const [moodList, setMoodList] = useState<Keyword[]>([]);

  useEffect(() => {
    getMoods().then(data => setMoodList(data));
  }, []);

  return (
    <>
      <PickKeywordTemplate keywords={moodList} title="선호하는 분위기는 무엇인가요?" />
    </>
  );
};
