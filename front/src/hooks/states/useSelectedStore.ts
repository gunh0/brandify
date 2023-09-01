import {atom} from 'jotai';
import {Keyword} from '../../types/Keyword.ts';

export const selectedMoodAtom = atom<Keyword[]>([]);
export const selectedPurposeAtom = atom<Keyword[]>([]);
export const selectedColorAtom = atom<Keyword[]>([]);
export const selectedAdditionalAtom = atom<Keyword[]>([]);
export const selectedReferenceAtom = atom<Keyword[]>([]);
export const userInputAtom = atom<Keyword[]>([]);
export const selectedResultAtom = atom(get => ({
  moods: get(selectedMoodAtom),
  purposes: get(selectedPurposeAtom),
  colors: get(selectedColorAtom),
  additional: get(selectedAdditionalAtom),
  vision: get(selectedReferenceAtom),
  user: get(userInputAtom),
}));
