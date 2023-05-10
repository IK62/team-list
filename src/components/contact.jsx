export default function Contact() {
  return (
    <div className="w-full h-3/4 flex justify-center items-center">
      <form className="flex flex-col w-[500px] p-8 gap-y-2 items-center">
        <h1 className="text-center text-4xl">Contacter nous!</h1>
        <div className="w-full h-1 bg-slate-700 opacity-75 rounded-full"></div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <label className="text-2xl">nom</label>
            <input type="text" className="text-input"/>
          </div>
          <div className="flex flex-col">
            <label className="text-2xl">prénom</label>
            <input type="text" className="text-input"/>
          </div>
        </div>
        <label className="w-full text-2xl">email</label>
        <input type="text" className="text-input w-full"/>
        <label className="w-full text-2xl">numéro de téléphone</label>
        <input type="text" className="text-input w-full"/>
        <button className="text-input h-10 text-2xl px-3">envoyer le formulaire</button>
      </form>
    </div>
  )
}