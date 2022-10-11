import './UserPage.scss';
import Button from "../../components/Button";

function UserPage({ setIsLogin, setUserInfo, userInfo }) {

    const logOut = () => {
        localStorage.removeItem('user');
        setIsLogin(false);
        setUserInfo(null)
    }

    return (
        <>
            <header className="header">
                <div className="wrapper">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle" src="img/user-pic-min.png" width={52} height={52} alt={userInfo.name} />
                            <div className="ps-2 ps-sm-4">
                                <p className="header__text"><b>{userInfo.name}</b></p>
                                <p className="header__text">{userInfo.phone}</p>
                            </div>
                        </div>
                        <Button type="button" className="btn btn--gray btn--sm" text="log out" click={logOut} />
                    </div>
                </div>
            </header>
            <main className="main wrapper flex-grow-1 d-flex justify-content-center align-items-center">
                <div className="user-page py-5">
                    <div className="text-center text-sm-end pe-sm-5 pb-3">
                        <p className="pb-3">
                            <img className="rounded-circle" src="img/user-pic-big.png" alt={userInfo.name} />
                        </p>
                        <div className="user-page__info">
                            <p>{userInfo.name}</p>
                            <p>{userInfo.phone}</p>
                            <p><a href={`mailto:${userInfo.email}`}>{userInfo.email}</a></p>
                        </div>
                    </div>
                    <ul className="user-page__list ps-sm-5">
                        <li>Street: {userInfo.address.street}</li>
                        <li>City: {userInfo.address.city}</li>
                        <li>Suit: {userInfo.address.suite}</li>
                        <li>Zip: {userInfo.address.zipcode}</li>
                        <li>Website: {userInfo.website}</li>
                        <li>Company Name: {userInfo.company.name}</li>
                    </ul>
                </div>
            </main>
        </>
    )
}


export default UserPage;