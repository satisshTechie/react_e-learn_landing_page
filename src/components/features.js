import React from 'react';
import styled from 'styled-components';
import Left_line from '../Images/Left_line.png';
import Right_line from '../Images/Right_line.png';
import Feature1 from '../Images/Feature1.png';
import Feature2 from '../Images/Feature2.png';
import Feature3 from '../Images/Feature3.png';
import Feature4 from '../Images/Feature4.png';
import Feature5 from '../Images/Feature5.png';
import Feature6 from '../Images/Feature6.png';
function Features() {
  return (
      <Wrapper>
        <Head>
            <img src={Left_line} name="left_arrow" />
            <h2>Our Core Features</h2>
            <img src={Right_line} />
        </Head>
        <FeaturesDiv>
            <Feature>
                <img src={Feature1} />
                <h3>Multiple Regional Languages</h3>
            </Feature>
            <Feature>
                <img src={Feature2} />
                <h3>Impeccable Capstone Projects</h3>
            </Feature>
            <Feature>
                <img src={Feature3} />
                <h3>Industry Demanding Courses</h3>
            </Feature>
            <Feature>
                <img src={Feature4} />
                <h3>Downloadables and Materials</h3>
            </Feature>
            <Feature>
                <img src={Feature5} />
                <h3>Help You Need Anytime</h3>
            </Feature>
            <Feature>
                <img src={Feature6} />
                <h3>Real Employable Skills</h3>
            </Feature>
        </FeaturesDiv>
      </Wrapper>
  );
}

export default Features;
const Wrapper = styled.section`

padding:5rem 0;
`
const Head = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:2rem;
h2{
    font-weight:500;
}
`

const FeaturesDiv = styled.div`
display:flex;
justify-content:space-around;
flex-wrap:wrap;
align-items:center;
margin:0 18rem;
gap:2rem;
padding:3rem 0;
`


const Feature = styled.div`
h3{
    font-size:1.2rem;
    font-weight:500;

}
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:13rem;
text-align:center;
`