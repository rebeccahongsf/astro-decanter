import { Container } from '../Container'
import { IdentityBar } from '../IdentityBar';
import { Lockup } from '../Lockup'
import { Skiplink } from '../accessibility/SkipLink';
import { MainMenu, type MainMenuItem } from '../navigation/MainMenu'


const mainMenuGroups: MainMenuItem[] = [
  { link: '/', text: 'Get Started' },
  { link: '/', text: 'Blog' },
  { link: '/', text: 'Showcase' },
];

export const Masthead = ({}) => {
  return (
    <header className="shadow-lg border-b border-black-20 z-50">
      <Skiplink />
      <IdentityBar />
      <Container>
        <Lockup url='/' line1='Astro Decanter' />
        <div>
          <MainMenu mainMenuItems={mainMenuGroups} />
      </div>
    </Container>
  </header>
  )
}