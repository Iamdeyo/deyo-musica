import db from '@/utils/db.json';

export const GET = async (request, { params }) => {
  try {
    const tracks = await db.tracks;
    const playlists = await db.playlists;

    const playlist = playlists.data.find((item) => item.id == params.id);

    const tracksOnPlaylist = tracks.data.filter((t) =>
      playlist.tracklist.includes(t.id)
    );

    const data = {
      tracks: tracksOnPlaylist,
      playlist: playlist,
    };

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch a track', { status: 500 });
  }
};
