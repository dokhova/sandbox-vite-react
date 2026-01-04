import { useState } from "react";
import { DriverInfo } from "./components/DriverInfo";
import { TripMap } from "./components/TripMap";
import { TripDetails } from "./components/TripDetails";
import { RelaxationModal } from "./components/RelaxationModal";

export default function App() {
  const [isRelaxOpen, setIsRelaxOpen] = useState(false);

  return (
    <div className="page">
      <header className="header">
        <h1 className="title">Taxi demo</h1>
        <button className="btn" onClick={() => setIsRelaxOpen(true)}>
          Open relax
        </button>
      </header>

      <main className="grid">
        <DriverInfo />
        <TripMap />
        <TripDetails />
      </main>

      <RelaxationModal
        open={isRelaxOpen}
        onClose={() => setIsRelaxOpen(false)}
      />
    </div>
  );
}
