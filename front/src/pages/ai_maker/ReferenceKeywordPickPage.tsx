import {useMemo, useState} from 'react';
import {PickKeywordTemplate} from '../../components/templates/PickKeywordTemplate.tsx';
import {Keyword} from '../../types/Keyword.ts';

export const ReferenceKeywordPickPage = () => {
  const [selected, setSelected] = useState<Keyword[]>([]);

  const filtered = useMemo(() => [].filter(purpose => !selected.includes(purpose)), [selected]);

  const onIntersectedArea = (keyword: Keyword) => {
    setSelected([...selected, keyword]);
  };

  return (
    <>
      <PickKeywordTemplate
        keywords={filtered}
        title={
          <>
            this is the keyword analyzed from
            <br />
            the uploaded reference photos and image..
          </>
        }
        subtitle={
          <>
            참고한 이미지에서 찾아낸 키워드에요.
            <br />
            선호하는 단어를 선택해주세요.
          </>
        }
        backgroundText={'reference'}
        backgroundFontSize={220}
        onIntersectedArea={onIntersectedArea}
        onDragToArea={onIntersectedArea}
      />
    </>
  );
};
