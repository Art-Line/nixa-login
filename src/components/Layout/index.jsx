import { Outlet } from "react-router-dom";
import Button from "../../components/Button";
import './Layout.scss';

function Layout() {
    return (
        <div className="d-flex flex-column h-100">
            <header className="header">
                <div className="wrapper">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle" src="img/user-pic-min.png" width={52} height={52} alt="" />
                            <div className="ps-2 ps-sm-4">
                                <p className="header__text"><b>Leanne Graham</b></p>
                                <p className="header__text">1-770-736-8031 x56442</p>
                            </div>
                        </div>
                        <Button type="button" className="btn btn--gray btn--sm" text="log out" />
                    </div>
                </div>
            </header>
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