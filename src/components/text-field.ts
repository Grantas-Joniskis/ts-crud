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

  public constructor(props: TextFieldProps) {
    TextField.instanceCounter += 1;
    this.props = props;
  }
}
