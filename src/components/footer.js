import React from 'react';
import styled from 'styled-components';
import Insta from '../Images/Instagram.png' ;
import Facebook from '../Images/Facebook.png'; 
import Linkedin from '../Images/Linkedin.png' ;
import Twitter from '../Images/Twitter.png'
import Genesys from '../Images/Genesys.png';
function Footer() {
  return (
      <Wrapper>
          <Footers>
            <AcademyDiv>
                <Academy>
                  <img src={Genesys} />
                  <p>Genesys Academy, <br/> A Genesys Technovation Venture.</p>
                </Academy>
                <Social_div>
                  <a href='#'><img src={Insta} /></a>
                  <a href='#'><img src={Facebook} /></a>
                  <a href='#'><img src={Twitter} /></a>
                  <a href='#'><img src={Linkedin} /></a>
                </Social_div>
            </AcademyDiv>
            <Links>
                <List>
                  <h3>Company</h3>
                  <li><a href='#'>Courses</a></li>
                  <li><a href='#'>Carrers</a></li>
                  <li><a href='#'>Blog</a></li>
                  <li><a href='#'>About Us</a></li>
                </List>
                <List>
                   <h3>Legal</h3>
                   <li><a href='#'>Terms</a></li>
                   <li><a href='#'>Conditions</a></li>
                   <li><a href='#'>Privacy Policies</a></li>
                </List>
                <List>
                    <h3>Support</h3>
                    <li><a href='#'>Contact Us</a></li>
                </List>
            </Links>
          </Footers>
          <Copy_right>©  2021  GENESYS TECHNOVATION PVT LTD. All Rights Reserved. All Wrongs Reversed.</Copy_right>
      </Wrapper>
  );
}

export default Footer;
const Wrapper = styled.div`
background:#3577f5;
padding:2rem 1rem;
`
const AcademyDiv = styled.div``
const Academy = styled.div`
p{
    font-size:0.8rem;
}
`
const Social_div = styled.div`
display:flex;
align-items:center;
gap:0.6rem;
`

const Links = styled.div`
display:flex;
justify-content:space-evenly;
gap:3rem;
`
const List = styled.ul`
h3{
font-weight:500;
}
li{
    list-style: none;
    line-height:2rem;
    a{
        text-decoration:none;
        color:white;
        &:hover{
            cursor:pointer;
        }
    }
}
`
const Footers = styled.footer`
display:flex;
justify-content:space-evenly;
align-items:center;
gap:7rem;
`
const Copy_right = styled.p`
text-align:center;
padding:2.5rem 0;
font-size:13px;
`