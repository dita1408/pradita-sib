import foto from "../dita.jpeg";

function Profile(){
  return <img src={foto.src} alt="Pradita Hafsari Profile" className="fotoku" />;
}

export default function Hero(){
    return(
        <div className="container mx-auto p-2 text-center">
        <h1 className="text-gray-300 font-bold">CV ONLINE</h1>
        <h1 className="text-3x1">Pradita Hafsari</h1>
        <Profile/>
        <p>
          Saya adalah seorang mahasiswa aktif jurusan sistem informasi di universitas Ma'soem
        </p>
      </div>
    );
    
}


