import { NextPage } from 'next'
import Link from 'next/link'

type Props = {}

const IndexPage: NextPage<Props> = () => {
  return (
    <div>
      <h1>Star Wars</h1>
      <div>
        <Link href="/Movies">
          <a>Films</a>
        </Link>
      </div>
      <div>
        <Link href="/Planets">
          <a>Planets</a>
        </Link>
      </div>
      <div>
        <Link href="/Vehicles">
          <a>Vehicles</a>
        </Link>
      </div>
    </div>
  )
}

export default IndexPage
