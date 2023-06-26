import { MainLogo } from '@/components/svgs';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <div className="animate-bounce">
        <div className="animate-pulse">
          <MainLogo className="text-[128px] md:text-[180px] lg:text-[220px]" />
        </div>
      </div>
    </div>
  );
};
export default LoadingPage;
