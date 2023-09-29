import { Container } from '../Container'
import { Lockup } from '../Lockup'
import { MainMenu, type MainMenuItem } from '../navigation/MainMenu'


const mainMenuGroups: MainMenuItem[] = [
  { link: '/', text: 'Get Started' },
  { link: '/', text: 'Blog' },
  { link: '/', text: 'Showcase' },
];

export const Masthead = ({}) => {
  return (
    <header className="shadow-lg border-b border-black-20 z-50">
    <a href="#main-content" className="su-skiplinks">
      Skip to main content
    </a>
      <Container>
        <Lockup url='/' line1='Astro Decanter' />
        <div>
          <MainMenu mainMenuItems={mainMenuGroups} />
      </div>
    </Container>
  </header>
  )
}