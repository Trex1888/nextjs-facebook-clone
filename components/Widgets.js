import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  { src: "https://links.papareact.com/f0p", name: "Mick Jagger" },
  { src: "https://links.papareact.com/kxk", name: "Mickey Mantle" },
  { src: "https://links.papareact.com/zvy", name: "John Lennon" },
  { src: "https://links.papareact.com/snf", name: "B.B. King" },
  { src: "https://links.papareact.com/d0c", name: "Elton John" },
  { src: "https://links.papareact.com/6gg", name: "Serena Williams" },
  { src: "https://links.papareact.com/r57", name: "Fernando Tatis" },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
