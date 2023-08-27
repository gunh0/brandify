import {useEffect, useState} from 'react';
import {getPurposes} from '../api/getPurposes';
import {PickKeywordTemplate} from '../components/templates/PickKeywordTemplate';
import {Keyword} from '../types/Keyword';

export const PurposeKeywordPickPage = () => {
  const [purposeList, setPurposeList] = useState<Keyword[]>([]);

  useEffect(() => {
    getPurposes().then(data => setPurposeList(data));
  }, []);

  return (
    <>
      <PickKeywordTemplate keywords={purposeList} title="어떤 상황에서 브랜딩이 필요한가요?" />
    </>
  );
};
