import { Button, Link } from '@fluentui/react-components';
import { CalendarMonthRegular } from '@fluentui/react-icons';
import { FC } from 'react';
import { Paragraph } from './common/Paragraph';

const StylingPage: FC = () => {
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
    </div>
  );
};

export default StylingPage;
