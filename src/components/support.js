import React from 'react';
import styled from 'styled-components';
import Supportive from '../Images/Support.png';
import Right_arrow from '../Images/Right_arrow.png';
function Support() {
  return (
      <Wrapper>
          <div>
            <Bot src={Supportive} />
          </div>
          <SupportDiv>
              <h2>Become a Great Programmer</h2>
              <p>Subscribe to get Best Practices, Nifty Tips & Tricks in<br/> the Technology you choose. </p>
              <InputField>
                 <input type='email' placeholder='Enter Your Mail'/>
                 <img src={Right_arrow} />
              </InputField>
          </SupportDiv>
      </Wrapper>
  );
}

export default Support;
const Wrapper = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
padding:5rem 0;
`

const SupportDiv = styled.div`
background:#0e0e0e;
padding:4.8rem 5rem;
border-radius:1rem;
h2{
    font-size:2rem;
    font-weight:500;
}
p{
    font-size:0.7rem;
    color:#878787;
}
input{
    width:18rem;
    height:3rem;
    border-radius:5px 0px 0px 5px ;
    border:none;
    outline:none;
    padding-left:1rem;
    ::-moz-placeholder{
        font-size:1rem;
    }
}
img{
    background:#3577f5;
    padding:1.16rem;
    border-radius:0px 3px 3px 0px;
}
`

const InputField = styled.div`
display:flex;
align-items:center;
`

const Bot = styled.img`
background:#060606;
padding:1rem 2rem 1rem 1rem;
border-radius:16px;
`