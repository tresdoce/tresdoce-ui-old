import * as React from 'react';
import { withTheme } from '../Theme';
import { FontTestProps } from './FontTest.types';
import {H1, H2, H3, H4, H5, H6, P} from './styles';

const FontTest: React.FC<FontTestProps> = ({
 ...rest
}) => {

  return (
    <div>

      {/*<h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.</p>

      <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.</p>

      <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.</p>

      <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.</p>

      <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.</p>

      <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.</p>

      <hr/>*/}

      <H1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</H1>
      <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.</P>

      <H2>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</H2>
      <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.</P>

      <H3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</H3>
      <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.</P>

      <H4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</H4>
      <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.</P>

      <H5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</H5>
      <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.</P>

      <H6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</H6>
      <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.</P>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default withTheme(FontTest);
