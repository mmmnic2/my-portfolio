import Link from "next/link";
import { contactList } from "./constances";

const ContactList = () => {
  return (
    <div className="flex items-center gap-6 mt-3 mb-6">
      {contactList.map((item) => (
        <Link
          href={item.pathname || '#'}
          key={item.name}
          className="w-10 h-10 border-2 border-primary rounded-[50%] p-2 transition-all duration-700 hover:bg-secondary"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default ContactList;
