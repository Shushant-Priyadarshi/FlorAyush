const Card = ({ name, description }) => {
  return (
    <div className="mx-5 flex flex-col gap-4 border border-website-color-700 items-center w-64 p-5 rounded-lg cursor-pointer hover:shadow-lg my-5 transition duration-300 ease-in-out transform hover:scale-105">
      {/* Image Container */}
      <div className="p-2 bg-azure-radiance-700 rounded-full">
        <img
          className="h-24 w-24 rounded-full object-cover"
          src={`/assets/images/${name.toLowerCase()}.jpeg`} // Dynamic image source
          alt={name}
        />
      </div>

      {/* Title */}
      <div className="text-lg font-semibold text-center">{name}</div>

      {/* Description */}
      <div className="text-sm text-center text-mine-shaft-300 min-h-[48px]">
        {description}
      </div>

      {/* Explore More */}
      <div className="text-website-color-600 text-md">Explore More +</div>
    </div>
  );
};

export default Card;
