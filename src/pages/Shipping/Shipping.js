import React from 'react'
import paf from "../Shipping/img/Screenshot_29.png"
import "./Shipping.css"
function Shipping() {
    return (
        <div>
            <div className="xasanboy">
               
                <div className="lada">
                    <p>Contact</p>
                    <span>joe.spagnuolo@uxbly.com</span>
                    <h1>Edit</h1>
                </div>
                <div className="ladas">
                    <p>Ship to</p>
                    <span>Via Firenze 23, 92023, Campobello di  Licata AG, Italia</span>
                    <h1>Edit</h1>
                </div>
                <div className="daw">
                    <p>Shipping method</p>
                </div>
                <div className="daw1">
                    <input type="radio" name="genter" value="male" />
                    <p>Standard Shipping</p>
                    <span>Free</span>
                </div>
                <div className="wad3">
                    <a href="##">Back to details</a>
                    <button>Go to payment</button>
                </div>
                <div className="xasanboy1">
                    <img src={paf} alt="" />
                    <p>Spiced Mint Candleaf®</p>
                    <span>$ 9.99</span>

                </div>
                <div className="hilor">
                    <p>Subtotal</p>
                    <span>Shipping</span>
                </div>
                <div className="hilor1">
                    <p>$  9.99</p>
                    <span>Free Shipping</span>
                </div>
                <div className="hilor2">
                    <p>Total</p>
                    <span>$ 9.99</span>
                </div>

                <div className="xasanboy2">
                    <input type="text" placeholder='Coupon code' />
                    <button>Add code</button>
                </div>
            </div>
        </div>
    )
}

export default Shipping
