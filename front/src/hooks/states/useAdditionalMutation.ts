import {atomsWithMutation} from 'jotai-tanstack-query';
import {useAtom} from 'jotai';
import {postChoice} from '../../api/postChoice.ts';

const [, choiceAtom] = atomsWithMutation(() => ({
  mutationKey: ['choice'],
  mutationFn: postChoice,
}));

export const useAdditionalMutation = () => {
  const [additionalKeywords, mutate] = useAtom(choiceAtom);
  return {additionalKeywords, mutate};
};
