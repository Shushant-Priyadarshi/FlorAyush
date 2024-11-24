import React from 'react'
import Navbar from '../navbar'
import HtmlPage from './Supplypage'
import { Helmet } from 'react-helmet'
const Order = () => {
  return (
    <>
    <div style={{ marginTop: "-4.4%" }} className="min-h-screen z-50  flex  flex-col">
      <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <title>FlorAyush</title>
        <link rel="icon" href="https://images.unsplash.com/photo-1725868904830-165e35d22ae6?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <script>
    {`// Example JavaScript for the hamburger menu
    document.getElementById('menu-btn').addEventListener('click', function() {
      // Add logic to toggle the menu here
    });
    let flag = 0;

function addtocart() {
  flag += 1;
  console.log(flag);
  // Update the value attribute of the <i> element
  let badge = document.getElementById('cart-value');
  badge.setAttribute('value', flag);
}

function cartadd() {
  let btn = document.querySelector(".btncart");
  btn.removeEventListener("click", addtocart); // Avoid multiple listeners
  btn.addEventListener("click", addtocart);
}

// Set up the event listener when the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  cartadd();
});`}

  </script>
      </Helmet>
    {/* <Navbar mt="mt-5"/><br /><br /><br /> */}
    <h1 className='text-white'>This is Plants Order Page</h1>
    <HtmlPage />
    </div>
    </>
  )
}

export default Order