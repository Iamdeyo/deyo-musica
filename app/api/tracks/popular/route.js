import db from '@/utils/db.json';

export const GET = async (request) => {
  try {
    const track = await db.tracks;
    const popularTracks = track.data;

    return new Response(
      JSON.stringify(popularTracks.sort((a, b) => b.rank - a.rank)),
      { status: 200 }
    );
  } catch (error) {
    return new Response('Failed to fetch all playlist', { status: 500 });
  }
};
