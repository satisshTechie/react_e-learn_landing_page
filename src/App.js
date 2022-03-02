import styled from 'styled-components';
import Hero_section from './components/hero_section';
import Features from './components/features';
import Bootcamps from './components/bootcamps';
import Courses from './components/courses';
import Benefits from './components/benefits';
import More from './components/more';
import Support from './components/support';
import Footer from './components/footer';

function App() {
  return (
    <Wrapper>
      <Hero_section />
      <Features />
      <Bootcamps />
      <Courses />
      <Benefits />
      <More />
      <Support />
      <Footer />
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
color:white;
background:black;
font-family:Poppins,sans-serif;

`
