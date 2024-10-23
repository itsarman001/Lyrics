import React from "react";
import { Play } from "lucide-react";
import { useStateProvider } from "../../utils/StateProvider";

const Tracks = ({ src, alt, title, subtitle, index, id }) => {
  const { setCurrentTrackId } = useStateProvider();

  return (
    <div className="flex items-center justify-between hover:bg-[#4f5661] p-2 rounded-md">
      <div className="flex items-center gap-4">
        <div>{index}</div>
        <div>
          <img className="w-12 h-12 object-cover rounded" src={src} alt={alt} />
        </div>
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-base text-gray-300">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>03:55 Mins</div>
        <div
          className="p-2 bg-accent rounded-full"
          onClick={() => setCurrentTrackId(id)}
        >
          <Play />
        </div>
      </div>
    </div>
  );
};

export default Tracks;
