import {useAtom, useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {PickKeywordTemplate} from '../../components/templates/PickKeywordTemplate.tsx';
import {Keyword} from '../../types/Keyword.ts';
import {selectedAdditionalAtom, selectedKeywordsForAdditionalAtom} from '../../hooks/states/useSelectedStore.ts';
import {useAdditionalMutation} from '../../hooks/states/useAdditionalMutation.ts';
import {LoadingView} from '../../components/common/LoadingView.tsx';

export const RelatedKeywordPickPage = () => {
  const [selected, setSelected] = useAtom(selectedAdditionalAtom);

  const {
    additionalKeywords: {data: keywords, isLoading = true},
    mutate,
  } = useAdditionalMutation();

  const param = useAtomValue(selectedKeywordsForAdditionalAtom);
  useEffect(() => {
    mutate([param]);
  }, [mutate, param]);

  const onIntersectedArea = (keyword: Keyword) => {
    setSelected([...selected, keyword]);
  };

  return isLoading ? (
    <LoadingView text={'연관된 키워드를 가져오고 있어요'} />
  ) : (
    <PickKeywordTemplate
      keywords={keywords}
      selected={selected}
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
      keywordFontColor={'orange'}
    />
  );
};
