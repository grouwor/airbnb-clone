import Header from "./components/header";
import 'tailwindcss/tailwind.css';
 // Layout is a Server Component by default
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  );
}