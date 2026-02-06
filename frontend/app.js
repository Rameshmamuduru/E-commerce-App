fetch("http://localhost:3000/products").then(res=>res.json()).then(data=>{
let html="";data.forEach(p=>{html+=`<div class='card'><h3>${p.name}</h3><p>₹${p.price}</p>
<button onclick='buy(${p.id})'>Buy</button></div>`;});
document.getElementById("products").innerHTML=html;});
function buy(id){fetch("http://localhost:3000/order",{method:"POST",headers:{"Content-Type":"application/json"},
body:JSON.stringify({product_id:id,quantity:1})}).then(()=>alert("Order Placed!"));}