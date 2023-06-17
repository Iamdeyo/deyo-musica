import NewTracks from '@/components/Tracklist/NewTracks';
import PopularTracks from '@/components/Tracklist/PopularTracks';
import TopCharts from '@/components/charts/TopCharts';
import CurrentChart from '@/components/charts/CurrentChart';

const Home = () => {
  return (
    <div className="px-4 lg:ml-24 lg:pl-0 lg:pr-6">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-5">
        <CurrentChart />
        <TopCharts />
      </div>

      <NewTracks />
      <PopularTracks />
    </div>
  );
};
export default Home;
