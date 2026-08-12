import { useEffect, useState } from 'react';

/**
 * Small helper for the Loading / Error / Empty states the pages share.
 *
 * Our data comes from files inside src/data, so there is no real network
 * request. We still show a short loading state so the pages behave the same
 * way they would with a real API, and so the loading and error messages are
 * handled in one place instead of being repeated in every page.
 */
export default function usePageData(items, delay = 400) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const timer = setTimeout(() => {
      if (Array.isArray(items)) {
        setLoading(false);
      } else {
        // The data file is missing or is not a list.
        setError(true);
        setLoading(false);
      }
    }, delay);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const retry = () => {
    setError(false);
    setLoading(true);
    setTimeout(() => setLoading(false), delay);
  };

  return { loading, error, retry };
}
