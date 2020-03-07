import React,{Component} from 'react';
import './HomePage.css';
import image1 from '../../img/1.JPG';
import image2 from '../../img/2.JPG';
import image3 from '../../img/3.JPG';
import image4 from '../../img/4.JPG';
import image5 from '../../img/5.JPG';
import church from '../../img/church.jpg';

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
        <h4 className="Lato white no-gutters font-weight-light"> NUESTRO 25 ANIVERSARIO</h4>
      </div>
      <div id="carrousel" className="img-container">
        <h4 className="Lato white font-weight-light no-gutters caption-space">Hace 25 años nos tomamos de la mano y empezamos esta aventura.</h4>
        <img src={image1} alt="CJC" className="image-style"/>
        <h4 className="Lato white font-weight-light no-gutters caption-space">Hemos crecido juntos a través de las dificultades.</h4>
        <img src={image2} alt="CJC" className="image-style"/>
        <h4 className="Lato white font-weight-light no-gutters caption-space">Hemos aprendido del otro.</h4>
        <img src={image3} alt="CJC" className="image-style"/>
        <h4 className="Lato white font-weight-light no-gutters caption-space">Y nunca hemos renunciado al amor que nos unió.</h4>
        <img src={image5} alt="CJC" className="image-style"/>
      </div>

      <div id="church-information" className="inv-container">
        <h1 className="Dancing title subtitle">Familia</h1>
        <h4 className="Lato font-weight-light description-text no-gutters"> Nos complace invitaros a la Santa Misa el día 1ro de Mayo a las 13:00 horas en la parroquia Maria Reina del Rosario, será presidida por el señor cura Luis Manuel Quiñones.</h4>
        <h4 className="Lato font-weight-light description-text"> Renovaremos nuestras promesas matrimoniales en compañía de nuestros hijos Ana Lydia, Luis Enrique y Juan Carlos y en presencia de nuestros padrinos de hace 25 años, Pedro y Linda.</h4>
        <img src={church} alt="CJC" className="image-normal"/>
      </div>

      <div id="church-location" className="loc-container map-style">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.842249029923!2d-103.32657958455292!3d20.635285886212902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b2457f47f779%3A0x5f854671f72e0f41!2sParroquia%20Mar%C3%ADa%20Reina%20del%20Rosario!5e0!3m2!1ses!2smx!4v1583539579615!5m2!1ses!2smx" frameborder="0" style={{'border':0}} allowfullscreen=""></iframe>
      </div>

      <div id="party-information" className="inv-container">
        <h1 className="Dancing title subtitle">-</h1>
        <h4 className="Lato font-weight-light description-text">A partir de las 14:30 horas los esperamos en el Jardín de Eventos San Joaquin, para compartir los alimentos.</h4>
        <img src={church} alt="CJC" className="image-normal"/>
      </div>

      <div id="party-location" className="loc-container map-style">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4889.703307381015!2d-103.25116800159473!3d20.603911199400702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b4960999976f%3A0xe6dcbd13c3b0535a!2sJardin%20de%20Eventos%20San%20Joaquin!5e0!3m2!1ses!2smx!4v1583544204890!5m2!1ses!2smx" frameborder="0" style={{'border':0}} allowfullscreen=""></iframe>
      </div>

      <div id="confirmation-button" className="inv-container space-on-text">
        <button type="button" className="btn-style" onClick={() => this.setState ({showConfirmation: !this.state.showConfirmation})} >CONFIRMAR ASISTENCIA</button>
        {
          this.state.showConfirmation?
          <div id="test" className="test-container">Dress Code: CASUAL. NO NIÑOS</div>
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
