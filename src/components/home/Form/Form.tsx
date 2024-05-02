import { type ChangeEvent, type FormEvent, type ReactElement } from 'react';
import './form.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeForm } from '@src/redux/states';
import { type AppStore } from '@src/redux/Store.ts';

export const Form = (): ReactElement => {
  const formData = useSelector((store: AppStore) => store.form);

  const dispatch = useDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    dispatch(changeForm({ ...formData, [name]: value }));
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target;
    dispatch(changeForm({ ...formData, documentType: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__group">
        <select
          id="documentType"
          name="documentType"
          value={formData.documentType}
          onChange={handleSelectChange}
          className="form__select">
          <option value="DNI">DNI</option>
          <option value="CE">CE</option>
        </select>
        <div className="form__subgroup">
          <label htmlFor="dni" className="form__label">
            Nro. de documento
          </label>
          <input
            type="number"
            id="dni"
            name="dni"
            inputMode="numeric"
            value={formData.dni}
            onChange={handleInputChange}
            className="form__input form__input--dni"
            required
          />
        </div>
      </div>
      <div className="form__group">
        <label htmlFor="phone" className="form__label">
          Celular
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="form__input form__input--phone"
          required
        />
      </div>
      <div className="form__terms">
        <label htmlFor="checkbox1" className="form__check">
          <input
            type="checkbox"
            id="checkbox1"
            name="checkbox1"
            className="form__checkbox"
          />
          Acepto lo Política de Privacidad
        </label>
        <label htmlFor="checkbox2" className="form__check">
          <input
            type="checkbox"
            id="checkbox2"
            name="checkbox2"
            className="form__checkbox"
          />
          Acepto la Política Comunicaciones Comerciales
        </label>
        <p className="form__link">Aplican Términos y Condiciones</p>
      </div>
      <button type="submit" className="form__button">
        Cotiza aquí
      </button>
    </form>
  );
};
