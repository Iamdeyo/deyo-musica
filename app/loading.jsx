import MainLogo from '@/public/assets/logo-1.svg';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <div className="animate-bounce">
        <div className="animate-pulse">
          <MainLogo />
        </div>
      </div>
    </div>
  );
};
export default LoadingPage;
