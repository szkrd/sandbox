import { Text } from '@fluentui/react-components';
import { FC, ReactNode } from 'react';

// it would be much better if we had `ITextProps`, just like in
// the older versions, because then we would have code completion proper
// (for example `<Paragraph align="center">` would work)
export const Paragraph: FC<{ children?: ReactNode }> = (props) => (
  <Text {...props} as="p" block>
    {props.children}
  </Text>
);
