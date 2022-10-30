import type { NextApiRequest, NextApiResponse } from 'next';
import { getCurrentTrack } from '@/lib/spotify';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await getCurrentTrack();
    if (data?.item?.type === 'track') {
      const { external_urls, name, artists } = data.item;
      return res.status(200).json({
        success: true,
        track: {
          url: external_urls.spotify,
          name,
          artist: artists[0].name,
          image: data.item.album.images[2].url,
        },
      });
    } else {
      return res.status(200).json({
        success: false,
        error: 'Probably listing to podcast',
      });
    }
  } catch (_) {
    return res.status(200).json({
      success: false,
      error: 'Could not fetch current track.',
    });
  }
}
