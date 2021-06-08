import * as S from './styles'

const Main = ({
  title = 'Advanced React',
  description = 'TypeScript, ReactJS, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Atom image and Advanced React writen aside"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer facing his computer"
    />
  </S.Wrapper>
)

export default Main
