import NewTracks from '@/components/Tracklist/NewTracks';
import PopularTracks from '@/components/Tracklist/PopularTracks';
import TopCharts from '@/components/charts/TopCharts';

const Home = () => {
  return (
    <div>
      <TopCharts />

      <NewTracks />
      <PopularTracks />
    </div>
  );
};
export default Home;
