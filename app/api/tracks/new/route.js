import db from '@/utils/db.json';

export const GET = async (request) => {
  try {
    const track = await db.tracks;

    return new Response(JSON.stringify(track.data), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all playlist', { status: 500 });
  }
};
