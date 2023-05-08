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
      setTeams((prevState) => {
        return !prevState[team]
          ? {
              ...prevState,
              [team]: [player],
            }
          : {
              ...prevState,
              [team]: [...prevState[team], player],
            }
      })
      setDetail({ team: team, player: '' })
    }
  }

  function modifyItem(e, team, player) {
    if (!player) {
      e.target.text = ''
      const newInput = document.createElement('input')
      newInput.className += 'text-input w-[250px]'
      newInput.value = `${team}`
      newInput.onkeydown = (e) => modifyItemValue(e, team)
      newInput.onblur = (e) => backToInitalValue(e, team)
      e.target.appendChild(newInput)
      newInput.focus()
    } else if (player) {
      e.target.text = ''
      const newInput = document.createElement('input')
      newInput.className += 'text-input w-[250px]'
      newInput.value = `${player}`
      newInput.onkeydown = (e) => modifyItemValue(e, team, player)
      newInput.onblur = (e) => backToInitalValue(e, team, player)
      e.target.appendChild(newInput)
      newInput.focus()
    }
  }

  function modifyItemValue(e, team, player) {
    if (e.code === 'Enter') {
      if (!player) {
        setTeams((prevState) => {
          const newState = {...prevState, [e.target.value]: [...prevState[team]]}
          delete newState[team]
          return newState
        })
      } else if (player) {
        setTeams((prevState) => {
          const newState = {...prevState}
          newState[team].push(e.target.value)
          newState[team] = (newState[team].filter(word => word !== player))
          return newState
        })
      }
    }
  }

  function backToInitalValue(e, team, player) {
    if (!player) {
      const parent = e.target.parentElement
      parent.text = team
      parent.removeChild(e.target)
    } else if (player) {
      const parent = e.target.parentElement
      parent.text = player
      parent.removeChild(e.target)
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
          <h1 className="group text-5xl">
            <a onClick={(e) => modifyItem(e, team)}>{team}</a>
            <button
              className="group-hover:opacity-100 ml-[5px] text-[#e24c4c] opacity-0 transition-opacity duration-700 ease-in-out"
              onClick={() => {
                deleteTeam(team)
              }}
            >
              Delete
            </button>
          </h1>
          <ul className="w-fit mb-10">
            {Object.values(players).map((player) => (
              <li className="group list-none text-start text-[#163D5D] text-2xl ml-6">
                <a onClick={(e) => modifyItem(e, team, player)}>{player}</a>
                <button
                  className="group-hover:opacity-100 ml-[5px] text-[#e24c4c] opacity-0 transition-opacity duration-700 ease-in-out"
                  onClick={() => {
                    deletePlayer(team, player)
                  }}
                >
                  Delete
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

  return (
    <div className="flex flex-col justify-center items-center gap-y-8 h-full text-center">
      <form ref={ref} onSubmit={handleSubmit} className="flex gap-20">
        <div>
          <h1 className='text-3xl'>Choose a player</h1>
          <input
            className="text-input"
            name="player"
            value={detail.player}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          <h1 className='text-3xl'>Choose a team</h1>
          <input
            className="text-input"
            name="team"
            value={detail.team}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </form>
      <button
        className="text-[#e24c4c] text-5xl"
        name="appear"
        onClick={() => setTeams({})}
      >
        Delete every team
      </button>
      <div className="flex flex-col items-start w-fit">{displayTeams}</div>
    </div>
  )
}

export default GuestList
