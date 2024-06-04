const getAccessToken = async () => {
  const token_result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.SPOTIFY_CLIENT_ID +
            ":" +
            process.env.SPOTIFY_CLIENT_SECRET
        ).toString("base64"),
    },
    body: `grant_type=refresh_token&refresh_token=${process.env.SPOTIFY_REFRESH_TOKEN}`,
  });
  const data = await token_result.json();
  return data;
};

export const getCurrentTrack = async () => {
  try {
    const { access_token } = await getAccessToken();
    const result = await fetch("https://api.spotify.com/v1/me/player", {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const data = await result.json();
    const track =
      data?.item?.type === "track"
        ? {
            url: data.item?.external_urls.spotify,
            name: data.item?.name,
            artist: data.item?.artists[0].name,
            imageUrl: data.item?.album?.images.pop().url,
          }
        : undefined;
    return track;
  } catch (error) {
    return;
  }
};
