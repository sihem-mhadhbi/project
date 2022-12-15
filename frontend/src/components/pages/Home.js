import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images-ext-2.discordapp.net/external/PXzhJeM6B5QOnjS4it1J2J4NAuQCBDIjMlk7i568KRQ/https/i.enkiquotes.com/ftbb0_giHD5skRDKT4tZkefq8-k%3D/400x0//images/2016/09/86f411978824412ef781793f4b6ed22b.png"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="100%"
              height="100%"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images-ext-2.discordapp.net/external/jigS4LgT0nW8_fr_6d8gnMR8TJZagRTnVFOSb_kvV-I/https/thequotely.com/wp-content/uploads/2022/06/If-youre-a-blood-donor-youre-a-hero-to-someone-somewhere-who-received-your-1024x576.png?width=722&height=406"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="100%"
              height="100%"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.vtiger.com/blog/wp-content/uploads/2022/07/Blood-donation-banner-image.png"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="100%"
              height="100%"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container marketing">
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Blood Donation Is A Great
              <span className="text-muted"> Act Of Kindness.</span>
            </h2>
            <p className="lead">
              It Is Not Just About Giving Blood, But It Is An Act Of Kindness
              That Saves The Lives Of Hundreds Of People. These Fifteen Minutes
              Of Your Life Can Save Someone’s Entire Life.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src="https://ih1.redbubble.net/image.2198209821.8346/st,small,507x507-pad,600x600,f8f8f8.jpg"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="100%"
              height="100%"
              alt="..."
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              Be Grateful And
              <span className="text-muted"> Donate Blood.</span>
            </h2>
            <p className="lead">
              Give To People From What God Has Provided You. It Will Surely Come
              Back To You With Greater Value.
            </p>
          </div>
          <div className="col-md-5">
            <img
              src="https://img.freepik.com/premium-vector/every-blood-donor-is-hero-blood-donation-quote-typography-quote-lettering_558159-594.jpg?w=2000"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="100%"
              height="100%"
              alt="..."
            />
          </div>
        </div>
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Be Brave And
              <span className="text-muted"> Donate Blood.</span>
            </h2>
            <p className="lead">
              You Can’t Even Imagine That Donating One Bag Of Blood Can Be So
              Beneficial To The Human Race. Donating The Blood Without Expecting
              Or Asking For Any Money Or Gesture Is A Great Act Of Kindness, And
              If You Are 18 Years Old Or Above, You Should Definitely Take Part
              In This Act Of Kindness.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src="https://res.cloudinary.com/teepublic/image/private/s--tQn6v0Kt--/c_crop,x_10,y_10/c_fit,w_998/c_crop,g_north_west,h_1260,w_1008,x_-5,y_-112/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1008/fl_layer_apply,g_north_west,x_-5,y_-112/bo_126px_solid_white/e_overlay,fl_layer_apply,h_1260,l_Misc:Art%20Print%20Bumpmap,w_1008/e_shadow,x_6,y_6/c_limit,h_1134,w_1134/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1621424376/production/designs/21937604_0.jpg"
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="100%"
              height="100%"
              alt="..."
            />
          </div>
        </div>
      </div>
      <hr className="featurette-divider" />
      <footer className="container">
        <p className="float-end">
          <a href="#">Back to top</a>
        </p>
        <p>
          &copy; 2022–2023 Sihem&Ines, Inc. &Sihem; <a href="#">Privacy</a>
          &Ines; <a href="#">Terms</a>
        </p>
      </footer>
    </div>
  );
};
export default Home;
