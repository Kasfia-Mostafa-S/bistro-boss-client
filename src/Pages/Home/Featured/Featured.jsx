import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        heading="Check it out"
        subHeading="Featured Item"
      ></SectionTitle>

      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pt-12 py-20 px-36 ">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2024</p>
          <p className="uppercase">Where I can get some ?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis suscipit deleniti dicta aperiam unde ducimus officiis
            iure. Fugit iste provident recusandae, sit dolorem officia dolor
            eveniet quos maiores cupiditate dolore odit earum error possimus
            explicabo, ad nesciunt in rerum quisquam vitae debitis nemo
            repellat? Nostrum fugiat modi consequatur doloribus autem!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
