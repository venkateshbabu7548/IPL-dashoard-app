// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details
  return (
    <Link to={`team-matches/${id}`} className="team-link">
      <li className="each-team">
        <img src={teamImageUrl} alt={id} className="team-img" />
        <h1 className="team-name">{name}</h1>
      </li>
    </Link>
  )
}
export default TeamCard
