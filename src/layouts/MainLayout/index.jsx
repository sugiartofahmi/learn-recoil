import Navbar from "../../components/Navbar";
const MainLayout = ({ children, image, name }) => {
  return (
    <main className="w-full h-full flex flex-col">
      <Navbar image={image} name={name} />
      {children}
    </main>
  );
};
export default MainLayout;
