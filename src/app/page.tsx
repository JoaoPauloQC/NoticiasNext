import FilterNews from "@/components/FilterNews";
import News from "@/components/News";
import Image from "next/image";
import { title } from "process";

export const metadata = {
  title: "Home"
}


export default function Home() {
  return (
    <section className="home">
      <div className="wrapper">
        <div className="home__container">  
          <div className="home__text pt-30">
            Notícias Relevantes
          </div>
          <FilterNews>
            
          </FilterNews>
         


        </div>
      </div>
    </section>
  );
}
