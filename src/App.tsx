import { DriverInfo } from "./components/DriverInfo";
import { TripMap } from "./components/TripMap";
import { TripDetails } from "./components/TripDetails";
import { RelaxationModal } from "./components/RelaxationModal";

export default function App() {
  return (
    <>
      <DriverInfo />
      <TripMap />
      <TripDetails />
      <RelaxationModal />
    </>
  );
}
