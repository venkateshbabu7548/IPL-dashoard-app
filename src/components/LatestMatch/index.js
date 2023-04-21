// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  console.log(details)
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = details

  return (
    <div className="latest-con">
      <div className="details-1"></div>
    </div>
  )
}
export default LatestMatch
