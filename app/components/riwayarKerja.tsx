export default function RiwayatKerja() {
    return (
        <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl">Riwayat pekerjaan</h2>
        <RowRiwayatKerja perusahaan="PT Mandala525" jabatan="KREATOR" tahun="2020"/>
        <RowRiwayatKerja perusahaan="MyBank" jabatan="Data Analis" tahun="2021"/>
        <RowRiwayatKerja perusahaan="Qitarabu Ekspress" jabatan="admin" tahun="2022"/>
        <RowRiwayatKerja perusahaan="PT Changsin" jabatan="Staf Administrasi" tahun="2023"/>
      </div>
    );
}
interface RowRiwayatKerjaProps
  {
  perusahaan:String;
  jabatan:String;
  tahun:String;
}
function RowRiwayatKerja(props: RowRiwayatKerjaProps) {
  return (
    <div className="border-2 border-indigo-500/75 rounded-lg bg-slate-400 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4 ">{props.perusahaan}</div>
            <div className="col-span-12 md:col-span-4">{props.jabatan}</div>
            <div className="col-span-12 md:col span-4">{props.tahun}</div>
        </div>
        </div>
        </div>
  );
}