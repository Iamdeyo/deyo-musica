import db from '@/utils/db.json';

export const GET = async (request, { params }) => {
  try {
    const tracks = await db.tracks;
    const track = tracks.data.find((item) => item.id == params.id);

    return new Response(JSON.stringify(track), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch a track', { status: 500 });
  }
};
