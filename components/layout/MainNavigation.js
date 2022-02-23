import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Eventos do React</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Todos os eventos</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Adicionar novo evento</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
