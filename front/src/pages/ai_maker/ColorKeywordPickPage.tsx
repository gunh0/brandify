import {useMemo, useState} from 'react';
import {PickKeywordTemplate} from '../../components/templates/PickKeywordTemplate.tsx';
import {Keyword} from '../../types/Keyword.ts';

export const ColorKeywordPickPage = () => {
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
