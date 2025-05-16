import { useState, useEffect } from 'react';
import { makeRequest } from '../api/axiosInstance';

export function useCoursesData(level, semester) {
  const [course, setCourses] = useState(null);
  const [note, setNote] = useState('');
  

  useEffect(() => {
    if (!level || !semester) return;

    const fetchData = async () => {
      try {
        const { data: courses } = await makeRequest('POST', `/api/Profile/user-courses-assign`, {
          level,
          semester
        });
        setCourses(courses);

        const { data: notes } = await makeRequest('GET', `/api/UserNote?level=${level}&semester=${semester}`);
        if (notes.length > 0) setNote(notes[0].notes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [level, semester]);

  return { course, note, setNote };
}
