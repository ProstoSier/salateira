import { useState } from "react";
import styles from "./popup.module.css";
import fresh from "../pages/img/fresh.png";

export function Popup() {

    const [popup, setPopup] = useState(false);

    const togglePopup = () => {
        setPopup(!popup);
    }

    return (
        <>
        {popup && (
            <div className={styles.popup}>
                <div className={styles.popupOverlay} onClick={togglePopup}>
                    
                </div>
                <div className={styles.popupContent}>
                    <button onClick={togglePopup} className={styles.popupClose}>
                        x
                    </button>
                    <img className={styles.popupContentImg} src={fresh} alt="fresh" />
                    <div className={styles.popupContentInfo}>
                        <h2 className={styles.popupContentName}>
                            Fresh
                        </h2>
                        <p className={styles.popupContentDescriptions}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt expedita molestias veritatis inventore in odio voluptates eos deleniti dolores culpa blanditiis atque ea iste consequatur, dignissimos ut incidunt quae.
                        </p>
                        <span className={styles.popupContentWeight}>
                            300 g.
                        </span>              
                    </div> 
                    <div className={styles.popupContentFooter}>
                        <span className={styles.popupContentPrice}>
                            159 grn.
                        </span>
                        <div className={styles.popupContentActions}>
                            <input type="number" className={styles.popupContentNumber}/>
                            <button className={styles.popupContentAdd}>
                                Add
                            </button>
                        </div>
                    </div>             
                </div>
            </div>
        )}
            
        </> 
    )
}