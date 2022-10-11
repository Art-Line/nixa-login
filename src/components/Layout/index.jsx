import { Outlet } from "react-router-dom";
import './Layout.scss';

function Layout() {
    return (
        <div className="d-flex flex-column h-100">
            <Outlet />
            <footer className="footer py-3 mt-auto">
                <div className="wrapper">
                    <p className="footer__copyright text-center">Nixa 2022</p>
                </div>
            </footer>
        </div>
    )
}
export default Layout;