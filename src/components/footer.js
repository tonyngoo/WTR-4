import styled from 'styled-components';
import "../App.css";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px;
    align-items: center;
    background: #20549c;
    text-align: center;
`;


const Text = styled.span`
    text-align: center;
    flex-grow: 1;
    color: #ffffff;
    font-weight: 400;
    padding-left: 100px;
`;

const Button = styled.button`
    background-color: white;
    border: none;
    border-radius: 10px;
    width: 100px;
    height: 25px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    font-weight: bold;
    color: #20549c;
`

const BtnContainer = styled.div`
    text-align: right;
`;

const Footer = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return(
        <Container>
            <Text>© 2024 - Tony Ngo </Text>
            <BtnContainer>
            <Button 
                    onClick={handleScroll}
                    variant='contained'
                    sx={{
                        backgroundColor: '#8a8a8a',
                        fontFamily: `'Inter', sans-serif;`,
                        
                    }}
                >
                    Scroll To Top
                </Button>
            </BtnContainer>
        </Container>
    );
};

export default Footer;