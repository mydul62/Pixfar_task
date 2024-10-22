import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loading = () => {
  return (
    <div className=" container px-6 py-6 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 ">
      {Array.from({ length: 9 }).map((_, index) => (
         <div key={index} className="overflow-hidden border-2 border-[#b7b4b426] rounded-[6px]">
         <div className="relative p-3">
           <Skeleton className="w-full h-[400px] object-cover border-b border-[#cccccc43]" />
         
           <div className="absolute md:bg-[#4a484858] rounded-t-[6px] top-0 left-0 w-full h-full md:opacity-0 transition-opacity duration-500 md:hover:opacity-100 flex justify-center md:items-center items-end">
             <button className="text-2xl bg-black text-white md:text-black md:bg-[#ffffff7b] flex justify-center gap-2 items-center md:px-4 w-full md:py-3 py-1 uppercase">
               <Skeleton width={100} height={30} />
             </button>
           </div>
         </div>
         <div className="p-4 text-center">
           <Skeleton width={`80%`} height={24} className="mx-auto" />
           <Skeleton width={`60%`} height={20} className="mx-auto mt-2" />
         </div>
       </div>
      ))}
    </div>
  );
};

export default Loading;
