import { useEffect, useState, useRef, useMemo } from 'react'

const GuestList = () => {
  const ref = useRef()
  const [detail, setDetail] = useState({ team: '', player: '' })
  const [teams, setTeams] = useState({})
  const displayTeams = useMemo(() => {
    const jsx = buildDisplayTeams()
    return jsx
  }, [teams])


  useEffect(() => {
    if (localStorage.getItem('teams')) {
      setTeams(JSON.parse(localStorage.getItem('teams')))
    }
  }, [])

  useEffect(() => {
    localStorage.clear()
    if (teams) {
      if (Object.keys(teams).length) {
        localStorage.setItem('teams', JSON.stringify(teams))
      }
    }
  }, [teams])

  function handleKeyDown(e) {
    if (e.code === 'Enter') {
      ref.current.requestSubmit()
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setDetail({ ...detail, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const { team, player } = detail

    if (team !== '' && player !== '') {
      setTeams((prevState) =>
        {
          return !prevState[team]
            ? {
                ...prevState,
                [team]: [player],
              }
            : {
                ...prevState,
                [team]: [...prevState[team], player],
              }
        }
      )
      setDetail({ team: team, player: '' })
    }
  }

  function buildDisplayTeams() {
    if (!teams) {
      return []
    }
    const jsx = []
    for (let [team, players] of Object.entries(teams)) {
      const display = (
        <>
          <h1 onMouseEnter={showDelete} onMouseLeave={showDelete}>
            {team}
            <button
              class="delete-btn"
              onClick={() => {
                deleteTeam(team)
              }}
            >
              DELETE
            </button>
          </h1>
          <ul>
            {Object.values(players).map((player) => (
              <li onMouseEnter={showDelete} onMouseLeave={showDelete}>
                {player}
                <button
                  class="delete-btn"
                  onClick={() => {
                    deletePlayer(team, player)
                  }}
                >
                  DELETE
                </button>
              </li>
            ))}
          </ul>
        </>
      )

      jsx.push(display)
    }
    return jsx
  }

  function showDelete(e) {
    if (e.target.localName === 'li' || e.target.localName === 'h1') {
      e.type === 'mouseenter'
        ? (e.target.children[0].name = 'appear')
        : (e.target.children[0].name = '')
    }else{
      e.type === 'mouseenter'
        ? (e.target.name = 'appear')
        : (e.target.name = '')
    }
  }

  function deleteTeam(team) {
    setTeams((prevState) => {
      function newState() {
        const arrayOfState = Object.entries(prevState).filter(
          (array) => array[0] !== team
        )
        let objectToReturn = {}
        arrayOfState.forEach((e) => {
          objectToReturn[e[0]] = e[1]
        })
        return objectToReturn
      }
      return newState()
    })
  }

  function deletePlayer(team, player) {
    setTeams((prevState) => ({
      ...prevState,
      [team]: prevState[team].filter((word) => word !== player),
    }))
  }

  function resetTeams() {
    setTeams({})
  }

  return (
    <div class="root-div">
      <form ref={ref} onSubmit={handleSubmit} class="input-form">
        <div>
          <h1>choose a player</h1>
          <input
            class="input-blue"
            name="player"
            value={detail.player}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          <h1>choose a team</h1>
          <input
            class="input-blue"
            name="team"
            value={detail.team}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </form>
      <button class="delete-teams-btn" name='appear' onClick={resetTeams}>
        delete every teams
      </button>
      <div class="team-div">{displayTeams}</div>
    </div>
  )
}

export default GuestList
