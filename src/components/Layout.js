import NavBar from "./NavBar";

const Layout = ({children}) => {
    return (
        <div>
            <NavBar />
            <div className="mainContainer">
                {children}
            </div>
        </div>
    );
}
 
export default Layout;