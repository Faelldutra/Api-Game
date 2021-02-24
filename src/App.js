import { useState, useEffect } from 'react';
import axios from 'axios';
import Api from './services/index';
import { Header, Corpo, ChampionSelect, ChampionDescription, Habilities, Footer } from './styledApp';
import logo from './assets/logo.png';
import logo2 from './assets/logo2.png';
import tankericon from './assets/tankericon.png';
import Controllericon from './assets/Controllericon.png';
import Fighter from './assets/Fighter.png';
import Mageicon from './assets/Mageicon.png';
import Marksmainicon from './assets/Marksmanicon.png';
import Slayericon from './assets/Slayericon.png';
import bandeira_eua from './assets/bandeira_eua.jpg';
import bandeira_ptbr from './assets/bandeira_ptbr.jpg';
import lupa from './assets/lupa.png'
import AsNavFor from './navFor';

const App = () => {

  const [lol, setLol] = useState([]);
  const [fullChamp, setFullChamp] = useState([]);
  const [classe, setClasse] = useState('');
  const [progressBar, setProgressBar] = useState('progressLine');
  const [imgUp, setImgUp] = useState(true);
  const [imgUp1, setImgUp1] = useState(false);
  const [imgUp2, setImgUp2] = useState(false);
  const [imgUp3, setImgUp3] = useState(false);
  const [imgUp4, setImgUp4] = useState(false);
  const [champ, setChamp] = useState('Aatrox');
  const [language, setLanguage] = useState('en_US')
  const [classDiference, setClassDiference] = useState('');
  const [buttonClassAssasin, setButtonClassAssasin] = useState(false);
  const [buttonClassFighter, setButtonClassFighter] = useState(false);
  const [buttonClassMage, setButtonClassMage] = useState(false);
  const [buttonClassMarksman, setButtonClassMarksman] = useState(false);
  const [buttonClassSupport, setButtonClassSupport] = useState(false);
  const [buttonClassTank, setButtonClassTank] = useState(false);
  const [buttonClassDefault, setButtonClassDefault] = useState(true);

  useEffect(() => {
    Api.get(`${language}/champion/${champ}.json`).then((response) => {
      setLol(response.data.data);
    });
  }, [champ, language]);

  useEffect(() => {
    axios.get('http://ddragon.leagueoflegends.com/cdn/11.2.1/data/en_US/champion.json').then((full) => {
      setFullChamp(full.data.data);
    });
  }, [champ]);

  useEffect(() => {
    setImgUp(true);
    setImgUp1(false);
    setImgUp2(false);
    setImgUp3(false);
    setImgUp4(false);
    setProgressBar('progressLine');
  }, [champ]);

  const TypeOfClass = lol[champ] && lol[champ].tags[0];
  const passive = (lol[champ] && lol[champ].passive.image.full);
  const Qspell = (lol[champ] && lol[champ].spells[0].image.full);
  const Wspell = (lol[champ] && lol[champ].spells[1].image.full);
  const Espell = (lol[champ] && lol[champ].spells[2].image.full);
  const Rspell = (lol[champ] && lol[champ].spells[3].image.full);
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

  const ArraySkins = Object.entries(lol)
  const skins = ArraySkins.map(skins => skins[1].skins);
  const [skin, setSkin] = useState([]);

  useEffect(() => {
    skins.map(skins => setSkin(skins))
  }, [lol, skins])

  const championIcon = Object.entries(fullChamp);

  const [nameChamp, setNameChamp] = useState('Aatrox');
  const [errorBoolean, setErrorBoolean] = useState(false);
  const [iconBoolean, setIconBoolean] = useState(false);
  const [inputChampion, setInputChampion] = useState([]);
  const [inputChamp, setInputChamp] = useState([]);

  function handleFind() {
    const teste = championIcon.filter(icon => icon[1].name.toLowerCase() === inputChampion);

    if (teste.length === 0) {
      setErrorBoolean(true);
      setInputChamp([]);
    }
    if (teste.length === 1) {
      setInputChamp(championIcon.filter(icon => icon[1].name.toLowerCase() === inputChampion));
    }
  }

  const iconMage = championIcon.filter(icon => icon[1].tags[0] === 'Mage');
  const iconAssassin = championIcon.filter(icon => icon[1].tags[0] === 'Assassin');
  const iconFighter = championIcon.filter(icon => icon[1].tags[0] === 'Fighter');
  const iconMarksman = championIcon.filter(icon => icon[1].tags[0] === 'Marksman');
  const iconSupport = championIcon.filter(icon => icon[1].tags[0] === 'Support');
  const iconTank = championIcon.filter(icon => icon[1].tags[0] === 'Tank');

  useEffect(() => {
    if (TypeOfClass === 'Mage') {
      setClassDiference('Mago');
    }
    if (TypeOfClass === 'Assassin') {
      setClassDiference('Assassino');
    }
    if (TypeOfClass === 'Fighter') {
      setClassDiference('Lutador');
    }
    if (TypeOfClass === 'Marksman') {
      setClassDiference('Atirador');
    }
    if (TypeOfClass === 'Support') {
      setClassDiference('Suporte');
    }
    if (TypeOfClass === 'Tank') {
      setClassDiference('Tanque');
    }
  }, [TypeOfClass]);

  function handleIconMage() {
    setInputChampion('');
    setIconBoolean(true);
    setInputChamp(iconMage);
    setChamp(iconMage.map(icon => icon[1].id)[0]);
    setNameChamp(iconMage.map(icon => icon[1].name)[0]);
    setButtonClassMage(true);
    setButtonClassAssasin(false);
    setButtonClassFighter(false);
    setButtonClassMarksman(false);
    setButtonClassSupport(false);
    setButtonClassTank(false);
    setButtonClassDefault(false);
    setErrorBoolean(false);
  }
  function handleIconAssassin() {
    setInputChampion('');
    setIconBoolean(true);
    setInputChamp(iconAssassin);
    setChamp(iconAssassin.map(icon => icon[1].id)[0]);
    setNameChamp(iconAssassin.map(icon => icon[1].name)[0]);
    setButtonClassMage(false);
    setButtonClassAssasin(true);
    setButtonClassFighter(false);
    setButtonClassMarksman(false);
    setButtonClassSupport(false);
    setButtonClassTank(false);
    setButtonClassDefault(false);
    setErrorBoolean(false);
  }
  function handleIconFighter() {
    setInputChampion('');
    setIconBoolean(true);
    setInputChamp(iconFighter);
    setChamp(iconFighter.map(icon => icon[1].id)[0]);
    setNameChamp(iconFighter.map(icon => icon[1].name)[0]);
    setButtonClassMage(false);
    setButtonClassAssasin(false);
    setButtonClassFighter(true);
    setButtonClassMarksman(false);
    setButtonClassSupport(false);
    setButtonClassTank(false);
    setButtonClassDefault(false);
    setErrorBoolean(false);
  }
  function handleIconMarksman() {
    setInputChampion('');
    setIconBoolean(true);
    setInputChamp(iconMarksman);
    setChamp(iconMarksman.map(icon => icon[1].id)[0]);
    setNameChamp(iconMarksman.map(icon => icon[1].name)[0]);
    setButtonClassMage(false);
    setButtonClassAssasin(false);
    setButtonClassFighter(false);
    setButtonClassMarksman(true);
    setButtonClassSupport(false);
    setButtonClassTank(false);
    setButtonClassDefault(false);
    setErrorBoolean(false);
  }
  function handleIconSupport() {
    setInputChampion('');
    setIconBoolean(true);
    setInputChamp(iconSupport);
    setChamp(iconSupport.map(icon => icon[1].id)[0]);
    setNameChamp(iconSupport.map(icon => icon[1].name)[0]);
    setButtonClassMage(false);
    setButtonClassAssasin(false);
    setButtonClassFighter(false);
    setButtonClassMarksman(false);
    setButtonClassSupport(true);
    setButtonClassTank(false);
    setButtonClassDefault(false);
    setErrorBoolean(false);
  }
  function handleIconTank() {
    setInputChampion('');
    setIconBoolean(true);
    setInputChamp(iconTank);
    setChamp(iconTank.map(icon => icon[1].id)[0]);
    setNameChamp(iconTank.map(icon => icon[1].name)[0]);
    setButtonClassMage(false);
    setButtonClassAssasin(false);
    setButtonClassFighter(false);
    setButtonClassMarksman(false);
    setButtonClassSupport(false);
    setButtonClassTank(true);
    setButtonClassDefault(false);
    setErrorBoolean(false);
  }
  function handleIconDefault() {
    setInputChampion('');
    setIconBoolean(true);
    setInputChamp(championIcon);
    setChamp(championIcon.map(icon => icon[1].id)[0]);
    setNameChamp(championIcon.map(icon => icon[1].name)[0]);
    setButtonClassMage(false);
    setButtonClassAssasin(false);
    setButtonClassFighter(false);
    setButtonClassMarksman(false);
    setButtonClassSupport(false);
    setButtonClassTank(false);
    setButtonClassDefault(true);
    setErrorBoolean(false);
  }

  function handleSearch() {
    setInputChamp(championIcon);
    setIconBoolean(true);
    setChamp('Aatrox');
    setInputChampion('');
    setErrorBoolean(false);
    setButtonClassMage(false);
    setButtonClassAssasin(false);
    setButtonClassFighter(false);
    setButtonClassMarksman(false);
    setButtonClassSupport(false);
    setButtonClassTank(false);
    setButtonClassDefault(false);
  }

  const [descriptionHabilities, setDescriptionHabilities] = useState(passiveDescription);
  const [nameHabilities, setNameHabilities] = useState(passiveName);

  useEffect(() => {
    setDescriptionHabilities(passiveDescription);
    setNameHabilities(passiveName);
  }, [passiveDescription, passiveName]);

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

  const fighter = <img src={Fighter} alt={TypeOfClass}></img>;
  const tanker = <img src={tankericon} alt={TypeOfClass}></img>;
  const Controller = <img src={Controllericon} alt={TypeOfClass}></img>;
  const Mage = <img src={Mageicon} alt={TypeOfClass}></img>;
  const Marksmain = <img src={Marksmainicon} alt={TypeOfClass}></img>;
  const Slayer = <img src={Slayericon} alt={TypeOfClass}></img>;

  useEffect(() => {

    switch (TypeOfClass) {
      case 'Fighter':
        setClasse(fighter);
        break;

      case 'Tank':
        setClasse(tanker);
        break;

      case 'Support':
        setClasse(Controller);
        break;

      case 'Mage':
        setClasse(Mage);
        break;

      case 'Marksman':
        setClasse(Marksmain);
        break;

      case 'Assassin':
        setClasse(Slayer);
        break;

      default:
        setClasse('');

    }
  }, [TypeOfClass]);

  return (
    <>
      <Header>
        <div className="header">
          <div>
            <img src={logo} alt="Logo league of legends"></img>
            <img src={logo2} alt="Logo league of legends"></img>
          </div>
        </div>
      </Header>
      <Corpo>
        <div className="corpo">
          <div className="menu">
            <label>
              <p>{language === 'pt_BR' ? 'Campeão: ' : 'Champion: '}</p>
              <input value={inputChampion} onClick={() => handleSearch()} onChange={(e) => setInputChampion(e.target.value)} type="text" placeholder={language === 'pt_BR' ? 'Nome do campeão' : 'Champion name'}></input>
            </label>
            <img src={lupa} className="lupa" onClick={() => handleFind()}></img>
            <div className="class">
              <button onClick={() => handleIconAssassin()} className={buttonClassAssasin ? 'buttonClass' : ''}>{language === 'pt_BR' ? 'Assassinos' : 'Assassins'}</button>
              <button onClick={() => handleIconFighter()} className={buttonClassFighter ? 'buttonClass' : ''}>{language === 'pt_BR' ? 'Lutadores' : 'Fighters'}</button>
              <button onClick={() => handleIconMage()} className={buttonClassMage ? 'buttonClass' : ''}>{language === 'pt_BR' ? 'Magos' : 'Mages'}</button>
              <button onClick={() => handleIconMarksman()} className={buttonClassMarksman ? 'buttonClass' : ''}>{language === 'pt_BR' ? 'Atiradores' : 'Marksmans'}</button>
              <button onClick={() => handleIconSupport()} className={buttonClassSupport ? 'buttonClass' : ''}>{language === 'pt_BR' ? 'Suportes' : 'Supports'}</button>
              <button onClick={() => handleIconTank()} className={buttonClassTank ? 'buttonClass' : ''}>{language === 'pt_BR' ? 'Tanques' : 'Tanks'}</button>
              <button onClick={() => handleIconDefault()} className={buttonClassDefault ? 'buttonClass' : ''}>{language === 'pt_BR' ? 'Todos' : 'All'}</button>
            </div>
            <img onClick={() => setLanguage('en_US')} alt="Bandeira EUA" className={language === 'en_US' ? 'language' : ''} src={bandeira_eua}></img>
            <img onClick={() => setLanguage('pt_BR')} alt="Bandeira Brasil" className={language === 'pt_BR' ? 'language' : ''} src={bandeira_ptbr}></img>
          </div>
        </div>
      </Corpo>
      <ChampionSelect>
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
      </ChampionSelect>
      <ChampionDescription>
        <div className="description">
          <div id="img" className="title">
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg`} alt={champ}></img>
          </div>
          <div className="introduce">
            <div>
              <p>{lol[champ] && lol[champ].title}</p>
            </div>
            <div className="box">
              <div className="box2">
                <div className="line2">
                </div>
                <div className="line1">
                  <div className="history">
                    {classe}
                    <span>{language === 'pt_BR' ? classDiference : lol[champ] && lol[champ].tags[0]}</span>
                  </div>
                </div>
                <h1>{lol[champ] && lol[champ].name}</h1>
                <div className="line1">
                  <div className="history2">
                    <span>{lol[champ] && lol[champ].lore}</span>
                  </div>
                </div>
                <div className="line2">
                </div>
              </div>
              <div className="line1">
              </div>
            </div>
          </div>
        </div>
      </ChampionDescription>
      <Habilities>
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
                <AsNavFor images={champ} skins={skin} nameChamp={nameChamp}>
                </AsNavFor>
              </div>

            </div>
          </div>
        </div>
      </Habilities>
      <Footer>
        <div className="footer">
          <p>Rafael Dutra &copy; 2021</p>
        </div>
      </Footer>
    </>
  );
}

export default App;
