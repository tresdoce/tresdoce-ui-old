import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from './Button';

import { withKnobs, text} from '@storybook/addon-knobs';

//import mdx from './Button.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withKnobs],
  /*docs: {
    page: mdx,
  },*/
} as Meta;

export const Default = () => {
  const foo = text('foo','text button');
  const onClick = text('onClick', 'click'  )

  return <Button foo={foo} onClick={ () => alert(onClick)}/>
}

