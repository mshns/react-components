import React from 'react';

class Form extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      searchInputValue: localStorage.getItem('searchInputValue') ?? '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  titleRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();

  handleChange() {
    console.log(this.titleRef.current?.value);
    console.log(this.dateRef.current?.value);
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Product card</legend>
          <fieldset>
            <legend>Product title</legend>
            <input ref={this.titleRef} type="text" onChange={this.handleChange} />
          </fieldset>

          <fieldset>
            <legend>Date of creation</legend>
            <input ref={this.dateRef} type="date" />
          </fieldset>

          <fieldset>
            <legend>Brand</legend>
            <select>
              <option value="javascript">Xiaomi</option>
              <option value="php">Apple</option>
            </select>
          </fieldset>

          <fieldset>
            <legend>Category</legend>
            <input type="checkbox" id="smartphones" />
            <label htmlFor="smartphones">Smartphones</label>

            <input type="checkbox" id="laptops" />
            <label htmlFor="laptops">Laptops</label>
          </fieldset>

          <fieldset>
            <legend>Discounted</legend>
            <input type="radio" id="yes" name="discounted" />
            <label htmlFor="yes">Yes</label>

            <input type="radio" id="no" name="discounted" />
            <label htmlFor="no">No</label>
          </fieldset>

          <fieldset>
            <legend>Image</legend>
            <input type="file" accept="image/png, image/jpeg" />
          </fieldset>

          <button type="submit">Create a card</button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
