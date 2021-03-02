import AsNavFor from '../slicker/navFor';
import {useState, useEffect} from 'react';

const Skills = ({champ, nameChamp, lol, language}) => {

  const [progressBar, setProgressBar] = useState('progressLine');
  const [imgUp, setImgUp] = useState(true);
  const [imgUp1, setImgUp1] = useState(false);
  const [imgUp2, setImgUp2] = useState(false);
  const [imgUp3, setImgUp3] = useState(false);
  const [imgUp4, setImgUp4] = useState(false);

  useEffect(() => {
    setImgUp(true);
    setImgUp1(false);
    setImgUp2(false);
    setImgUp3(false);
    setImgUp4(false);
    setProgressBar('progressLine');
  }, [champ]);

  const QspellName = (lol[champ] && lol[champ].spells[0].name);
  const WspellName = (lol[champ] && lol[champ].spells[1].name);
  const EspellName = (lol[champ] && lol[champ].spells[2].name);
  const RspellName = (lol[champ] && lol[champ].spells[3].name);
  const QspellDescription = (lol[champ] && lol[champ].spells[0].description);
  const WspellDescription = (lol[champ] && lol[champ].spells[1].description);
  const EspellDescription = (lol[champ] && lol[champ].spells[2].description);
  const RspellDescription = (lol[champ] && lol[champ].spells[3].description);
  const passiveDescription = (lol[champ] && lol[champ].passive.description);
  const passiveName = (lol[champ] && lol[champ].passive.name);
  const passive = (lol[champ] && lol[champ].passive.image.full);
  const Qspell = (lol[champ] && lol[champ].spells[0].image.full);
  const Wspell = (lol[champ] && lol[champ].spells[1].image.full);
  const Espell = (lol[champ] && lol[champ].spells[2].image.full);
  const Rspell = (lol[champ] && lol[champ].spells[3].image.full);

  const [descriptionHabilities, setDescriptionHabilities] = useState(passiveDescription);
  const [nameHabilities, setNameHabilities] = useState(passiveName);

  useEffect(() => {
    setDescriptionHabilities(passiveDescription);
    setNameHabilities(passiveName);
  }, [passiveDescription, passiveName]);

  const [skin, setSkin] = useState([]);
  const ArraySkins = Object.entries(lol);
  const skins = ArraySkins.map(skins => skins[1].skins);

  useEffect(() => {
    skins.map(skins => setSkin(skins))
  }, [lol, skins])

  function click() {
    setImgUp(true);
    setImgUp1(false);
    setImgUp2(false);
    setImgUp3(false);
    setImgUp4(false);
    setProgressBar('progressLine');
    setDescriptionHabilities(passiveDescription);
    setNameHabilities(passiveName);
  }
  function click1() {
    setImgUp1(true);
    setImgUp(false);
    setImgUp2(false);
    setImgUp3(false);
    setImgUp4(false);
    setProgressBar('progressLine1');
    setDescriptionHabilities(QspellDescription);
    setNameHabilities(QspellName);
  }
  function click2() {
    setImgUp2(true);
    setImgUp1(false);
    setImgUp(false);
    setImgUp3(false);
    setImgUp4(false);
    setProgressBar('progressLine2');
    setDescriptionHabilities(WspellDescription);
    setNameHabilities(WspellName);
  }
  function click3() {
    setImgUp3(true);
    setImgUp1(false);
    setImgUp2(false);
    setImgUp(false);
    setImgUp4(false);
    setProgressBar('progressLine3');
    setDescriptionHabilities(EspellDescription);
    setNameHabilities(EspellName);
  }
  function click4() {
    setImgUp4(true);
    setImgUp1(false);
    setImgUp2(false);
    setImgUp3(false);
    setImgUp(false);
    setProgressBar('progressLine4');
    setDescriptionHabilities(RspellDescription);
    setNameHabilities(RspellName);
  }

  return (
    <div className="SpellSkin">
      <div className="habilities">
        <div className="titleHabilities">
          <div className="titleLine1">
          </div>
          <div className="titleLine2">
          </div>
          <h1>{language === 'pt_BR' ? 'Habilidades' : 'Spells'}</h1>
          <div className="titleLine2">
          </div>
          <div className="titleLine1">
          </div>
        </div>
        <div className="habilitiesIcon">
          <img onClick={() => click()} className={imgUp ? 'imgUp' : ''} src={`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/passive/${passive}`} alt={passive}></img>
          <img onClick={() => click1()} className={imgUp1 ? 'imgUp' : ''} src={`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/spell/${Qspell}`} alt={Qspell}></img>
          <img onClick={() => click2()} className={imgUp2 ? 'imgUp' : ''} src={`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/spell/${Wspell}`} alt={Wspell}></img>
          <img onClick={() => click3()} className={imgUp3 ? 'imgUp' : ''} src={`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/spell/${Espell}`} alt={Espell}></img>
          <img onClick={() => click4()} className={imgUp4 ? 'imgUp' : ''} src={`http://ddragon.leagueoflegends.com/cdn/11.2.1/img/spell/${Rspell}`} alt={Rspell}></img>
        </div>
        <div className="progress">
          <div className="baseLine">
          </div>
          <div className={progressBar}>
          </div>
        </div>
        <div className="descriptionHabilities">
          <h1>{nameHabilities}</h1>
          <p>{descriptionHabilities}</p>
        </div>
      </div>
      <div className="skins">
        <div className="titleHabilities">
          <div className="titleLine1">
          </div>
          <div className="titleLine2">
          </div>
          <h1>Skins</h1>
          <div className="titleLine2">
          </div>
          <div className="titleLine1">
          </div>
        </div>
        <div className="setSkins">
          <div className="slickConfig">
            <AsNavFor images={champ} skins={skin} nameChamp={nameChamp}/>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Skills;