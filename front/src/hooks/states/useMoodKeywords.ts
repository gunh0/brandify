import {useAtom} from 'jotai';
import {atomsWithQuery} from 'jotai-tanstack-query';
import {getMoods} from '../../api/getMoods';

const [moodListAtom] = atomsWithQuery(() => ({
  queryKey: ['moods'],
  queryFn: getMoods,
}));

export const useMoods = () => {
  const [moods] = useAtom(moodListAtom);
  return {moods};
};
