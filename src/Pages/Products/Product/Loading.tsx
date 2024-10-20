import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto w-[90%] grid md:grid-cols-3 grid-cols-1 gap-6 my-20">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="border p-4 rounded-lg shadow">
          <div className="flex justify-between items-center gap-4">
            <Skeleton circle width={20} height={20} />
            <Skeleton width={`100%`} height={30} />
          </div>
          <Skeleton className="mt-2" width={`100%`} height={20} />
          <Skeleton className="mt-4" width={`80%`} height={20} />
          <Skeleton className="mt-4" width={`50%`} height={20} />
        </div>
      ))}
    </div>
  );
};

export default Loading;
