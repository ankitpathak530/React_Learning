import { useState } from "react";

function Profile() {

    const [loggedIn, setLoggedIn] = useState(1);
    let b = 4;

    return (
        <div>
            {
                loggedIn === 1 ?
                    <h1>Welcome User 1</h1>
                    :
                    loggedIn === 2
                        ?
                        <h1>Welcome User 2</h1>
                        :
                        <h1>Welcome User 3</h1>
            }
            {
                b === 3 ? <h1>Hi</h1> : <h1>Bi</h1>
            }
        </div>
    )

}


export default Profile;