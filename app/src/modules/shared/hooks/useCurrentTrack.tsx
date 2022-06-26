import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';

export function useCurrentTrack() {
  const { data, error } = useSWR('/api/currently-playing', fetcher);
  if (error) {
    console.log('Error with fetching current track: ', error);
  }
  return { data };
}
