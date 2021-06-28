import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // Renderizando componente
    const { container } = render(<Main />)

    // Espero que tenha um tag heading e tenha um text react avançado
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // print
    expect(container.firstChild).toMatchSnapshot()
  })
})
