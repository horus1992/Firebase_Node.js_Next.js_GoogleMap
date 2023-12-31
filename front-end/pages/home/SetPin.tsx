import * as React from 'react';
import { useState } from 'react';
import { NextPage } from 'next';
import styles from "./main.module.css";
import { useRouter } from "next/router";
import { addPins } from "@/firebase/firestore/apis"

type Props = {
  places: Array<any>
};


const SetPin: NextPage<Props> = ({places}) => {


  const router = useRouter();

  const goFourth = async () => {
    await addPins(places)
    router.push('../home/Fourth');
  }
  function handleBackClick() {
    router.back();
  }

  return (
    <>
      {
        <div className={styles.pinSetting}>
          <div>
            <h1>ピンを設定しました</h1>
          </div>
          <div className={styles.btn}>
            <button className={styles.setPin} onClick={goFourth}>設定したピンを確認する</button>
            <button className={styles.next} onClick={handleBackClick} >閉じる</button>
          </div>
        </div>
      }
    </>
  )
}
export default SetPin