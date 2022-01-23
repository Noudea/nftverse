import styles from './NftCard.module.scss'

/**
 * @class NftCard
 */
function NftCard () {
  return (
    <div className={styles.nftCard}>
      <div className={styles.card_img_container}>
        <a href='Item-details.html'>
          <img src='https://raroin.creabik.com/assets/img/items/item_1.png' alt='item img' />
        </a>
        <a href='#' class='likes space-x-3'>
          <i class='ri-heart-3-fill' />
          <span class='txt_sm'>1.2k</span>
        </a>
      </div>
      <div className={styles.nftCard__content}>
        <h3 className={styles.nftCard_title}>Colorful Abstract Painting</h3>
        <div>
          <p>price</p>
        </div>
      </div>
      <div className={styles.hr} />
      <div className={styles.nftCard_footer}>
        <p>View History</p>
        <p>Place Bid</p>
      </div>
    </div>
  )
}

export default NftCard
