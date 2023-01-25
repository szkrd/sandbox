import {
  Button,
  CompoundButton,
  Link,
  makeStyles,
  mergeClasses,
  shorthands as sh,
  tokens,
} from '@fluentui/react-components';
import { CalendarMonthRegular } from '@fluentui/react-icons';
import { FC } from 'react';
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
        <Link href="https://react.fluentui.dev/?path=/docs/theme-colors--page">here</Link>.
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
    </div>
  );
};

export default StylingPage;
