import './UserPage.scss';

function UserPage() {
    return (
        <>
            <main className="main wrapper flex-grow-1 d-flex justify-content-center align-items-center">
                <div className="user-page py-5">
                    <div className="text-center text-sm-end pe-sm-5 pb-3">
                        <p className="pb-3">
                            <img className="rounded-circle" src="img/user-pic-big.png" alt="" />
                        </p>
                        <div className="user-page__info">
                            <p>Leanne Graham</p>
                            <p>1-770-736-8031 x56442</p>
                            <p>Sincere@april.biz</p>
                        </div>
                    </div>
                    <ul className="user-page__list ps-sm-5">
                        <li>Street: Victor Plains</li>
                        <li>City: Wisokyburgh</li>
                        <li>Suit: Apt. 556</li>
                        <li>Zip: 92998-3874</li>
                        <li>Website: hildegard.org</li>
                        <li>Company Name: Romaguera-Crona</li>
                    </ul>
                </div>
            </main>
        </>
    )
}


export default UserPage;