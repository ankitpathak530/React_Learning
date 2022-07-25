
import React from "react";
function Header(props) {
    console.warn(props.data)
    return (
        <div>
            <div className="add-to-cart">
                <span class="" className="cart-count" style={{ fontSize: '34px' }}>Item in Cart:{props.data.length}</span>
                <img style={{ height: '72px' }} src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    )
}

export default Header