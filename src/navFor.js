import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component } from "react";

export default class AsNavFor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  };

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  };

  render() {
    const skins = this.props.skins;
    const champ = this.props.images;
    const nameChamp = this.props.nameChamp;

    if(this.slider1) {
      this.slider1.slickGoTo(0);
    }

    const skinsChamp = skins.filter(skin => skin.name !== 'default');

    const size = skinsChamp.length;
   
    var slides = 3;

    if(size < 2){
      slides = 2;
    }
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          className='carousel'       
        >
           <div className="slicker">
              <img className="imgSlicker" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg`} alt={champ}></img>
              <div className="slickTitle">
                <p>{nameChamp}</p>
              </div>
            </div>
          {skinsChamp.map(skin => (
            <div className="slicker" key={skin.id}>
              <img className="imgSlicker" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_${skin.num}.jpg`} alt={champ}></img>
              <div className="slickTitle">
                <p>{skin.name}</p>
              </div>
            </div>
          ))}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={slides}
          swipeToSlide={true}
          focusOnSelect={true}
          dots={true}
          centerPadding={'0px'}
          arrows={false}
          centerMode={true}
          accessibility={true}
          initialSlide={0}
          className='carousel carousel2'
          slickGoTo={0}
          
        >
          {skins.map(skin => (
            <div key={skin.id}>
              <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_${skin.num}.jpg`} alt={champ}></img>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}