import { useEffect, useState } from 'react';
import { makeRequest } from '../api/axiosInstance';

export const useUserNote = (level) => {
  const [note, setNote] = useState('');

  useEffect(() => {
    if (!level) return;
    const fetchNote = async () => {
      try {
        const { data } = await makeRequest('GET', `/api/UserNote?level=${level}`);
        setNote(data?.[0]?.notes || '');
      } catch (error) {
        console.error(error);
      }
    };
    fetchNote();
  }, [level]);

  return [note, setNote];
};
