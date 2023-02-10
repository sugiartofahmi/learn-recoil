import NavLayout from "../../layouts/NavLayout";
import NavUser from "../NavUser";
const Navbar = () => {
  return (
    <NavLayout>
      <div className="gap-x-[45px] text-lg flex flex-row">
        <h1 className="font-bold">Fatamorgana</h1>
      </div>
      <div className="flex flex-row items-center gap-x-5">
        <NavUser />
      </div>
    </NavLayout>
  );
};

export default Navbar;
