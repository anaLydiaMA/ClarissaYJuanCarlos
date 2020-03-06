import React,{Component} from 'react';
import './HomePage.css';
import image1 from '../../img/1.JPG';
import image2 from '../../img/2.JPG';
import image4 from '../../img/4.JPG';
import image5 from '../../img/5.JPG';

class HomePage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showConfirmation:false,
    }
  }
  render(){
    return (
      <div className="container">
      <div id="header" className="header-container">
      </div>
      <div className="title-position">
        <h1 className="Dancing white title no-gutters">Clarissa</h1>
        <h1 className="Dancing white subtitle no-gutters">y</h1>
        <h1 className="Dancing white title no-gutters">Juan Carlos</h1>
        <h4 className="Lato white font-weight-light"> NUESTRO 25 ANIVERSARIO</h4>
      </div>
      <div id="carrousel" className="img-container">
        <h4 className="Lato white font-weight-light no-gutters caption-space">Hace 25 años nos tomamos de la mano y empezamos esta aventura.</h4>
        <img src={image1} alt="CJC" className="image-style"/>
        <h4 className="Lato white font-weight-light no-gutters caption-space">Hemos crecido juntos a través de las dificultades.</h4>
        <img src={image2} alt="CJC" className="image-style"/>
        <h4 className="Lato white font-weight-light no-gutters caption-space">Hemos aprendido del otro.</h4>
        <img src={image4} alt="CJC" className="image-style"/>
        <h4 className="Lato white font-weight-light no-gutters caption-space">Y nunca hemos renunciado al amor que nos unió.</h4>
        <img src={image5} alt="CJC" className="image-style"/>
      </div>

      <div id="location" className="loc-container map-style">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d481935.6597572109!2d-99.1526134!3d19.3204968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdff96438ec639%3A0x9c7dd901f7541a49!2sSuntory%20Pedregal!5e0!3m2!1ses!2sus!4v1583521408011!5m2!1ses!2sus" frameborder="0" style={{'border':0}} allowfullscreen=""></iframe>
      </div>

      <div id="invitation-information" className="inv-container">
        <h4 className="Lato font-weight-light"> Por esta razon te invitamos blah blah blah</h4>
        <button type="button" className="btn-style" onClick={() => this.setState ({showConfirmation: !this.state.showConfirmation})} >CONFIRMAR ASISTENCIA</button>
        {
          this.state.showConfirmation?
          <div id="test" className="test-container">Contenido</div>
          :null
        }
      </div>

      <div id="footer" className="foot-container">
      </div>

      </div>
    );

}

}

export default HomePage;
