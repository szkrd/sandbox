import {
  Button,
  CompoundButton,
  Link as FluentLink,
  makeStyles,
  mergeClasses,
  shorthands as sh,
  tokens,
} from '@fluentui/react-components';
import { CalendarMonthRegular } from '@fluentui/react-icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouterPaths } from '../routerPaths';
import { Paragraph } from './common/Paragraph';
import moduleStyles from './StylingPage.module.scss';

const useStyles = makeStyles({
  button: {
    color: tokens.colorPaletteMarigoldForeground2,
    backgroundColor: tokens.colorPaletteMarigoldBackground2,
    boxShadow: `1px 1px 5px 1px ${tokens.colorPaletteMarigoldBackground3}`,
    textTransform: 'uppercase',
    ...sh.borderRadius('10px'),
    '&:hover': {
      backgroundColor: tokens.colorPaletteMarigoldBackground3,
      color: tokens.colorPaletteMarigoldBackground2,
    },
    '&:active': {
      // yes, without the important it's not working (but only for :active, hover is okay for example)
      backgroundColor: `${tokens.colorPaletteSeafoamBackground2} !important`,
    },
  },
});

const StylingPage: FC = () => {
  const overrides = useStyles();
  return (
    <div>
      <Paragraph>
        List of color tokens can be found{' '}
        <FluentLink href="https://react.fluentui.dev/?path=/docs/theme-colors--page">here</FluentLink>.
        <br />
        Icons:{' '}
        <FluentLink href="https://github.com/microsoft/fluentui-system-icons/blob/main/icons_regular.md">
          regular
        </FluentLink>
        ,{' '}
        <FluentLink href="https://github.com/microsoft/fluentui-system-icons/blob/main/icons_filled.md">
          filled
        </FluentLink>{' '}
        (<FluentLink href="https://www.npmjs.com/package/@fluentui/react-icons">repo: @fluentui/react-icons</FluentLink>
        )
      </Paragraph>
      <Paragraph>
        <Button appearance="primary">Primary button</Button>
      </Paragraph>
      <Paragraph>
        <Button size="small">Basic button, small</Button>
      </Paragraph>
      <Paragraph>
        <Button appearance="outline" icon={<CalendarMonthRegular />}>
          Outline only with icon
        </Button>
      </Paragraph>
      <Paragraph>
        <Button className={mergeClasses(overrides.button, moduleStyles.button)}>Custom button</Button>
      </Paragraph>
      <Paragraph>Compound button styled hackishly using the scss module:</Paragraph>
      <Paragraph>
        <CompoundButton
          icon={<CalendarMonthRegular />}
          secondaryContent="Secondary content"
          className={moduleStyles.compoundButton}
        >
          Example
        </CompoundButton>
      </Paragraph>
      <Paragraph>
        Links: <FluentLink href="https://google.com/">fluent link</FluentLink> vs{' '}
        <Link to={RouterPaths.Landing}>react router link</Link>
      </Paragraph>
    </div>
  );
};

export default StylingPage;
