import { useState } from "react";

import { DriverInfo } from "./components/DriverInfo";
import { TripMap } from "./components/TripMap";
import { TripDetails } from "./components/TripDetails";
import { RelaxationModal } from "./components/RelaxationModal";

import { demoDriver, demoTrip } from "./data/demoTrip";

export default function App() {
  // Состояние: открыта ли модалка релакса
  const [isRelaxOpen, setIsRelaxOpen] = useState(false);

  return (
    <div className="page">
      {/* Верхняя панель */}
      <header className="header">
        <h1 className="title">Taxi demo</h1>

        <button
          className="btn"
          onClick={() => setIsRelaxOpen(true)}
        >
          Open relax
        </button>
      </header>

      {/* Основной контент */}
      <main className="grid">
        <DriverInfo
          name={demoDriver.name}
          rating={demoDriver.rating}
          car={demoDriver.car}
        />

        <TripMap
          from={demoTrip.from}
          to={demoTrip.to}
        />

        <TripDetails
          etaMin={demoTrip.etaMin}
          price={demoTrip.price}
        />
      </main>

      {/* Модалка */}
      <RelaxationModal
        open={isRelaxOpen}
        onClose={() => setIsRelaxOpen(false)}
      />
    </div>
  );
}
