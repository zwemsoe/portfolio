import { getCurrentTrack } from '@/utils/spotify';

export default async function handler(req, res) {
  try {
    const data = await getCurrentTrack();
    if (data?.item?.type === 'track') {
      const { external_urls, name, artists } = data.item;
      return res.status(200).json({
        success: true,
        track: {
          url: external_urls.spotify,
          name,
          artists: artists.map((a) => a.name),
        },
      });
    } else {
      return res.status(400).json({
        success: false,
        error: 'Probably listing to podcast',
      });
    }
  } catch (err) {
    return res.status(400).json({
      success: false,
      code: err.status,
      error: err.message,
    });
  }
}
