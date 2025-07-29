import { Outlet } from "react-router";
import InputField from "../../components/InputField/InputField";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <InputField />
      <Outlet />
    </>
  );
}
