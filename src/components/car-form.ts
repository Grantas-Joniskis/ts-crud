import TextField from './text-field';
import SelectField from './select-field';
import brands from '../data/brands';
import models from '../data/models';

export type Values = {
  brand: string,
  model: string,
  price: string,
  year: string,
};

type CarFormProps = {
  values: Values,
  title: string,
  submitBtnText: string,
  onSubmit: (values: Values) => void,
};

type Fields = {
  brand: SelectField,
  model: SelectField,
  price: TextField,
  year: TextField,
};

class CarForm {
  public htmlElement: HTMLFormElement;

  private props: CarFormProps;

  private htmlFormHeader: HTMLHeadingElement;

  private htmlFieldsContainer: HTMLDivElement;

  private htmlSubmitBtn: HTMLButtonElement;

  private fields: Fields;

  public constructor(props: CarFormProps) {
    this.props = props;

    this.htmlElement = document.createElement('form');
    this.htmlFieldsContainer = document.createElement('div');
    this.htmlFormHeader = document.createElement('h2');
    this.htmlSubmitBtn = document.createElement('button');

    this.fields = {
      brand: new SelectField({
        name: 'brand',
        labelText: 'Markė',
        options: brands.map(({ id, title }) => ({ title, value: id })),
      }),
      model: new SelectField({
        name: 'model',
        labelText: 'Modelis',
        options: models.map(({ id, title }) => ({ title, value: id })),
      }),
      price: new TextField({
        name: 'price',
        labelText: 'Kaina',
      }),
      year: new TextField({
        name: 'year',
        labelText: 'Metai',
      }),
    };
  }

  private initialize = (): void => {
    this.htmlFormHeader.className = 'h3 text-center';

    const fieldsArr = Object.values(this.fields);
    this.htmlFieldsContainer.className = 'd-flex flex-column gap-2';
    this.htmlFieldsContainer.append(...fieldsArr.map((field) => field.htmlElement));

    this.htmlSubmitBtn.className = 'btn btn-primary';

    this.htmlElement.className = 'card d-flex flex-column gap-3 p-3';
    this.htmlElement.append(
      this.htmlFormHeader,
      this.htmlFieldsContainer,
      this.htmlSubmitBtn,
    );
  };
}
