import React from 'react';
import styled from 'styled-components';
import Left_line from '../Images/Left_line.png';
import Right_line from '../Images/Right_line.png';
import Bootcamp_ from '../Images/Bootcamp_.png'


function Bootcamps() {
  return (
      <Wrapper>
          <Head>
            <img src={Left_line} />
            <h2>Bootcamps</h2>
            <img src={Right_line} />
        </Head>
        <Boot_camp>
             <Text>
                 <h2>“Working together towards a common goal.”</h2>
                 <p>Collaboration is valued by our employees who want to feel like their input matters, our partners who want to be by our side for a phenomenal customer experience, and our customers who want to feel like they’re more to you than just another client.”
                 </p>
                 <a href='#'>Learn More &gt;</a>
             </Text>
        <div>
            <img src={Bootcamp_} />
        </div>
        </Boot_camp>
      </Wrapper>
  );
}

export default Bootcamps;
const Wrapper = styled.div`
padding:3rem 0;
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

const Boot_camp = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:0 8rem;
`

const Text = styled.div`
padding:1rem 18rem 1rem 0;
h2{
    font-weight:500;
    font-size:1.6rem;
}
p{
    font-size:1.1rem;
    padding:.8rem 0;
}
a{
    text-decoration:none;
    color: #3577F5;
   
}
`