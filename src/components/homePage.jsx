function home() {
  return (
    <div className="flex flex-col p-36 gap-y-10">
      <p className="text-7xl">
        Bienvenue sur{' '}
        <a className="text-transparent bg-clip-text bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-indigo-400 via-slate-700 to-zinc-800 bg-[length:500%_500%]">
          team list
        </a>
      </p>
      <p className="text-4xl">
        sur ce site vous pouvez
        <a className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
          crée
        </a>
        ,
        <a className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-900">
          supprimer
        </a>
        et
        <a className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-900">
          modifier
        </a>
        vos équipes autant que vous le voulez !
      </p>
    </div>
  )
}

export default home
