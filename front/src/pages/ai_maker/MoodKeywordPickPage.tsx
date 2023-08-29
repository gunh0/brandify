import {useMemo, useState} from 'react';
import {PickKeywordTemplate} from '../../components/templates/PickKeywordTemplate.tsx';
import {useMoods} from '../../hooks/states/useMoodKeywords.ts';
import {Keyword} from '../../types/Keyword.ts';

export const MoodKeywordPickPage = () => {
  const {moods} = useMoods();
  const [selected, setSelected] = useState<Keyword[]>([]);

  const filteredMoods = useMemo(() => moods.filter(mood => !selected.includes(mood)), [moods, selected]);

  const onIntersectedArea = (keyword: Keyword) => {
    setSelected([...selected, keyword]);
  };

  return (
    <PickKeywordTemplate
      keywords={filteredMoods}
      title={
        <>
          DRAG THE ATMOSPHERE
          <br />
          OR MOOD YOU LIKE
        </>
      }
      subtitle="너가 좋아하는 분위기나 무드를 드래그 해줘"
      backgroundText="MOOD"
      backgroundFontSize={358}
      onIntersectedArea={onIntersectedArea}
      onDragToArea={onIntersectedArea}
    />
  );
};