
function paymentDone(e) {
    e.preventDefault();
  alert("Payment Done")
  window.location.href='./index.html'
      let x = JSON.parse(localStorage.getItem("paymentdata"));

      let { product_name, price, image } = x[0];
      price=0
      let { token } = JSON.parse(localStorage.getItem("loginData"));
  
      let orderDetail = {
        image,
        product_name,
        price,
      };
  
      orderDetail = JSON.stringify(orderDetail);
      a()
      async function a(){
  
      try {
        let url = "https://lovely-goat-long-underwear.cyclic.app/orders";
        let responce = await fetch(url, {
          method: "POST",
          body: orderDetail,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
  
        localStorage.setItem("cartData", JSON.stringify(""));
        window.location.href = "../payment.html";
  
      } catch (err) {
        console.log(err);
      }
    }
        
  }
  
  // show payment amount
  
  let amountTopay = JSON.parse(localStorage.getItem("paymentAmount"));
  
  document.getElementById("pay").value = `Pay ${amountTopay}`;
  