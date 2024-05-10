import Inicio from "@/components/Inicio";
import QuienesSomos from "@/components/QuienesSomos";
import Login from "@/components/formLogin";
import RegisterForm from "@/components/registro";

export default function Home() {
  return (
    <>
      <Inicio />
      <QuienesSomos />
      <Login />
      <RegisterForm />
    </>
  );
}
