import {useAtom} from 'jotai';
import {atomsWithQuery} from 'jotai-tanstack-query';
import {getPurposes} from '../../api/getPurposes';

const [purposeListAtom] = atomsWithQuery(() => ({
  queryKey: ['purposes'],
  queryFn: getPurposes,
}));

export const usePurposeKeywords = () => {
  const [purposes] = useAtom(purposeListAtom);
  return {purposes};
};
