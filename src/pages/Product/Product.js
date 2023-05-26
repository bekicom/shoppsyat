import React from "react";
import img1 from "../../assets/maxasection/image.png"
import "./product.css"
export function Products() {
    return (
        <div className="maxa">
            <div className="maxaleft">
                <img src={img1} alt="" />
                <p>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</p>
                <span>🚚 FREE SHIPPING</span>

            </div>
            <div className="maxaright" >
                <div className="maxatop">
                    <p>Spiced Mint Candleaf®</p>
                </div>
                <div className="maxaleft2">
                    <p>$ 9.99</p>
                    <span>Quantity</span>
                    <button>+   1   -</button>
                </div>
                <div className="maxaright2">
                    <input type="checkbox" />
                    <p>One time purchase</p>
                    <div className="v">
                        <input type="checkbox" name="" id="" />
                        <span>Subscribe and delivery every </span>
                        <select name="" id="">
                            <option value="">4 weeks</option>
                        </select>
                        <p>Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. See details</p>
                    </div>
                    <button>+ Add to cart</button>
                    <footer>
                        <p> <b>Wax:</b> Top grade Soy wax that delivers a smoke less,  consistent burn</p>
                        <span> <b>Fragrance:</b> Premium quality ingredients with natural essential oils </span>
                        <s><b>Burning Time:</b> 70-75 hours Dimension: 10cm x 5cm  <b>Weight:</b> 400g </s>
                    </footer>
                </div>
              
            </div>
        </div>
    )
}
