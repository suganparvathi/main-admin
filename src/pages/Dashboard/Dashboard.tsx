import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import routes from "../../data/routes";
import { RootState } from "../../store";

const Dashboard = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  if (!isLoggedIn) return <Navigate to="/sign-in" />;

  return (
    <main className="w-screen h-screen overflow-hidden flex bg-white">
      <section className="w-screen">
        <Routes>
          {routes.map(({ path, Element }) => (
            <Route path={path} element={<Element />} key={path} />
          ))}
          <Route path="/" element={<Navigate to="/demographics" />} />
        </Routes>
      </section>
    </main>
  );
};

export default Dashboard;
