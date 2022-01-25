import { GradientButton } from '../../buttons'
import styles from './NftCard.module.scss'
import { MdHistory } from 'react-icons/md'
import Link from 'next/link'

/**
 * @class NftCard
 */
function NftCard () {
  return (
    <div className={styles.nftCard}>
      <div className={styles.nftCard_img_container}>
        <a href='Item-details.html'>
          <img src='https://raroin.creabik.com/assets/img/items/item_2.png' alt='item img' />
        </a>
      </div>
      <div className={styles.nftCard__content}>
        <h3 className={styles.nftCard_title}>Colorful Abstract Painting</h3>
      </div>
      <div className={styles.nftCard_footer}>
        <Link href='#'>
          <a className={styles.nftCard_history}>
            <MdHistory size={25} />
            <p>View History</p>
          </a>
        </Link>
        <p className={styles.nftCard_price}>2.45 ETH</p>
        <GradientButton />
      </div>
    </div>
  )
}

export default NftCard
