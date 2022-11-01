import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt='logo' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>Traking</span> app
          </h1>
          <p>
            I'm baby asymmetrical pickled typewriter bodega boys quinoa coloring
            book actually marfa forage. Next level live-edge edison bulb tilde,
            fit pok pok gluten-free DIY. Next level palo santo vaporware
            schlitz, venmo vice YOLO vinyl snackwave crucifix readymade paleo.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
