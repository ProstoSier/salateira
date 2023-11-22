import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import styles from "./menu.module.css";
import fresh from "./img/fresh.png";
import salad from "./img/salad.png";
import  { Popup } from "../components/Popup";
import { useState } from "react";

export function Menu() {

    const [popup, setPopup] = useState(false);

    const togglePopup = () => {
        setPopup(!popup)
    }

    return (
        <div className={styles.menuContent}>
            <PageHeader />
            <main className={styles.menuMain}>
                <div className={styles.menuDishesCategories}>
                    <ul className={styles.listDishesCategories}>
                        <li className={styles.listDishesCategoriesItem}><Link className={styles.listDishesCategoriesItemLink} to={'/'}>Popular</Link></li>
                        <li className={styles.listDishesCategoriesItem}><Link className={styles.listDishesCategoriesItemLink} to={'/'}>Salads</Link></li>
                        <li className={styles.listDishesCategoriesItem}><Link className={styles.listDishesCategoriesItemLink} to={'/'}>Pasts</Link></li>
                        <li className={styles.listDishesCategoriesItem}><Link className={styles.listDishesCategoriesItemLink} to={'/'}>Croissants</Link></li>
                        <li className={styles.listDishesCategoriesItem}><Link className={styles.listDishesCategoriesItemLink} to={'/'}>Doners</Link></li>
                        <li className={styles.listDishesCategoriesItem}><Link className={styles.listDishesCategoriesItemLink} to={'/'}>Soups</Link></li>
                        <li className={styles.listDishesCategoriesItem}><Link className={styles.listDishesCategoriesItemLink} to={'/'}>Drinks</Link></li>
                        <li className={styles.listDishesCategoriesItem}><Link className={styles.listDishesCategoriesItemLink} to={'/'}>Desserts</Link></li>
                        <li className={styles.listDishesCategoriesItem}><Link className={styles.listDishesCategoriesItemLink} to={'/'}>Hummus</Link></li>
                    </ul>
                </div>
                <div className={styles.menuCards}>
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
                    <button className={styles.menuBtn} onClick={togglePopup}>
                    
                    <div className={styles.menuCard}>
                        <img className={styles.menuCardImg} src={fresh} alt="fresh" />
                        <h2 className={styles.menuCardName}>
                            fresh
                        </h2>
                        <div className={styles.menuCardOther}>
                            <span className={styles.menuCardPrice}>
                                150 grn.
                            </span>
                            <span className={styles.menuCardWeight}>
                                300 g.
                            </span>
                        </div>
                    </div>
                    </button>
                    <button className={styles.menuBtn} onClick={togglePopup}>
                    <div className={styles.menuCard}>
                        <img className={styles.menuCardImg} src={salad} alt="salad" />
                        <h2 className={styles.menuCardName}>
                            Salad
                        </h2>
                        <div className={styles.menuCardOther}>
                            <span className={styles.menuCardPrice}>
                                150 grn.
                            </span>
                            <span className={styles.menuCardWeight}>
                                200 g.
                            </span>
                        </div>
                    </div>
                    </button>
                    <button className={styles.menuBtn} onClick={togglePopup}>
                    <div className={styles.menuCard}>
                        <img className={styles.menuCardImg} src={fresh} alt="fresh" />
                        <h2 className={styles.menuCardName}>
                            fresh
                        </h2>
                        <div className={styles.menuCardOther}>
                            <span className={styles.menuCardPrice}>
                                150 grn.
                            </span>
                            <span className={styles.menuCardWeight}>
                                300 g.
                            </span>
                        </div>
                    </div>
                    </button>
                    <button className={styles.menuBtn} onClick={togglePopup}>
                    <div className={styles.menuCard}>
                        <img className={styles.menuCardImg} src={fresh} alt="fresh" />
                        <h2 className={styles.menuCardName}>
                            fresh
                        </h2>
                        <div className={styles.menuCardOther}>
                            <span className={styles.menuCardPrice}>
                                150 grn.
                            </span>
                            <span className={styles.menuCardWeight}>
                                300 g.
                            </span>
                        </div>
                    </div>
                    </button>
                    <button className={styles.menuBtn} onClick={togglePopup}>
                    <div className={styles.menuCard}>
                        <img className={styles.menuCardImg} src={salad} alt="salad" />
                        <h2 className={styles.menuCardName}>
                            Salad
                        </h2>
                        <div className={styles.menuCardOther}>
                            <span className={styles.menuCardPrice}>
                                150 grn.
                            </span>
                            <span className={styles.menuCardWeight}>
                                200 g.
                            </span>
                        </div>
                    </div>
                    </button>
                    <button className={styles.menuBtn} onClick={togglePopup}>
                    <div className={styles.menuCard}>
                        <img className={styles.menuCardImg} src={fresh} alt="fresh" />
                        <h2 className={styles.menuCardName}>
                            fresh
                        </h2>
                        <div className={styles.menuCardOther}>
                            <span className={styles.menuCardPrice}>
                                150 grn.
                            </span>
                            <span className={styles.menuCardWeight}>
                                300 g.
                            </span>
                        </div>
                    </div>
                    </button>
                </div>
            </main>
            <footer className={styles.menuFooter}>

            </footer>
        </div>
    );
}