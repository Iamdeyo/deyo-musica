import db from '@/utils/db.json';

export const GET = async (request) => {
  try {
    const playlist = await db.playlists;

    // const prompts = await Prompt.find({}).populate('creator')

    return new Response(JSON.stringify(playlist), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all playlist', { status: 500 });
  }
};
