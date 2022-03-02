import React from 'react';
import Logo from '../Images/Logo G.png';
import styled from 'styled-components';
// import Hamburger from '../Images/Hamburger.svg';

function Nav() {
  return (
    <Wrapper>
           {/* Navigation -> nav tag */}
    <Navigation>
        <Image src={Logo} alt='Logo'/>
        <Unordered_list>
          <li><Anchor href='/'>Home</Anchor></li>
          <li><Anchor href='#'>Courses</Anchor></li>
          <li><Anchor href='#'>Blog</Anchor></li>
          <li><Anchor href='#'>Carrers</Anchor></li>
          <li><Anchor href='#'>About Us</Anchor></li>
          <li><Anchor href='#'>Contact</Anchor></li>
        </Unordered_list>
         {/* Buttons --> div for two buttons  */}
        <Buttons>
          <Button>Login</Button>
          <Button>Sign Up</Button>
          
        </Buttons>
    </Navigation>
    {/* <img  src={Hamburger} /> */}
    </Wrapper>
  );

}

export default Nav;

const Wrapper = styled.header``
const Navigation = styled.nav`
display:flex;
justify-content:space-evenly;
align-items:center;
height:14vh;

`

const Image = styled.img`
height:60px;
width:50px;
`

const Unordered_list = styled.ul`
display:flex;
list-style:none;
justify-content:space-between;
gap:3rem;


`

const Anchor = styled.a`
text-decoration:none;
font-size:1rem;
color:#3577F5;
&:hover{
  color:white;
  cursor: pointer;
}
`

const Buttons = styled.div`
display:flex;
gap:2rem;



`

const Button = styled.button`
font-size:.9rem;
padding:.8rem 2.2rem;
background:none;
border-radius:0.3rem;
outline:none;
color:#3577F5;
border:2px solid #3577f5;
&:hover{
  background:#3577f5;
  color:white;
  cursor:pointer;
}
`