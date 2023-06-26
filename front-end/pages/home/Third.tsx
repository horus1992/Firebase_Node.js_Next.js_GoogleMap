import { useState } from "react";
import { NextPage } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layouts/Navbar';
import Map from '../../components/Map';
import Toolbar from "@/components/Toolbar/Toolbar";
import SetPin from "./SetPin";
import styles from "./main.module.css";
import EnterModal from "./EnterModal";
// import { useRouter } from "next/router";


const inter = Inter({ subsets: ['latin'] })

type Props = {
  title: string;
};

const Home: NextPage<Props> = ({ title }) => {
  const [places, setPlaces] = useState<any[]>([]);

  return (
    <div>
      <Navbar />
      <main className={`relative flex flex-col items-center justify-between ${inter.className}`}>
        <Map 
          canSet={false}
          canShowOthers={false}
          places={places}
          setPlaces={setPlaces}
        />
        <EnterModal />
        <Toolbar />
      </main>
    </div>
  )
}

export default Home;