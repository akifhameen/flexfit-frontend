import React from "react";
import "./storeSupplements.css";
import item from "../assets/images/StoreEquipment.png";

const StoreEquipment = () => {
  const temp = [1, 2, 3, 4, 5];
  return (
    <div class="storeDetails__main-div">
      <p class="storeDetails__p1">Equipment Area</p>
      <p class="storeDetails__p2">Available Equipment</p>
      <p class="storeDetails__p3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        sequi, explicabo deleniti quaerat nihil debitis harum fugit rem
        molestias, inventore dolore eligendi cumque, dolores dolorum commodi.
        Quibusdam error id ad.
      </p>
      <div class="storeDetails__card-div">
        {temp.map((index) => (
          <div class="storeDetails__card-item" key={index}>
            <img src={item} />
            <p class="storeDetails__p4">Whey Proteins</p>
            <p class="storeDetails__p5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <p class="storeDetails__p6">$ 1500.00</p>
            <p class="storeDetails__p7">In Stock</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreEquipment;
