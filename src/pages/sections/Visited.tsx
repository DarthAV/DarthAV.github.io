import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { SectionHeader } from "../../components/SectionHeader";

const countryList = [
  "United States of America",
  "Canada",
  "Mexico",
  "India",
  "United Kingdom",
  "France",
  "Peru",
  "Iceland",
  "Australia",
];
const countryListCodes = ["US", "CA", "MX", "IN", "GB", "FR", "PE", "IS", "AU"];
export function Visited() {
  const visitedCountriesCount = countryList.length;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <SectionHeader title="" subtitle="" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <div className="flex flex-col items-center justify-center gap-4 h-auto mt-8">
            <p className="text-4xl font-bold">Countries Visited</p>
            <p className="text-6xl font-bold">{visitedCountriesCount}</p>
            <Button color="primary" onPress={onOpen}>
              View List
            </Button>
          </div>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Countries Vistied
                  </ModalHeader>
                  <ModalBody>
                    <div className="flex flex-col gap-1">
                      {countryList.map((country, index) => (
                        <p key={index}>{country}</p>
                      ))}
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>

        <div>
          <Map />
        </div>
      </div>
    </div>
  );
}

function Map() {
  let mapSrc =
    "https://visitedplaces.com/embed/?map=world&projection=geoMercator&theme=dark-blue&water=1&graticule=0&names=1&duration=0&placeduration=60&slider=1&autoplay=0&autozoom=none&autostep=0&home=-&places=~";
  return (
    <div>
      <iframe
        className="w-full h-96"
        src={`${mapSrc}${countryListCodes.join("_")}`}
        title="Visited Places Map"
      ></iframe>
    </div>
  );
}
