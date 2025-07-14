import News from "@/components/News";
import Image from "next/image";



export default function Home() {
  return (
    <section className="home">
      <div className="wrapper">
        <div className="home__container">  
          <div className="home__text pt-30">
            Notícias Relevantes
          </div>
          <News />


        </div>
      </div>
    </section>
  );
}
