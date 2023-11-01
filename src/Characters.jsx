function Characters(character) {
  return (
    <div className="  ">
        <div className=" sm:max-w-xs w-full mb-6">
      <img src={character.image} alt={character.name} className="rounded-t-xl object-center w-full object-cover" />
     <div className="rounded-b-xl bg-white p-4">
     <h2 className="font-medium text-lg text-gray-600 hover:text-yellow-500">{character.name}</h2>
      <p className="text-gray-500 font-light hover:text-gray-300">Origin: {character.origin && character.origin.name}</p>
     </div>
    </div>
    </div>
  );
}

export default Characters;
