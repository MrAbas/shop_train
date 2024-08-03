import { Breadcrumbs } from "../../components/Breadcrumbs";
import bgEmptyHeart from "../../shared/assets/icons/FavoritesPage/bgEmptyHeart.png";
import styles from "./FavoritesPage.module.scss";

export default function FavoritesPage() {
  return (
    <main>
      <div className={styles.favoritesPageWrapper}>
        <Breadcrumbs />
        <section>
          <div className={styles.container}>
            <div className={styles.emptyCart}>
              <img src={bgEmptyHeart} alt="" />

              <div className={styles.emptyCartInner}>
                <div className={styles.innerHeader}>
                  <span>Ой...</span>
                  <span>Кажется здесь ещё пусто...</span>
                </div>

                <div className={styles.innerBody}>
                  <span className={styles.subtitle}>В избранном ничего нет</span>
                  <span className={styles.description}>
                    Мы уверены что в нашем каталоге вы найдете то, что вам понравится!
                  </span>
                </div>

                <div className={styles.emptyCartLinks}>
                  <button className={styles.linkLeft} type="button">
                    Перейти в каталог
                  </button>
                  <button className={styles.linkRight} type="button">
                    Вернуться на главную
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
