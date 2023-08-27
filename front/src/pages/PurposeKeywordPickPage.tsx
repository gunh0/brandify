import {PickKeywordTemplate} from '../components/templates/PickKeywordTemplate';
import {usePurposeKeywords} from '../hooks/states/usePurposeKeywords';

export const PurposeKeywordPickPage = () => {
  const {purposes} = usePurposeKeywords();
  return <PickKeywordTemplate keywords={purposes} title="어떤 상황에서 브랜딩이 필요한가요?" />;
};
