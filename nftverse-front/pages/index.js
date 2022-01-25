import { useContext } from 'react'
import { NftCard } from '../components/cards'
import ThemeContext from '../contexts/ThemeContext'

/**
 *
 * @returns {Object} HomePage
 */
export default function Home () {
  const { isDark, toggleDark } = useContext(ThemeContext)

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
