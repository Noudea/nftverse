import styles from './WalletConnectButton.module.scss'
import { MdAccountBalanceWallet } from 'react-icons/md'
import { useRouter } from 'next/router'
function WalletConnectButton () {
  const router = useRouter()
  const handleClick = () => {
    router.push('/wallet-connect')
  }

  return (
    <button className={styles.wallet_connect_button} onClick={handleClick}>
      <MdAccountBalanceWallet size={20} />
      <p className={styles.wallet_connect_button_text}>Connect wallet</p>
    </button>
  )
}

export default WalletConnectButton
