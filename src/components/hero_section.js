import React, {useState} from 'react';
import styled from 'styled-components';
import Nav from './nav';
import Playstore from '../Images/Playstore.png';
import Appstore from '../Images/Appstore.png';
import Down_arrow from '../Images/Down_arrow.png'

function Hero_section() {
    const [count, setCount] = useState(1);
    function increment(){
        setCount(prevCount =>prevCount+1);
       
    }
    function decrement(){
        setCount(prevCount =>prevCount-1);
    }
  return (
    <Wrapper>
    <Nav />
    <Inside_wrap>
    <Content> 
            <h1>The Future of Learning! <br/> Its Here..</h1>
            <h3>Experience The All New Way of Learning</h3>
        </Content>
        <Store>
            <Play>
                <img src={Playstore}/>
                <h3>Play Store</h3>
            </Play>
            <App>
                <img src={Appstore}/>
                <h3>App Store</h3>
            </App>
        </Store>
        <Arrow src={Down_arrow} />
    </Inside_wrap>
    <Practise>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
     <button onClick={increment}>+</button>
    </Practise>
    </Wrapper>
  );
}

export default Hero_section;
const Wrapper = styled.div`
`
const Inside_wrap = styled.div`
padding-top:4rem;
`
// Hero Section Text
const Content = styled.div`
text-align:center;
h1{
    font-weight:500;
    font-size:3.3rem;
    margin-bottom:0;
}
h3{
    font-weight:400;
    color: #A0A0A0;

}
`
// Button Div
const Store = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:2rem;
padding-top:1.3rem;

`
// Play Store Buttom
const Play = styled.button`
display:flex;
justify-content:space-around;
align-items:center;
gap: 0.3rem;
color:white;
background:#3577f5;
border:none;
border-radius:.5rem;
padding: 2px 2rem 2px 1.5rem;
font-size:0.8rem;
h3{
    font-weight:500;
}
&:hover{
    cursor:pointer;
    background:#5184e5;
}
`
// App Store Button
const App = styled.button`
display:flex;
justify-content:space-around;
align-items:center;
gap: 0.3rem;
color:white;
background:#3577f5;
border:none;
border-radius:.5rem;
padding: 2px 2rem 2px 1.5rem;
font-size:0.8rem;
h3{
    font-weight:500;
}
&:hover{
    cursor:pointer;
    background:#5184e5;
}
`

// Down Arrow
const Arrow = styled.img`
display:block;
margin:0 auto;
padding:5rem;
`

const Practise = styled.div`
display:flex;
justify-content:center;
align-items:center;
button{
    padding:1rem 2rem;
}
`