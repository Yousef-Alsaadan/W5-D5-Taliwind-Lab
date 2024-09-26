import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container sm:container md:container lg:container xl:container 2xl:container  mx-auto">
        <div className="flex gap-10 mt-8 mb-10 mx-4 flex-col items-center lg:flex-row lg:mx-40 lg:items-start">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://aribadirect.com/img/slider/home-4/1.jpg"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-square">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-square">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-square">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-square">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div className="w-[100%] h-[100%] lg:w-[45%]">
            <img
              className="w-96 h-72 object-cover"
              src="data:image/jpeg;base64,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"
            />
          </div>
        </div>

        <div className="lg:mx-40 flex flex-col gap-4 mx-4 mb-4">
          <h1>Top Catogres of The Month</h1>
          <hr />
        </div>

        <div className="grid grid-cols-1 lg:mx-40 mx-4 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Cards
            img="https://m.media-amazon.com/images/I/41FlkaJO36L._AC_UF1000,1000_QL80_.jpg"
            type="Electronics"
            item1="TV"
            item2="Air condisen"
            item3="whasingmasine"
            item4="Audio"
            item5="office elcttronic"
          />
          <Cards
            img="https://m.media-amazon.com/images/I/41FlkaJO36L._AC_UF1000,1000_QL80_.jpg"
            type="Electronics"
            item1="TV"
            item2="Air condisen"
            item3="whasingmasine"
            item4="Audio"
            item5="office elcttronic"
          />
          <Cards
            img="https://m.media-amazon.com/images/I/41FlkaJO36L._AC_UF1000,1000_QL80_.jpg"
            type="Electronics"
            item1="TV"
            item2="Air condisen"
            item3="whasingmasine"
            item4="Audio"
            item5="office elcttronic"
          />
          <Cards
            img="https://m.media-amazon.com/images/I/41FlkaJO36L._AC_UF1000,1000_QL80_.jpg"
            type="Electronics"
            item1="TV"
            item2="Air condisen"
            item3="whasingmasine"
            item4="Audio"
            item5="office elcttronic"
          />
          <Cards
            img="https://m.media-amazon.com/images/I/41FlkaJO36L._AC_UF1000,1000_QL80_.jpg"
            type="Electronics"
            item1="TV"
            item2="Air condisen"
            item3="whasingmasine"
            item4="Audio"
            item5="office elcttronic"
          />
          <Cards
            img="https://m.media-amazon.com/images/I/41FlkaJO36L._AC_UF1000,1000_QL80_.jpg"
            type="Electronics"
            item1="TV"
            item2="Air condisen"
            item3="whasingmasine"
            item4="Audio"
            item5="office elcttronic"
          />
        </div>

        <div className="flex justify-between lg:mx-40 mx-4 border bg-slate-300 items-center">
          <div className="">
            <h1>Bose Blutooth</h1>
            <h1>Wirless Headphones</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              reiciendis quo tempore ut doloribus eligendi natus delectus in
              pariatur dignissimos, hic saepe repudiandae tempora officia
              quibusdam omnis aspernatur inventore amet!
            </p>
          </div>
          <div className="">
            <p>$260.50</p>
            <h2>$219.05</h2>

            <div>
              <button>shop Now</button>
            </div>
          </div>
          <div className="">
            <img
              style={{ mixBlendMode: "multiply" }}
              src="https://assets.bosecreative.com/m/15206db046d8fa8a/webimage-SLAEWII_CC_006_RGB.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
