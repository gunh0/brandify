import {useState} from 'react';
import {PickKeywordTemplate} from '../../components/templates/PickKeywordTemplate.tsx';
import {Keyword} from '../../types/Keyword.ts';

const colorKeywords = ['pink', 'lightgray', 'green'].map(x => ({name: x, type: 'color'}) satisfies Keyword);
export const ColorKeywordPickPage = () => {
  const [selected, setSelected] = useState<Keyword[]>([]);

  const onIntersectedArea = (keyword: Keyword) => {
    setSelected([...selected, keyword]);
  };

  return (
    <>
      <PickKeywordTemplate
        keywords={colorKeywords}
        title={
          <>
            choose the colors
            <br />
            for the brand
          </>
        }
        subtitle={'색상을 선택해줘'}
        backgroundText={'color'}
        backgroundFontSize={358}
        onIntersectedArea={onIntersectedArea}
        onDragToArea={onIntersectedArea}
      />
    </>
  );
};
