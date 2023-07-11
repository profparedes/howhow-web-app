import { memo } from 'react'

interface IResultsProps {
  dataResult: string
  description: string
}

const Results: React.FC<IResultsProps> = ({ dataResult, description }) => (
  <div className="text-center">
    <h1>{dataResult}</h1>
    <p>{description}</p>
  </div>
)

export default memo(Results)
