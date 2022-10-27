import Cards from "../components/group/Cards";
import CardHeader from "../components/UI/CardHeader";
import Botonera from "../components/home/Botonera";
export default function Home() {
  return (
    <>
      <CardHeader
        tax="INGRESO 2023"
        titulo="Información sobre preinscripciones para las carreras de grado"
        id="2"
      />

      <Cards />
      <br />
      <Botonera />
      <br />
    </>
  );
}
