import {atomsWithMutation} from 'jotai-tanstack-query';
import {useAtom} from 'jotai';
import {postVision} from '../../api/postVision.ts';

const [, visionAtom] = atomsWithMutation(() => ({
  mutationKey: ['vision'],
  mutationFn: postVision,
}));

export const useReferenceMutation = () => {
  const [referenceKeywords, mutate] = useAtom(visionAtom);
  return {referenceKeywords, mutate};
};
