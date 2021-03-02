import { useState } from 'react';
import bandeira_eua from '../../assets/bandeira_eua.jpg';
import bandeira_ptbr from '../../assets/bandeira_ptbr.jpg';
import lupa from '../../assets/lupa.png'

const Menu = ({ language, championIcon, setErrorBoolean, setIconBoolean, setInputChamp, setChamp, setNameChamp, setLanguage }) => {

  const [buttonClassAssasin, setButtonClassAssasin] = useState(false);
  const [buttonClassFighter, setButtonClassFighter] = useState(false);
  const [buttonClassMage, setButtonClassMage] = useState(false);
  const [buttonClassMarksman, setButtonClassMarksman] = useState(false);
  const [buttonClassSupport, setButtonClassSupport] = useState(false);
  const [buttonClassTank, setButtonClassTank] = useState(false);
  const [buttonClassDefault, setButtonClassDefault] = useState(true);
  const [inputChampion, setInputChampion] = useState([]);
  const [navBar, setNavBar] = useState(false);

  const iconMage = championIcon.filter(icon => icon[1].tags[0] === 'Mage');
  const iconAssassin = championIcon.filter(icon => icon[1].tags[0] === 'Assassin');
  const iconFighter = championIcon.filter(icon => icon[1].tags[0] === 'Fighter');
  const iconMarksman = championIcon.filter(icon => icon[1].tags[0] === 'Marksman');
  const iconSupport = championIcon.filter(icon => icon[1].tags[0] === 'Support');
  const iconTank = championIcon.filter(icon => icon[1].tags[0] === 'Tank');

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
    setNavBar(false);
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
    setNavBar(false);
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
    setNavBar(false);
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
    setNavBar(false);
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
    setNavBar(false);
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
    setNavBar(false);
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
    setNavBar(false);
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
    setButtonClassDefault(true);
    setNavBar(false);
  }
  function handleFind() {
    const find = championIcon.filter(icon => icon[1].name.toLowerCase() === inputChampion);
    setButtonClassDefault(false);
    setNavBar(false);
    setIconBoolean(true);

    if (find.length === 0) {
      setErrorBoolean(true);
      setInputChamp([]);
    }
    if (find.length === 1) {
      setInputChamp(championIcon.filter(icon => icon[1].name.toLowerCase() === inputChampion));
    }
  }

  return (
    <>
      <div className="corpo">
        <div className="menu">
          <label>
            <p>{language === 'pt_BR' ? 'Campeão: ' : 'Champion: '}</p>
            <input value={inputChampion} onClick={() => handleSearch()} onChange={(e) => setInputChampion(e.target.value)} type="text" placeholder={language === 'pt_BR' ? 'Nome do campeão' : 'Champion name'}></input>
          </label>
          <img src={lupa} className="lupa" onClick={() => handleFind()} alt="lupa"></img>
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
        <div className="navBar">
          <label>
            <p>{language === 'pt_BR' ? 'Campeão: ' : 'Champion: '}</p>
            <input value={inputChampion} onClick={() => handleSearch()} onChange={(e) => setInputChampion(e.target.value)} type="text" placeholder={language === 'pt_BR' ? 'Nome do campeão' : 'Champion name'}></input>
          </label>
          <img src={lupa} className="lupa" onClick={() => handleFind()} alt="lupa"></img>
          <div className="flags">
            <img onClick={() => setLanguage('en_US')} alt="Bandeira EUA" className={language === 'en_US' ? 'language' : ''} src={bandeira_eua}></img>
            <img onClick={() => setLanguage('pt_BR')} alt="Bandeira Brasil" className={language === 'pt_BR' ? 'language' : ''} src={bandeira_ptbr}></img>
          </div>
          <div onClick={() => setNavBar(navBar === false ? true : false)} className="confBar">
            <div className="line">
            </div>
            <div className="line">
            </div>
            <div className="line">
            </div>
          </div>
        </div>
      </div>
      {navBar &&
        <div className="classBar">
          <button onClick={() => handleIconAssassin()} className={buttonClassAssasin ? 'buttonClass' : ''}>{language === 'pt_BR' ? 'Assassinos' : 'Assassins'}</button>
          <button onClick={() => handleIconFighter()} className={buttonClassFighter ? 'buttonClass' : ''}>{language === 'pt_BR' ? 'Lutadores' : 'Fighters'}</button>
          <button onClick={() => handleIconMage()} className={buttonClassMage ? 'buttonClass' : ''}>{language === 'pt_BR' ? 'Magos' : 'Mages'}</button>
          <button onClick={() => handleIconMarksman()} className={buttonClassMarksman ? 'buttonClass' : ''}>{language === 'pt_BR' ? 'Atiradores' : 'Marksmans'}</button>
          <button onClick={() => handleIconSupport()} className={buttonClassSupport ? 'buttonClass' : ''}>{language === 'pt_BR' ? 'Suportes' : 'Supports'}</button>
          <button onClick={() => handleIconTank()} className={buttonClassTank ? 'buttonClass' : ''}>{language === 'pt_BR' ? 'Tanques' : 'Tanks'}</button>
          <button onClick={() => handleIconDefault()} className={buttonClassDefault ? 'buttonClass' : ''}>{language === 'pt_BR' ? 'Todos' : 'All'}</button>
        </div>
      }
    </>
  );

}
export default Menu;