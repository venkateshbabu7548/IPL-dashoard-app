// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, teamDetails: {}}

  componentDidMount = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const tempData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    const {latestMatchDetails, recentMatches, teamBannerUrl} = tempData
    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      venue: latestMatchDetails.venue,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      umpires: latestMatchDetails.umpires,
      secondInnings: latestMatchDetails.second_innings,
    }
    const updatedRecentMatches = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      result: each.result,
      matchStatus: each.match_status,
    }))

    const updatedData = {
      teamBannerUrl: teamBannerUrl,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
    }

    this.setState({
      teamDetails: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, teamDetails} = this.state

    const {teamBannerUrl, latestMatchDetails} = teamDetails
    console.log(teamDetails)
    console.log(latestMatchDetails)
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`bg-con ${id}`}>
        <img src={teamBannerUrl} alt="team banner" className="banner" />
        <div className="latest">
          <p>Latest Matches</p>
          <LatestMatch details={latestMatchDetails} />
        </div>
      </div>
    )
  }
}
export default TeamMatches
