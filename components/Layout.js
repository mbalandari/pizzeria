import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ Children }) {
    return (
        <>
            <Navbar />
            {Children}
            <Footer />
        </>
    )
}
