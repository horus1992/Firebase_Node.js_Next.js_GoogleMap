import { useState, useEffect } from "react";
import { NextPage } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layouts/Navbar';
import Map from '../../components/Map';
import Settings from "./Settings";
import styles from "./settings.module.css";
import Toolbar from "@/components/Toolbar/Toolbar";
import {getUsers} from "@/firebase/firestore/apis"


const inter = Inter({ subsets: ['latin'] })

type Props = {
  title: string;
};

const Home: NextPage<Props> = ({ title }) => {
  const [places, setPlaces] = useState<any[]>([]);
  const [users, setUsers] = useState<any>(null)
  useEffect(() => {
    getUsers().then((res:any) => {
      setUsers(res)
    })
  }, [])
  return (
    <div>
      <Navbar />
      <main className={`relative flex flex-col items-center justify-between ${inter.className}`}>
        <Map 
          canSet={false}
          canShowOthers={false}
          places={places}
          setPlaces={setPlaces}
          users={users}
        />
        <Settings />
        <Toolbar />
      </main>
    </div>
  )
}

export default Home;