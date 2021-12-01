import { useState, useEffect } from 'react';

export const useMedia = (query) => {
    if (typeof window !== 'undefined') {
        const [matches, setMatches] = useState(window.matchMedia(query).matches);

        useEffect(() => {
            const media = window.matchMedia(query);

            const listener = () => setMatches(media.matches);

            media.addEventListener('change', listener);

            return () => media.removeEventListener('change', listener);
        }, [query]);

        return matches;

    }
};
