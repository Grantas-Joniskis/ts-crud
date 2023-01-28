export type TextFieldProps = {
  name: string,
  labelText: string,
  value?: string,
};

class TextField {
  private static instanceCounter = 0;

  private static get id() {
    return `${this.name}-${this.instanceCounter}`;
  }

  private props: TextFieldProps;

  private htmlInputElement: HTMLInputElement;

  private htmlLabelElement: HTMLLabelElement;

  public htmlElement: HTMLDivElement;

  public constructor(props: TextFieldProps) {
    TextField.instanceCounter += 1;
    this.props = props;

    this.htmlElement = document.createElement('div');
    this.htmlLabelElement = document.createElement('label');
    this.htmlInputElement = document.createElement('input');
  }

  private initialize = (): void => {
    const inputId = `input-${TextField.id}`;

    this.htmlLabelElement.setAttribute('for', inputId);
    this.htmlLabelElement.className = 'form-label';

    this.htmlInputElement.id = inputId;
    this.htmlInputElement.className = 'form-control';
    this.htmlInputElement.type = 'text';

    this.htmlElement.append(
      this.htmlLabelElement,
      this.htmlInputElement,
    );
  };
}
