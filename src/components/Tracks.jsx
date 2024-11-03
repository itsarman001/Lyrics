import { Play } from "lucide-react";

const Tracks = ({ title, subtitle, poster, onClick }) => {
  return (
    <div className="flex items-center p-4 bg-gray-800 rounded-lg shadow-md space-x-4 cursor-pointer" onClick={onClick}>
      <div className="w-16 h-16">
        <img src={poster} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
      <div>
        <button className="bg-blue-500 p-2 rounded-full hover:bg-blue-600">
          <Play className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Tracks;
