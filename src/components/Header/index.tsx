import todoLogoImg from '../../assets/logo-todo.svg'
import { HeaderContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <img
                src={todoLogoImg}
                alt="Logo Todo"
                width="126"
                height="48"
                draggable='false'
            />
        </HeaderContainer>
    )
}