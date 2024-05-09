import React from 'react'
import "./Cart.css"
const Cart = () => {
  return (
    <>
    <div className="small-container cart-page">
    <table>
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
        </tr>
        <tr>
            <td>
                    <div className="cart-info">
                        <img src="PHOTO-2024-04-22-12-30-35.jpg" />
                        <div>
                            <p>Fertilizers</p>
                            <small>Price:Rs 250.00 </small>
                            
                            <a href="">Remove</a>
                        </div>
                    </div>
                 </td>
            <td><input type="number"valuse="1"/></td>
            <td>Rs 250.00 </td>
        </tr>

        <tr>
            <td>
                    <div className="cart-info">
                        <img src="https://m.media-amazon.com/images/I/71Dt0RciZ1L._AC_UF1000,1000_QL80_.jpg" />
                        <div>
                            <p>Plant Pots</p>
                            <small>Price:Rs 95.00</small>
                         
                            <a href="">Remove</a>
                        </div>
                    </div>
                 </td>
            <td><input type="number"valuse="1"/></td>
            <td>RS 95.00</td>
        </tr>

        <tr>
            <td>
                    <div className="cart-info">
                        <img src="https://cdn.shopify.com/s/files/1/0085/2344/8371/files/plants-pot-with-watering-can_1_480x480.jpg?v=1685964145" />
                        <div>
                            <p>Tools</p>
                            <small>Price: Rs 300.00 </small>
                         
                            <a href="">Remove</a>
                        </div>
                    </div>
                 </td>
            <td><input type="number"valuse="1"/></td>
            <td>Rs 300.00 </td>
        </tr>
    </table>

<div className="total-price">
    <table>
        <tr>
            <td>Subtotal</td>
            <td>Rs 645.00</td>
        </tr>
        <tr>
            <td>Tax</td>
            <td>Rs 100.00</td>
    </tr>
    <tr>
        <td>Total</td>
        <td>Rs 745.00</td>
        
    </tr>
    </table>
</div>






</div>

    
    
    
    </>
  )
}

export default Cart;