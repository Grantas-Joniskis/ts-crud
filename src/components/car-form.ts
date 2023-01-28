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

class CarForm {
  public htmlElement: HTMLFormElement;

  private props: CarFormProps;

  private htmlFormHeader: HTMLHeadingElement;

  private htmlFieldsContainer: HTMLDivElement;

  private htmlSubmitBtn: HTMLButtonElement;
}
