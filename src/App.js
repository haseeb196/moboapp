import Header from './Header';
import Home from './Home';
import Logo from './Logo';
import Highlights from './Highlights'
import Discover from './Discover';
import Features from './Features';
import Launch from './Launch';
import Tell from './Tell';
import Testimonial from './Testimonial';
import Gallery from './Gallery';
import Pricing from './Pricing';
import Faq from './Faq';
import Contact from './Contact';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className='app'>
      <Header />
      <Element name='home'>
      <Home />
      <Logo />
      </Element>
      <Element name='features'>
      <Highlights />
      <Discover />
      <Features />
      <Launch />
      <Tell />
      <Testimonial />
      </Element>
      <Element name='gallery'>
      <Gallery />
      </Element>
      <Element name='pricing'>
     <Pricing />
     </Element>
     <Faq />
     <Element name='contact'>
     <Contact />
     </Element>
    </div>
  );
}

export default App;
