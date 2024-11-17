import { Play } from "lucide-react";

const Tracks = ({ title, subtitle, poster, onClick }) => {
  return (
    <div
      className="flex items-center p-4 bg-secondary rounded-lg shadow-md space-x-4 cursor-pointer group hover:bg-secondaryHover transition duration-200"
      onClick={onClick}
    >
      {/* Poster */}
      <div className="w-16 h-16">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-light group-hover:text-accent transition duration-200">
          {title}
        </h3>
        <p className="text-sm text-light group-hover:text-light transition duration-200">
          {subtitle}
        </p>
      </div>

      {/* Play Button */}
      <div>
        <button className="bg-accent p-3 rounded-full group-hover:bg-gradient-to-r group-hover:from-accentHover group-hover:to-accent transition duration-300 transform group-hover:scale-110 shadow-md group-hover:shadow-lg">
          <Play className="text-primary group-hover:text-primaryHover transition duration-300 transform group-hover:rotate-45" />
        </button>
      </div>
    </div>
  );
};

export default Tracks;
