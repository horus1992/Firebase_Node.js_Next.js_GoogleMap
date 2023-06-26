import React, { useState } from "react";
import styles from "./layouts.module.css";
import { useRouter } from "next/router";
import signOut from "@/firebase/auth/signout"


const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(prevState => !prevState);
  };
  const router = useRouter();

  const goInquiry = () => {
    router.push('/inquiry');
  }
  const logout = async() => {
    localStorage.removeItem("Idtoken");
    await signOut()
    router.push('/admin');
  }
  return (
    <>
      <input type="checkbox" className={styles.checkbox} />
      <label htmlFor="menu" className={styles.icon} onClick={handleMenuClick}>
        <div className={styles.menu}></div>
      </label>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <ul>
          <h1>MENU</h1>
          <li>お知らせ</li>
          <li>利用規約</li>
          <li onClick={goInquiry}>お問合せ</li>
          <li onClick={logout}>ログアウト</li>
        </ul>
      </nav>
      {/* {isOpen ?
        (
          <div className={styles.sidebarMenu}>
            <div>
              <ul>
                <h1>MENU</h1>
                <li>お知らせ</li>
                <li>利用規約</li>
                <li onClick={goInquiry}>お問合せ</li>
                <li>ログアウト</li>
              </ul>

            </div>
          </div>
        )
        :
        ""
      } */}
    </>

  )
}

export default Sidebar