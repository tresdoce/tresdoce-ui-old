import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Button from './Button';

import { text} from '@storybook/addon-knobs';

export default {
  title: 'Components/Button',
  component: Button,
  /*parameters: {},*/
  argTypes: {
    foo: {
      name: "foo",
      description: "Text of button description",
      defaultValue: 'text button',
      control: { type: 'text' },
    },
  }
} as Meta;

export const Default = ({...args}) => {
  console.log(args)
  const foo = text('foo','text button');
  const onClick = text('onClick', 'click'  )

  return <Button foo={foo} onClick={ () => alert(onClick)}/>
}
