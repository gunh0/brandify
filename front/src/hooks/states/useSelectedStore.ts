import {atom} from 'jotai';
import {Keyword} from '../../types/Keyword.ts';

export const selectedMoodAtom = atom<Keyword[]>([]);
export const selectedPurposeAtom = atom<Keyword[]>([]);
export const selectedColorAtom = atom<Keyword[]>([]);
export const selectedAdditionalAtom = atom<Keyword[]>([]);
export const selectedReferenceAtom = atom<Keyword[]>([]);
export const userInputAtom = atom<Keyword[]>([]);
export const referenceImageAtom = atom<File | undefined>(undefined);

export const selectedKeywordsForAdditionalAtom = atom(get => ({
  moods: get(selectedMoodAtom).map(keyword => keyword.name),
  purposes: get(selectedPurposeAtom).map(keyword => keyword.name),
  // colors: get(selectedColorAtom),
}));

export const selectedAllKeywordsAtom = atom(get => ({
  moods: get(selectedMoodAtom).map(keyword => keyword.name),
  purposes: get(selectedPurposeAtom).map(keyword => keyword.name),
  colors: get(selectedColorAtom).map(keyword => keyword.name),
  additional: get(selectedAdditionalAtom).map(keyword => keyword.name),
  vision: get(selectedReferenceAtom).map(keyword => keyword.name),
  user: get(userInputAtom).map(keyword => keyword.name),
}));
