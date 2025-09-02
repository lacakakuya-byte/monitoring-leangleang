import React from "react"

export default function CardData({ icon, title, sensorName, value, unit }) {
  // Menampilkan 'Loading...' jika data belum tersedia
  const displayValue = value !== undefined && value !== null ? value : "..."

  return (
    <div className="card w-full bg-gray-800 shadow-md transition-transform duration-300 hover:scale-105">
      <div className="card-body p-4">
        <div className="flex flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
          {/* Bagian Kiri: Ikon dan Teks */}
          <div className="flex items-center space-x-4">
            <div className="rounded-lg bg-purple-100 p-3 text-purple-600">
              {icon}
            </div>
            <div>
              <p className="font-semibold text-base-700">{title}</p>
              <p className="text-sm text-base-500">{sensorName}</p>
            </div>
          </div>
          {/* Bagian Kanan: Data dan Unit */}
          <div className="text-center sm:text-right">
            <h2 className="text-2xl font-bold">
              {displayValue}
              <span className="text-lg font-medium text-gray-500 ml-1">{unit}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
