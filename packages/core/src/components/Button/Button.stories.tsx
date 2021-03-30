import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from './Button';

import { withKnobs, text} from '@storybook/addon-knobs';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withKnobs],
  parameters:{
  },
  argTypes: {
    foo: {
      name: "foo",
      description: "Text of button description",
      defaultValue: 'foo',
      control: 'text',
    },
  },
} as Meta;

export const Default = () => {
  const foo = text('foo','text button');
  const onClick = text('onClick', 'click'  )

  return <Button foo={foo} onClick={ () => alert(onClick)}/>
}

