import {useMemo, useState} from 'react';
import {PickKeywordTemplate} from '../../components/templates/PickKeywordTemplate.tsx';
import {usePurposeKeywords} from '../../hooks/states/usePurposeKeywords.ts';
import {Keyword} from '../../types/Keyword.ts';

export const PurposeKeywordPickPage = () => {
  const {purposes} = usePurposeKeywords();
  const [selected, setSelected] = useState<Keyword[]>([]);

  const filteredPurposes = useMemo(() => purposes.filter(purpose => !selected.includes(purpose)), [purposes, selected]);

  const onIntersectedArea = (keyword: Keyword) => {
    setSelected([...selected, keyword]);
  };

  const onClickUnselect = (keyword: Keyword) => {
    setSelected(selected.filter(x => x.name !== keyword.name));
  };

  return (
    <>
      {selected.map(keyword => (
        <span key={keyword.name}>
          {keyword.name}
          <button onClick={() => onClickUnselect(keyword)}>X</button>
        </span>
      ))}
      <PickKeywordTemplate
        keywords={filteredPurposes}
        title={
          <>
            drag the situations and purposes
            <br />
            for using the brand
          </>
        }
        subtitle={'브랜드에 사용하려는 상황과 목적을 선택해줘'}
        backgroundText={'purpose'}
        onIntersectedArea={onIntersectedArea}
      />
    </>
  );
};
