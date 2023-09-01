import {useAtom} from 'jotai';
import {atomsWithQuery} from 'jotai-tanstack-query';
import {getColors} from '../../api/getColors.ts';

const [colorListAtom] = atomsWithQuery(() => ({
  queryKey: ['colors'],
  queryFn: getColors,
}));

export const useColors = () => {
  const [colors] = useAtom(colorListAtom);
  return {colors};
};
