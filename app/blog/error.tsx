'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Center } from '@mantine/core';

export default function Error({
  error,
} //reset,
: {
  error: Error & { digest?: string };
  //reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Center style={{ height: '50%' }}>
      <div>
        <h2>Hier ist gerade etwas schief gelaufen!</h2>
        <div>Wir wissen Bescheid und arbeiten daran, dass alles so funktioniert wie gewünscht.</div>
      </div>
    </Center>
  );
}
