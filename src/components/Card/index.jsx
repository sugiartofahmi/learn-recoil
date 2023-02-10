const Card = ({ name, email, image }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" p-6 rounded-lg shadow-lg text-white bg-[#0E1117] flex flex-col justify-center items-center min-w-[70vh] ">
        <img className="w-30 h-30 rounded-full" src={image} alt="Avatar" />
        <h5 className=" text-xl leading-tight font-medium mb-2">{name}</h5>
        <p className="text-base mb-4">{email}</p>
      </div>
    </div>
  );
};

export default Card;
