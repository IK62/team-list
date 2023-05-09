function contact() {
  return (
    <div className="w-full h-3/4 flex justify-center items-center">
      <form className="flex flex-col w-[500px] p-8 gap-y-2">
        <h1 className="text-center">Contacter nous!</h1>
        <div className="w-full h-1 bg-black opacity-25 rounded-full"></div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label>nom</label>
            <input type="text" className="text-input"/>
          </div>
          <div className="flex flex-col">
            <label>prénom</label>
            <input type="text" className="text-input"/>
          </div>
        </div>
        <label>email</label>
        <input type="text" className="text-input"/>
        <label>numéro de téléphone</label>
        <input type="text" className="text-input"/>
      </form>
    </div>
  )
}

export default contact
