import {useState} from 'react';
import {PickKeywordTemplate} from '../../components/templates/PickKeywordTemplate.tsx';
import {Keyword} from '../../types/Keyword.ts';

const keywords = [{name: 'test'}, {name: 'test2'}];

export const RelatedKeywordPickPage = () => {
  const [selected, setSelected] = useState<Keyword[]>([]);

  const onIntersectedArea = (keyword: Keyword) => {
    setSelected([...selected, keyword]);
  };

  return (
    <>
      <PickKeywordTemplate
        keywords={keywords}
        title={
          <>
            drag the situations and purposes
            <br />
            for using the brand
          </>
        }
        subtitle={'선택한 키워드에서 연관된 카드들을 찾았어, 선택해줘'}
        backgroundText={'related'}
        backgroundFontSize={298}
        onIntersectedArea={onIntersectedArea}
        onDragToArea={onIntersectedArea}
        keywordFontColor={'random'}
      />
    </>
  );
};
