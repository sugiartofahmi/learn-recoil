import MainLayout from "../../layouts/MainLayout";
import ContentLayout from "../../layouts/ContentLayout";
import Card from "../../components/Card";
import { useState, useEffect, Suspense } from "react";
import data from "../../helper/data";
import {
  useRecoilRefresher_UNSTABLE,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { userFetch, userState } from "../../store";
import Button from "../../components/Button";
const GetUser = () => {
  const { data } = useRecoilValue(userFetch);
  const setUser = useSetRecoilState(userState);
  setUser(data.results[0]);
  return (
    <Card
      email={data.results[0].email}
      name={data.results[0].name.first}
      image={data.results[0].picture.large}
    />
  );
};

const Home = () => {
  const getData = useRecoilRefresher_UNSTABLE(userFetch);
  return (
    <MainLayout>
      <ContentLayout>
        <Suspense
          fallback={
            <div className="flex flex-col justify-center items-center">
              <div className="animate-pulse p-6 rounded-lg shadow-lg text-white bg-[#0E1117] flex flex-col justify-center items-center min-w-[70vh] ">
                <div className="w-[130px] h-[130px] animate-pulse rounded-full p-30 bg-slate-700"></div>
                <h5 className=" h-[16px] w-1/2 mt-4 rounded-lg animate-pulse text-xl leading-tight font-medium mb-2  bg-slate-700"></h5>
                <p className="text-base h-[14px] w-full animate-pulse mb-4 bg-slate-700 rounded-lg"></p>
              </div>
            </div>
          }
        >
          <GetUser />
        </Suspense>
        <Button text="Get User" onClick={getData} />
      </ContentLayout>
    </MainLayout>
  );
};

export default Home;
