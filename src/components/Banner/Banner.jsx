import banner from "./banner.jpg";

function Banner() {
  return (
    <section>
      <div
        className="hero h-96 bg-accent bg-right-top bg-no-repeat"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-left">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Challenge React</h1>
            <p className="mb-5">
              Este challenge es una forma de aprendizaje. Es un mecanismo donde
              podrás comprometerte en la resolución de un problema para poder
              aplicar todos los conocimientos adquiridos en la formación React.
            </p>
            <button className="btn btn-primary text-2xl">Front End</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
