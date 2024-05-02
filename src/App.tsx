import Logo from "./assets/Cabanossy-Snurra_nobg.svg";
import Portrait from "./assets/portrait.jpg";

function App() {
  return (
    <div className="items-center ">
      <div className="  gap-8 grid grid-cols-1 md:grid-cols-2 md:gap-8 ">
        <div className="bg-white py-24 col-span-2 flex flex-col items-center p-3 md:p-16">
          <img
            src={Logo}
            className={"h-24 md:h-32 shrink rounded-full"}
            alt="logo"
            style={{ filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));" }}
          />
          <div className="flex flex-col py-12 text-center gap-5">
            <h1 className=" text-3xl md:text-6xl font-bold ">
              Web och mjukvara
            </h1>
            <p className="text-md md:text-xl max-w-[700px]">
              Vi brinner för webbutveckling och kod. För att webben är en
              fantastisk plats att vara på.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 py-12 md:py-24 ">
        <div className="max-w-[1300px] p-3 md:p-0">
          <h1 className="text-2xl  md:text-4xl font-bold text-center md:text-left">
            Våra affärsområden
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 ">
            <div className="bg-white rounded-lg">
              <h1 className="text-2xl font-bold px-8 py-4 bg-blue-300 rounded-t-lg ">
                Klassisk webbutveckling
              </h1>
              <p className="p-8  ">
                Detta är antagligen vad du som reklambyrå eller företag är
                intresserad av. Vanligtvis handlar det om att bygga en hemsida
                eller en webbapplikation för att dela med dig av ditt ett
                varumärke eller budskap.
              </p>
            </div>
            <div className="bg-white rounded-lg">
              <h1 className="text-2xl font-bold p-8 bg-blue-300 rounded-t-lg">
                Affärsapplikationer
              </h1>
              <p className="p-8">
                Vi bygger applikationer som hjälper dig att driva ditt företag
                framåt. Det kan vara allt från en enkel kunddatabas till en
                komplex affärssystem.
              </p>
            </div>
            <div className="bg-white rounded-lg">
              <h1 className="text-2xl font-bold p-8 bg-blue-300 rounded-t-lg">
                E-handel
              </h1>
              <p className="p-8">
                Vi bygger e-handelslösningar som hjälper dig att sälja dina
                produkter online. Vi kan hjälpa dig att komma igång med en enkel
                webbshop eller en mer avancerad e-handelslösning.
              </p>
            </div>
            <div className="bg-white rounded-lg">
              <h1 className="text-2xl font-bold p-8 bg-blue-300 rounded-t-lg">
                Företagskonsulting
              </h1>
              <p className="p-8">
                Många företag har idag möjlighet att använda sig av digitala
                verktyg för att nå sina mål. Vi erbjuder konsulttjänster för att
                lyckas med detta.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-12 md:pb-40 gap-4  p-3 md:p-0">
        <div>
          <div className="max-w-[1300px] min-h-96 grid grid-cols-1 md:grid-cols-2 rounded-xl bg-white">
            <img
              src={Portrait}
              className="object-contain rounded-t-lg md:rounded-r-none md:rounded-l-xl"
            />
            <div className="p-5 md:p-8 flex flex-col gap-4">
              <h3 className="text-4xl font-bold md:mb-2">
                Vi håller oss uppdaterade
              </h3>
              <p className="md:text-xl">
                Jag, Adam, och mina samarbetspartners håller oss ständigt
                uppdaterade med den senaste tekniken och trenderna inom
                webbutveckling. Vi är passionerade om att skapa webbplatser som
                är moderna och användarvänliga.
              </p>
              <small>
                <a href="https://www.linkedin.com/in/adam-liljenberg/">
                  Läs mer om mig på LinkedIn
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center  pb-48 gap-4 p-3 pb-12 md:p-0 md:pb-24">
        <h1 className="text-2xl font-bold pb-6 text-center md:text-left">
          Vi presenterar några webbplatser:
        </h1>

        <div className="max-w-[1300px]">
          <div className="gap-4 grid grid-cols-1">
            <div className="bg-white rounded-lg p-8 max-w-[1000px]">
              <h1 className="text-2xl font-bold ">Vätterledens Invest</h1>
              <p className="mb-2">
                Tillsammans med designers från marknadsbyrån{" "}
                <strong>2028</strong> skapade vi en hemsida för Vätterledens
                Invest. Vi är mycket nöjda med resultatet:
              </p>
              <a
                className="bg-blue-200 p-1 px-3 rounded-lg "
                target="_blank"
                href="https://viab.se"
              >
                Besök hemsidan
              </a>
            </div>
            <div className="bg-white rounded-lg p-8 max-w-[1000px]">
              <h1 className="text-2xl font-bold ">Supai Kitchen</h1>
              <p className="mb-2">
                Supai beskriver sig själva som en stark kraft i göteborgs
                matvärld och vi är glada att ha fått möjligheten arbeta
                tillsammans.
              </p>
              <a
                className="bg-blue-200 p-1 px-3 rounded-lg "
                target="_blank"
                href="https://supai.se/curryketchup/"
              >
                Kolla in deras curryketchup
              </a>
            </div>
            <div className="bg-white rounded-lg p-8 max-w-[1000px]">
              <h1 className="text-2xl font-bold ">VHAB</h1>
              <p className="mb-2">
                VHAB förvaltar och investerar i bland annat företag och
                fastigheter. Vi har tillsammans med webb-designers hjälpt dem
                att skapa en hemsida som speglar deras verksamhet.
              </p>
              <a
                className="bg-blue-200 p-1 px-3 rounded-lg "
                target="_blank"
                href="https://supai.se/curryketchup/"
              >
                Ta en titt
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center py-20 gap-4 bg-white">
        <div className="max-w-[1300px] grid grid-cols-3">
          <div>
            <h3 className="text-4xl font-bold mb-2">
              isol.se - Webverktyg för sveriges isolerare
            </h3>
            <p>
              Tillsammans med isoleringsföretag har vi utvecklat en tjänst för
              att underlätta deras arbete. Företagen som använder sig av
              tjänsten kan hantera projekt, rapportering, material och mycket
              mer.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
