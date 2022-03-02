import React from 'react';
import styled from 'styled-components';
import Left_line from '../Images/Left_line.png';
import Right_line from '../Images/Right_line.png';
import Benefit1 from '../Images/Benefit1.png';
import Benefit2 from '../Images/Benefit2.png';
import Benefit3 from '../Images/Benefit3.png';

function Benefits() {
  return (
      <Wrapper>
          {/* Heading */}
          <Head>
            <img src={Left_line} />
            <h2>Benefits</h2>
            <img src={Right_line} />
        </Head>
        {/* 1st Benefit */}
        <Main_wrapper>
            <Text>
                <h2>“ A Community to Learn and Grow Together “</h2>
                <p>Introducing Genesys Learner’s Network. Create, Share and Learn Together.</p>
            </Text>
            <div>
                <img src={Benefit1} />
            </div>
        </Main_wrapper>
        {/* 2nd Benefit */}
        <Main_wrap>
            <div>
                <img src={Benefit2} />
            </div>
            <Content>
                <h2>“ Incisively Engineered Curriculum Coupled With Comprehensible Pedagogy “</h2>
                <p>Curriculum designed to cover a wide spectrum of thesis and projects with best teaching pratices enables the learners to think.</p>
            </Content>
        </Main_wrap>
        {/* 3rd Benefit */}
        <Main_wrapper>
            <Text>
                <h2>“Intutive & Futuristic Animations and Infographics For Better Understanding Concepts “</h2>
                <p>All the Learning videos are designed with 2D & 3D animations for making the process of learning interesting. </p>
            </Text>
            <div>
                <img src={Benefit3} />
            </div>
        </Main_wrapper>
      </Wrapper>
  );
}

export default Benefits;

const Wrapper = styled.div`

`
// Heading
const Head = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:2rem;
h2{
    font-weight:500;
}
`
// 1st Benefit
const Main_wrapper = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
/* flex-wrap:wrap; */
margin:0 8rem;
`
const Text = styled.div`
padding:1rem 15rem 3rem 0;
h2{
    font-weight:500;
    font-size:1.6rem;
}
p{
    font-size:1.1rem;
    padding:.8rem 0;
}
`
// 2nd Benefit
const Main_wrap = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
/* flex-wrap:wrap; */
margin:0 8rem;
`
const Content = styled.div`
padding:1rem 0 2rem 15rem;
h2{
    font-weight:500;
    font-size:1.6rem;
}
p{
    font-size:1.1rem;
    padding:.8rem 0;
}
`
// 3rd Benefit