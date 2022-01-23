import NftCard from '../components/cards/nftCard/NftCard'

/**
 *
 * @returns {Object} HomePage
 */
export default function Home () {
  return (
    <div>
      <style jsx>{`
          .test {
            display:flex;
            justify-content:space-between;
          }
          h1 {
            color:white;
          }
          `}
      </style>
      <h1>Home</h1>
      <div className='test'>
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </div>
    </div>
  )
}
