import { Link } from '@fluentui/react-components';
import { FC } from 'react';
import { Paragraph } from './common/Paragraph';

const LandingPage: FC = () => {
  return (
    <div>
      <Paragraph>
        Fluent v9 is the result of an effort to merge <strong>Fluent</strong> and <strong>Northstar</strong> (and
        probably it still is a mess).
      </Paragraph>
      <Paragraph>
        This week this is the <Link href="https://www.npmjs.com/package/@fluentui/react-components">npm package</Link>,
        and here's the new <Link href="https://react.fluentui.dev/">documentation</Link>.
      </Paragraph>
      <Paragraph>
        Styling uses{' '}
        <strong>
          <Link href="https://griffel.js.org/">Griffel</Link>
        </strong>
        , Microsoft's own JSS implementation (because styling wasn't already a clusterfuck in pre v9)
      </Paragraph>
    </div>
  );
};

export default LandingPage;
