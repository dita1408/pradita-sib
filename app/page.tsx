import "./insho-style.css";
import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatKerja from "./components/riwayarKerja";
import FavColor from "./components/favColor";

export default function Gallery () {
  return (
    <section>
    <Hero />
    <RiwayatPendidikan />
    <RiwayatKerja />
    <FavColor />
    </section>
  );
}