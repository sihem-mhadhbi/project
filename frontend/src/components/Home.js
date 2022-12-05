import React from "react";

const Home = () => {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img
            src="https://i0.wp.com/goodmorninglovequote.com/wp-content/uploads/2020/10/Blood-Donation-quotes-Is-A-Great-Act-Of-Kindness-3-1.jpg?resize=940%2C529&ssl=1"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4F4f9FI_VNFx_Z8yOXSmRSjYs0p3EJEYFhTwGcWkk6ITtzFc7EICYL97Rohv7jeProKU&usqp=CAU"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8JC-i4kXZntNMBGpn8Lo5A65UlFocjjt-RODMusFpRfYnSMpY8PkLYgx8edvS1PXNrw&usqp=CAU"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="false"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="false"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Home;
