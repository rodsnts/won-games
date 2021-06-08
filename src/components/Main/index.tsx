import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Atom image and Advanced React writen aside"
    />
    <S.Title>Advanced React</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS and Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer facing his computer"
    />
  </S.Wrapper>
)

export default Main
