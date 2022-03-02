import React from 'react';
import styled from 'styled-components';
import Left_line from '../Images/Left_line.png';
import Right_line from '../Images/Right_line.png';
import Play_btn from '../Images/Play_btn.png'

function Courses() {
  return (
    <Wrapper>
        <Head>
            <img src={Left_line} />
            <h2>Featured Courses</h2>
            <img src={Right_line} />
        </Head>
        <CoursesDiv>
            <Course>
                <Blank></Blank>
                <h3>Learn Flex Box - CSS</h3>
                <Play_time>
                    <img src={Play_btn} />
                    <p>10hrs 23min</p>
                </Play_time>
                <h2>RS 599/-</h2>
                <ButtonDiv>
                    <Button>Buy Now</Button>
                </ButtonDiv>
            </Course>
            <Course>
                <Blank></Blank>
                <h3>Learn Flex Box - CSS</h3>
                <Play_time>
                    <img src={Play_btn} />
                    <p>10hrs 23min</p>
                </Play_time>
                <h2>RS 599/-</h2>
                <ButtonDiv>
                    <Button>Buy Now</Button>
                </ButtonDiv>
            </Course>
            <Course>
                <Blank></Blank>
                <h3>Learn Flex Box - CSS</h3>
                <Play_time>
                    <img src={Play_btn} />
                    <p>10hrs 23min</p>
                </Play_time>
                <h2>RS 599/-</h2>
                <ButtonDiv>
                    <Button>Buy Now</Button>
                </ButtonDiv>
            </Course>
        </CoursesDiv>
        <More>
            <Button_more>View More Courses</Button_more>
        </More>
    </Wrapper>
  );
}

export default Courses;
const Wrapper = styled.div`

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

const Play_time = styled.div`
display:flex;
justify-content:center;
gap:0.5rem;
align-items:center;

`

const Blank = styled.div`
height:14rem;
width:18rem;
background:#1d1d1d;
border-radius: .7rem;
`

const Course = styled.div`
background:#2d2d2d;
width:18rem;
border-radius: .7rem;
h3,h2{
    font-weight:500;
    text-align:center;
    margin-bottom: 0;
}
h2{
    margin:0;
}

`
const CoursesDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
gap:5rem;
padding:3rem 0;
`

const ButtonDiv = styled.div`
display:flex;
justify-content:center;
`
const Button = styled.button`
color:white;
background:#3577f5;
border:none;
padding:1rem 6rem;
border-radius: 0.4rem;
font-size:1rem;
font-weight:400;
margin:2rem 0;
&:hover{
    cursor:pointer;
}
`

const More = styled.div`
display:flex;
justify-content:center;
padding:2rem 0 8rem 0;
`

const Button_more = styled.button`
background:none;
color:white;
border:2px solid #3577f5;
border-radius:.4rem;
font-size:1rem;
padding:1rem 4rem;
&:hover{
    cursor:pointer;
    background:#3577f5;
    color:white;
}
`