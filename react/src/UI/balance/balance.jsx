import {useState} from "react";
import {getBalance} from "../../features/getBalance/getBalance.jsx";
import styles from "./styles.module.css"
import {logout} from "../../features/logout/logout.jsx";

export const Balance = ({setAuth}) => {
    const [balance, setBalance] = useState(0)

    getBalance({setBalance})

    const handleClick = ()=> {
        logout({setAuth})
    }


    return (
        <div className={styles.container}>
            <img src="" alt=""/>
            <p>Баланс: {balance}</p>
            <p>Посмотреть инвентарь</p>
            <p style={{
                textDecoration: "underline",
                cursor: "pointer",

            }} onClick={handleClick}>Выйти с аккаунта</p>
        </div>
    )
}