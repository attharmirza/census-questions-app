import { Header, Input, Table } from './components'
import { useState } from 'react'
import './App.css'

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const readLoadingStatus = (status) => setIsLoading(status)

  const [data, setData] = useState(undefined)
  const readCensusData = (data) => setData(data)

  return (
    <>
      <div className="app-container">
        <div className="app-header">
          <Header />
          <Input loadingStatus={readLoadingStatus} censusData={readCensusData} />
        </div>
        <div className='app-body'>
          {isLoading ? <img src='./img/loading.gif' style={{filter: 'brightness(0%)'}}/> : <Table data={data} />}
        </div>
      </div>
    </>
  )
}
