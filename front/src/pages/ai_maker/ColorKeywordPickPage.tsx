import {useAtom} from 'jotai';
import {PickKeywordTemplate} from '../../components/templates/PickKeywordTemplate.tsx';
import {Keyword} from '../../types/Keyword.ts';
import {selectedColorAtom} from '../../hooks/states/useSelectedStore.ts';
import {useColors} from '../../hooks/states/useColorKeywords.ts';

export const ColorKeywordPickPage = () => {
  const {colors} = useColors();
  const [selected, setSelected] = useAtom(selectedColorAtom);

  const onIntersectedArea = (keyword: Keyword) => {
    setSelected([...selected, keyword]);
  };

  return (
    <>
      <PickKeywordTemplate
        keywords={colors}
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
