
const Champions = ({champ, iconBoolean, errorBoolean, championIcon, setNameChamp, setChamp, inputChamp}) =>{


  return(
    <>
    {!iconBoolean &&
      <div className="championSelect">
        {championIcon.map(icon => (
          <div value={champ} onClick={() => setNameChamp(icon[1].name)} key={icon.id} className={icon[1].id === champ ? 'active' : 'iconConfig'}>
            <img onClick={() => setChamp(icon[1].id)} src={`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/${icon[1].image.full}`} alt={icon[1].id}></img>
          </div>
        ))}
      </div>
    }
    {iconBoolean &&
      <div className="championSelect">
        {inputChamp.map(icon => (
          <div value={champ} onClick={() => setNameChamp(icon[1].name)} key={icon.id} className={icon[1].id === champ ? 'active' : 'iconConfig'}>
            <img onClick={() => setChamp(icon[1].id)} src={`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/${icon[1].image.full}`} alt={icon[1].id}></img>
          </div>
        ))}
      </div>
    }
    {errorBoolean &&
      <div className="error">
        <p>Champion not found!</p>
      </div>
    }
    </>
  );

}
export default Champions;