import { useState, useEffect } from 'react';
import axios from 'axios';
import Api from './services/index';
import { Header, Footer } from './styledApp';
import {ChampionSelect} from './components/champions/styled';
import {ChampionDescription} from './components/description/styled';
import {Habilities} from './components/habilities/styled';
import {Corpo} from './components/menu/styled';
import logo from './assets/logo.png';
import logo2 from './assets/logo2.png';
import Menu from './components/menu';
import Champions from './components/champions';
import Description from './components/description';
import Skills from './components/habilities';

const App = () => {

  const [lol, setLol] = useState([]);
  const [fullChamp, setFullChamp] = useState([]);
  const [champ, setChamp] = useState('Aatrox');
  const [language, setLanguage] = useState('en_US')
  const [errorBoolean, setErrorBoolean] = useState(false);
  const [iconBoolean, setIconBoolean] = useState(false);
  const [inputChamp, setInputChamp] = useState([]);
  const [nameChamp, setNameChamp] = useState('Aatrox');

  const championIcon = Object.entries(fullChamp);

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
        <Menu language={language} championIcon={championIcon} setErrorBoolean={setErrorBoolean} setIconBoolean={setIconBoolean} setInputChamp={setInputChamp} setChamp={setChamp} setNameChamp={setNameChamp} setLanguage={setLanguage} />
      </Corpo>
      <ChampionSelect>
        <Champions champ={champ} iconBoolean={iconBoolean} errorBoolean={errorBoolean} championIcon={championIcon} setNameChamp={setNameChamp} setChamp={setChamp} inputChamp={inputChamp} />
      </ChampionSelect>
      <ChampionDescription>
        <Description champ={champ} language={language} lol={lol} />
      </ChampionDescription>
      <Habilities>
        <Skills champ={champ} nameChamp={nameChamp} lol={lol} language={language} />
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
