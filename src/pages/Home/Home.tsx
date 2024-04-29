import { type ReactElement } from 'react';
import { Footer } from '@components/home';
import { Form } from '@components/home/Form/Form.tsx';

export const Home = (): ReactElement => {
  return (
    <div>
      <div>
        <div></div>
      </div>
      <Form />
      <Footer />
    </div>
  );
};
