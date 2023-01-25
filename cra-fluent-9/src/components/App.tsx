import { makeStyles, shorthands as sh, tokens } from '@fluentui/react-components';
import { Link, Outlet } from 'react-router-dom';
import { RouterPaths } from '../routerPaths';
import ThemeSwitcher from './common/ThemeSwitcher';

// of course we need a browser extension to debug this shit, because the
// output for "root" looks like this: "___m2qi1j0_0000000 f1l02sjl f22iagw f1vx9l62"
const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  nav: {
    display: 'flex',
    backgroundColor: tokens.colorNeutralBackground2,
    minHeight: '32px', // of course the number as a shorthand for px is not implemented
    // padding: undefined, // what the fuck? the type definition is broken? why is this defined as "never"...
    // oh, according to the rfc / https://github.com/microsoft/griffel/issues/30 css shorthands ar NOT supported
    ...sh.padding('4px'), // = paddingTop, paddingRight, paddingBottom, paddingLeft = holy crap

    '& .links': {
      display: 'flex',
      columnGap: '10px',

      '& > a': {
        display: 'block',
        height: '28px',
        boxShadow: '0 0 2px inset var(--colorPaletteCornflowerBorderActive)',
        ...sh.padding('2px'), // THIS WILL BE RENDERED AS FOUR PADDING PROPERTIES (on four different classes), jesus
        ...sh.borderRadius('4px'),
        ...sh.border('1px', 'outset', 'var(--colorPaletteCornflowerBorderActive)'), // yes, it can not be a single string
      },
    },

    '& .extras': {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
  content: {
    height: '100%',
    ...sh.padding('10px'),
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <div className="links">
          <Link to={RouterPaths.Landing}>Home</Link>
          <Link to={RouterPaths.Components}>Components</Link>
          <Link to={RouterPaths.Styling}>Styling</Link>
        </div>
        <div className="extras">
          <ThemeSwitcher />
        </div>
      </nav>
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
