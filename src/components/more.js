import React from 'react';
import styled from 'styled-components';
import Left_line from '../Images/Left_line.png';
import Right_line from '../Images/Right_line.png';
import More1 from '../Images/More1.png';
import More2 from '../Images/More2.png';
import More3 from '../Images/More3.png';

function More() {
  return (
      <Wrapper>
        {/* Heading */}
        <Head>
            <img src={Left_line} />
            <h2>What's More</h2>
            <img src={Right_line} />
        </Head>
        <Main_wrapper>
            <Child>
                <img src={More1} />
                <h3>Register for a Bootcamp of your Interest</h3>
            </Child>
            <Child>
                <img src={More2} />
                <h3>Register for a Bootcamp of your Interest</h3>
            </Child>
            <Child>
                <img src={More3} />
                <h3>Register for a Bootcamp of your Interest</h3>
            </Child>
        </Main_wrapper>
      </Wrapper>
  );
}

export default More;
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
const Main_wrapper = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
padding:3rem 0;
`

const Child = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
width:15rem;
img{
    height:100px;
    width:100px;
}
h3{
    text-align:center;
    font-weight:500;
}
`

