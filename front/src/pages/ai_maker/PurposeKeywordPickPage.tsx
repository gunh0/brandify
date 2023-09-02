import {useAtom} from 'jotai';
import {PickKeywordTemplate} from '../../components/templates/PickKeywordTemplate.tsx';
import {usePurposeKeywords} from '../../hooks/states/usePurposeKeywords.ts';
import {Keyword} from '../../types/Keyword.ts';
import {selectedPurposeAtom} from '../../hooks/states/useSelectedStore.ts';

export const PurposeKeywordPickPage = () => {
  const {purposes} = usePurposeKeywords();
  const [selected, setSelected] = useAtom(selectedPurposeAtom);

  const onIntersectedArea = (keyword: Keyword) => {
    setSelected([...selected, keyword]);
  };

  return (
    <>
      <PickKeywordTemplate
        keywords={purposes}
        selected={selected}
        title={
          <>
            drag the situations and purposes
            <br />
            for using the brand
          </>
        }
        subtitle={'브랜드에 사용하려는 상황과 목적을 선택해줘'}
        backgroundText={'purpose'}
        backgroundFontSize={287}
        onIntersectedArea={onIntersectedArea}
        onDragToArea={onIntersectedArea}
        keywordFontColor={'skyblue'}
      />
    </>
  );
};
