import Tracklist from '@/components/Tracklist';
import TopCharts from '@/components/charts/TopCharts';

const Home = () => {
  return (
    <div>
      <TopCharts />
      <Tracklist header={'New releases.'} apiUrl={'/api/tracks/new'} />
      <Tracklist
        header={'Popular in your area'}
        apiUrl={'/api/tracks/popular'}
      />
    </div>
  );
};
export default Home;
