import { CategoryContainer } from "../../components/CategoryContainer/CategoryContainer.jsx";
import Banner from "../../components/Banner/Banner.jsx";

function Inicio() {
  return (
    <div className={"w-full"}>
      <Banner className={"w-full"} />
      <section className={"flex flex-col w-full gap-10 my-2"}>
        <CategoryContainer />
      </section>
    </div>
  );
}

export default Inicio;
