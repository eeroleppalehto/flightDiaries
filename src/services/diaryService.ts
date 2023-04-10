import diaryEntries from '../../data/entries';

import { DiaryEntry, NonSensitiveDiaryEntry, NewDiaryEntry } from '../../types';

const getEntries = (): DiaryEntry[] => {
  return diaryEntries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaryEntries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility
  }));
};

const addDiary = ( entry: NewDiaryEntry ): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaryEntries.map(d => d.id)) +1,
    ...entry
  };

  diaryEntries.push(newDiaryEntry);
  return newDiaryEntry;
};

const findById = (id: number):NonSensitiveDiaryEntry | undefined => {
  const entry = diaryEntries.find(d => d.id === id);
  return entry;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addDiary,
  findById
};