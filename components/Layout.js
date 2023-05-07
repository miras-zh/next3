import HeaderComponent from "@/components/HeaderComponent";
import Footer from "@/components/Footer";

const Layout = ({children}) => {
    return (
        <>
            <HeaderComponent />
            <div className="content">
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Layout;