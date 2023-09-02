import {useAtom, useAtomValue} from 'jotai';
import {useEffect} from 'react';
import {PickKeywordTemplate} from '../../components/templates/PickKeywordTemplate.tsx';
import {Keyword} from '../../types/Keyword.ts';
import {referenceImageAtom, selectedReferenceAtom} from '../../hooks/states/useSelectedStore.ts';
import {useReferenceMutation} from '../../hooks/states/useReferenceMutation.ts';
import {LoadingView} from '../../components/common/LoadingView.tsx';

export const ReferenceKeywordPickPage = () => {
  const {
    referenceKeywords: {data: keywords, isLoading = true},
    mutate,
  } = useReferenceMutation();
  const file = useAtomValue(referenceImageAtom);
  const [selected, setSelected] = useAtom(selectedReferenceAtom);

  useEffect(() => {
    file && mutate([file]);
  }, []);

  const onIntersectedArea = (keyword: Keyword) => {
    setSelected([...selected, keyword]);
  };

  return isLoading ? (
    <LoadingView text={'업로드한 이미지와 연관된 키워드를 가져오고 있어요'} />
  ) : (
    <PickKeywordTemplate
      keywords={keywords}
      selected={selected}
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
      keywordFontColor={'orange'}
    />
  );
};
