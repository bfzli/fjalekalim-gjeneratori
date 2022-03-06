import styled from 'styled-components'

const Container = styled.footer`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing);
  border-bottom: 1px solid var(--border);
`;

export default function Footer() {
  return (
    <Container>
      Copyright 3000
    </Container>
  )
}
