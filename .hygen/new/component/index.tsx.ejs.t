---
to: <%= absPath %>/index.tsx
---
import * as React from 'react';
import { Wrapper } from './style';

interface <%= component_name %>Props {}

export const <%= component_name %>: React.FC<<%= component_name %>Props> = (props) => {
  console.log('props:',props);
  return (
        <Wrapper>
        CustomSelect component...
        </Wrapper>
  );
};