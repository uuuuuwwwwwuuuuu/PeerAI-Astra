import styled from 'styled-components';


const HeaderComponent = styled.header`
    width: 100%;
    height: 76px;
    background-color: var(--bg-main);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #EEEEEE;
`;

const HeaderLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-main);
    padding: 24px;
    width: 100%;


    button {
        font-family: Inter;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 100%;
        transition: 0.3s ease all;
        text-align: center;

        @media (hover:hover) {
            &:hover {
                color: var(--accent);
            }
        }
    }

    & {
        img {
            transition: 0.3s ease all;
        }
        @media (hover:hover) {
            img:hover {
                transform: scale(1.1);
            }
        }
    }

    @media screen and (max-width: 770px) {
        & {
            nav {
                display: flex;
                align-items: center;
                gap: 10px;

                button {
                    font-size: 1.8rem;
                    padding: 3px;
                }
            }
        }
    }
`;

const Header= () => {


    return (
        <HeaderComponent>
            <HeaderLine>
                <nav>
                    <img src={`${process.env.PUBLIC_URL}/icons/peer_black.svg`} alt="peer icon" />
                    <button>About</button>
                    <button>Discord</button>
                    <button>Github</button>
                </nav>
                <div className='header_sign_in'>
                    <img src={`${process.env.PUBLIC_URL}/icons/person.svg`} alt="person icon" />
                    <div>
                        <a href='#'>Sign in</a>
                        <span>/</span>
                        <a href='#'>Sign up</a>
                    </div>
                </div>
            </HeaderLine>
        </HeaderComponent>
    )
}

export default Header