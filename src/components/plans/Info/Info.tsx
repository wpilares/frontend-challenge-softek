import { type ReactElement } from 'react';
import { Text } from '@components/common/Text/Text.tsx';
import './info.scss';
import { useSelector } from 'react-redux';
import { type AppStore } from '@src/redux/Store.ts';

export const Info = (): ReactElement => {
  const user = useSelector((store: AppStore) => store.form);
  const userName = user.name;

  return (
    <div className="info">
      <Text family="lato" weight="bold" className="info__title" color="blue">
        {userName} ¿Para quién deseas cotizar?
      </Text>
      <Text className="info__subtitle" family="lato" color="blue">
        Selecciona la opción que se ajuste más a tus necesidades.
      </Text>
    </div>
  );
};
