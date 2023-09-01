import {useAtom} from 'jotai';
import {PickKeywordTemplate} from '../../components/templates/PickKeywordTemplate.tsx';
import {Keyword} from '../../types/Keyword.ts';
import {selectedReferenceAtom} from '../../hooks/states/useSelectedStore.ts';
import {useReferenceMutation} from '../../hooks/states/useReferenceMutation.ts';

export const ReferenceKeywordPickPage = () => {
  const {
    referenceKeywords: {data: keywords = []},
  } = useReferenceMutation();
  const [selected, setSelected] = useAtom(selectedReferenceAtom);

  const onIntersectedArea = (keyword: Keyword) => {
    setSelected([...selected, keyword]);
  };

  return (
    <>
      <PickKeywordTemplate
        keywords={keywords}
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
    </>
  );
};
