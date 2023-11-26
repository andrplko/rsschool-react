interface FormElements extends HTMLFormControlsCollection {
  search: HTMLInputElement;
}

export interface SearchFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}
