import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between items-center h-screen">
      <NavBar />
      <main className="flex flex-col justify-center items-center w-full h-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
