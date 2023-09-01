import {atomsWithMutation} from 'jotai-tanstack-query';
import {useAtom} from 'jotai';
import {postReport} from '../../api/postReport.ts';

const [, reportAtom] = atomsWithMutation(() => ({
  mutationKey: ['report'],
  mutationFn: postReport,
}));

export const useReportMutation = () => {
  const [reportResult, mutate] = useAtom(reportAtom);
  return {reportResult, mutate};
};
