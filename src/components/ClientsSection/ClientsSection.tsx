import Image from "next/image";
import client1Logo from "@/assets/clients/company-1.svg";
import client2Logo from "@/assets/clients/company-2.svg";
import client3Logo from "@/assets/clients/company-3.svg";
import styles from "./ClientsSection.module.scss";

const clientsData = [
  {
    id: 1,
    name: "Client 1",
    image: client1Logo,
  },
  {
    id: 2,
    name: "Client 2",
    image: client2Logo,
  },
  {
    id: 3,
    name: "Client 3",
    image: client3Logo,
  },
];

const ClientsSection = () => {
  return (
    <div className={styles.clientsSection}>
      <div className={styles.clients}>
        {clientsData.map((client) => (
          <div key={client.id} className={styles.client}>
            <Image
              src={client.image}
              alt={client.name}
              className={styles.clientImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
