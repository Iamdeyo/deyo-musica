import db from '@/utils/db.json';

export const GET = async (request) => {
  try {
    const track = await db.tracks;
    const popularTracks = track.data.sort((a, b) => a.rank - b.rank);

    return new Response(JSON.stringify(popularTracks), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all playlist', { status: 500 });
  }
};
