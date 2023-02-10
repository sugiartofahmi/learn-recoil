const ContentLayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#1B202D] text-white">
      {children}
    </div>
  );
};
export default ContentLayout;
