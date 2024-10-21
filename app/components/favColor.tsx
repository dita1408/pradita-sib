"use client";

import { BARREL_OPTIMIZATION_PREFIX } from "next/dist/shared/lib/constants";
import { useState} from "react";

export default function FavColor() {
    // useState warna untuk default
    const [warna,setWarna] = useState("Biru");

    return (
        <div className="container mx-auto p-4 text-center">
        <h1>Warna Favorit saya adalah {warna}</h1>
        <hr className="m-10"/>
        <p>Ubah state warna ke warna</p>
        <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setWarna ("Merah")}
        >
        merah
        </button>
        <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>setWarna ("kuning")}
        >kuning
        </button>
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>setWarna ("biru")}
        >biru
        </button>
        <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>setWarna ("hijau")}
        >hijau
        </button>
        <button
        className="bg-purple-500 hover:bg-purple-700 text-whie font-bold py-2 px-4 rounded"
        onClick={()=>setWarna ("ungu")}
        >ungu

        </button>
        </div>
    );
    
}