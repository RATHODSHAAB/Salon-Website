export const ImagesDiv = ({ images = [] }) => {
  return (
    <>
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {images.map((image, index) => (
            <Card key={index} image={image} />
          ))}
        </div>
      </div>
    </>
  );
};

export const ImagesDiv_home = ({ images = [] }) => {
  return (
    <>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-2 ">
          {images.map((image, index) => (
            <Card1 key={index} image={image} />
          ))}
        </div>
      </div>
    </>
  );
};

export const Card = ({ image }) => {
  return (
    <div className="w-full aspect-[4/3] rounded-xl border border-gray-300 overflow-hidden">
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover
                   transition-transform duration-500
                   hover:scale-110"
      />
    </div>
  );
};

const Card1 = ({ image }) => {
  return (
    <div className="w-full  aspect-3/3 overflow-hidden">
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover
                   transition-transform duration-500
                   hover:scale-110"
      />
    </div>
  );
};
