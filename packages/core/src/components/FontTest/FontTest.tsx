import * as React from 'react';
import { withTheme } from '../Theme';
import { FontTestProps } from './FontTest.types';
import {P} from './styles';

const FontTest: React.FC<FontTestProps> = ({
 ...rest
}) => {

  return (
    <div>

      <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.</P>

    </div>
  );
};

FontTest.displayName = '@tresdoce-ui/core/FontTest';

export default withTheme(FontTest);
