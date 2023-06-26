import { NextPage } from 'next';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import Navbar from '@/components/layouts/Navbar';
import Registeration from './Registeration';
import styles from './registeration.module.css';
import Toolbar from "@/components/Toolbar/Toolbar";
import Map from '@/components/Map';
import {getUsers} from "@/firebase/firestore/apis"

const inter = Inter({ subsets: ['latin'] })

type Props = {
  title: string;
};

const Home: NextPage<Props> = ({ title }) => {

  const [users, setUsers] = useState<any>(null)
  const [places, setPlaces] = useState<any[]>([]);
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
        <Registeration />
        <Toolbar />
      </main>
    </div>
  )
}

export default Home;