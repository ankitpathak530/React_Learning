import React from "react";

function Home(props) {
    console.warn("Home-props:", props);
    return (
        <div>

            <h1>Home Component</h1>

            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://m-cdn.phonearena.com/images/phonesize/12985-350/Apple-iPhone-13-Pro.webp" className="img" />
                </div>

                <div className="img-wrapper itme">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $999
                    </span>
                </div>
                <div className="img-wrapper itme">
                    <button onClick={() => props.addToCartHandler({ price: 9999, name: 'Iphone-12' })}>
                        Add to cart</button>
                </div>
            </div>

        </div >
    )
}

export default Home;