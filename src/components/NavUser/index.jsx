import { useRecoilValue } from "recoil";
import { userState } from "../../store";

const NavUser = () => {
  const getUser = useRecoilValue(userState);
  return (
    <div className="flex flex-row justify-center items-center gap-x-5">
      <img
        className="w-10 h-10 rounded-full"
        src={getUser.picture.large}
        alt="Avatar"
      />
      <h5 className=" text-base leading-tight font-medium mb-2">
        {getUser.name.first}
      </h5>
    </div>
  );
};
export default NavUser;
