import { onValue, ref } from "firebase/database"
import { useEffect, useState } from "react"
import { db } from "./configs/firebase"
import CardData from "./components/CardData.jsx"

// Impor ikon dari lucide-react
import { Thermometer, Droplets, Eye, Waves } from "lucide-react"

function App() {
  const [data, setData] = useState({}) // Inisialisasi sebagai objek kosong

  useEffect(() => {
    const query = ref(db, "data/")
    return onValue(query, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val())
      } else {
        setData({}) // Atur ke objek kosong jika tidak ada data
      }
    })
  }, [])

  return (
    <div className="w-[100vw] min-h-screen bg-base-100 p-4 sm:p-8 flex flex-col items-center">
      <main className="w-full max-w-5xl">
        {/* Bagian Hero dengan Gambar Latar */}
        <div
          className="hero min-h-[300px] rounded-2xl shadow-lg"
          style={{
            backgroundImage: "url(/bg.jpeg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-2 text-4xl font-bold text-white">Gua Leang Pettae</h1>
              <p className="mb-5 text-lg text-gray-300 font-medium">Maros, Sulawesi Selatan</p>
            </div>
          </div>
        </div>

        {/* Judul Dashboard */}
        <h1 className="my-8 text-2xl font-bold text-base-800 text-center">
          Monitoring Kualitas Air
        </h1>

        {/* Kontainer untuk Kartu Data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <CardData
            icon={<Thermometer size={24} />}
            title="Suhu"
            sensorName="DHT22"
            value={data.suhu}
            unit="°C"
          />
          <CardData
            icon={<Droplets size={24} />}
            title="Kelembapan"
            sensorName="DHT22"
            value={data.kelembaban}
            unit="%"
          />
          <CardData
            icon={<Waves size={24} />}
            title="CO2"
            sensorName="MQ135"
            value={data.CO2}
            unit="ppm"
          />
        </div>
      </main>
    </div>
  )
}

export default App
