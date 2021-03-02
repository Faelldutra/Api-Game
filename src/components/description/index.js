import {useState, useEffect} from 'react';
import tankericon from '../../assets/tankericon.png';
import Controllericon from '../../assets/Controllericon.png';
import Fighter from '../../assets/Fighter.png';
import Mageicon from '../../assets/Mageicon.png';
import Marksmainicon from '../../assets/Marksmanicon.png';
import Slayericon from '../../assets/Slayericon.png';

const Description = ({champ, language, lol}) => {

  const TypeOfClass = lol[champ] && lol[champ].tags[0];

  const [classDiference, setClassDiference] = useState('');
  const [classe, setClasse] = useState('');

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
        setClassDiference('Lutador');
        break;

      case 'Tank':
        setClasse(tanker);
        setClassDiference('Tanque');
        break;

      case 'Support':
        setClasse(Controller);
        setClassDiference('Suporte');
        break;

      case 'Mage':
        setClasse(Mage);
        setClassDiference('Mago');
        break;

      case 'Marksman':
        setClasse(Marksmain);
        setClassDiference('Atirador');
        break;

      case 'Assassin':
        setClasse(Slayer);
        setClassDiference('Assassino');
        break;

      default:
        setClasse('');

    }
  }, [TypeOfClass]);

  return (

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
  );
}
export default Description;