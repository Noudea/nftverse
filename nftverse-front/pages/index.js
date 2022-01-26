import { useContext, useState } from 'react'
import { NftCard } from '../components/cards'
import Modal from '../components/modals/modal/Modal'
import ThemeContext from '../contexts/ThemeContext'

/**
 *
 * @returns {Object} HomePage
 */
export default function Home () {
  const { isDark, toggleDark } = useContext(ThemeContext)
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <style jsx>{`
          .test {
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
          }
          h1 {
            color:white;
          }
          `}
      </style>
      <h1>Home</h1>
      <button onClick={() => {
        toggleDark()
        console.log(isDark)
      }}
      >{isDark ? 'dark' : 'light'}
      </button>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
      >
        Hello from the modal!
      </Modal>
      <div className='test'>
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </div>
    </div>
  )
}
