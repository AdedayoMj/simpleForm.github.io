function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

const txtFieldState = {
  value: "",
  valid: true,
  typeMismatch: false,
  errMsg: "" };


const ErrorValidationLabel = ({ txtLbl }) =>
React.createElement("label", { htmlFor: "", style: { color: "white" } },
txtLbl);




class LoginForm extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "reduceFormValues",



















    formElements => {

      const arrElements = Array.prototype.slice.call(formElements);


      const formValues = arrElements.
      filter(elem => elem.name.length > 0).
      map(x => {
        const { typeMismatch } = x.validity;
        const { name, type, value } = x;

        return {
          name,
          type,
          typeMismatch,
          value,
          valid: x.checkValidity() };

      }).
      reduce((acc, currVal) => {

        const { value, valid, typeMismatch, type } = currVal;
        const { fieldName, requiredTxt, formatErrorTxt } = this.state[
        currVal.name];



        acc[currVal.name] = {
          value,
          valid,
          typeMismatch,
          fieldName,
          requiredTxt,
          formatErrorTxt };


        return acc;
      }, {});

      return formValues;
    });_defineProperty(this, "checkAllFieldsValid",

    formValues => {
      return !Object.keys(formValues).
      map(x => formValues[x]).
      some(field => !field.valid);
    });_defineProperty(this, "handleSubmit",


    e => {
      e.preventDefault();
      this.setState({ loading: true });

      const form = e.target;
      const formValues = this.reduceFormValues(form.elements);
      const allFieldsValid = this.checkAllFieldsValid(formValues);


      if (!allFieldsValid) {
        setTimeout(() => {

          this.setState({ loading: false, ...formValues, inputFieldText: true });
        }, 0);
      }{

        setTimeout(() => {

          this.setState({ loading: false, allFieldsValid, ...formValues });
        }, 2000);
      }

    });this.state = { email: { ...txtFieldState, fieldName: "Your Email Address *", required: true, requiredTxt: "Please enter a valid email address", formatErrorTxt: "Please enter a valid email address" }, Interest: '', loading: false, allFieldsValid: false, inputFieldText: false };this.handleChange = this.handleChange.bind(this);}handleChange(event) {this.setState({ Interest: event.target.value });}

  render() {
    const { email, firstname, lastname, allFieldsValid, loading } = this.state;
    const successFormDisplay = allFieldsValid ? "block" : "none";
    const inputFormDisplay = !allFieldsValid ? "block" : "none";

    const renderEmailValidationError = email.valid ?
    "" :

    React.createElement(ErrorValidationLabel, {
      txtLbl: email.typeMismatch ? email.formatErrorTxt : email.requiredTxt });


    const styleBackground = {
      backgroundColor: "black" };

    const ErrorInput = {
      borderColor: "red" };


    console.log(`Email Address: ${this.state.email.value} \nYour Interest :${this.state.Interest}`);

    return (
      React.createElement("section", { style: styleBackground, id: "loginform" },
      React.createElement(React.Fragment, null,
      React.createElement("div", { id: "align-sucess", style: { display: successFormDisplay } },
      React.createElement("div", { id: "text-heading" }, "INTERNSHIP SIGNUP FORM"),


      React.createElement("br", null),
      React.createElement("div", { id: "line" }),
      React.createElement("br", null),
      React.createElement("br", null),
      React.createElement("div", { id: "sucess" }, "Thanks for your interest"),


      React.createElement("br", null),
      React.createElement("div", { id: "text-paragraph" },
      React.createElement("p", null, "We will review your application and contact you for additional information should your background and expericence meet the requirements of one of our openings."))),


      React.createElement("div", { style: { display: inputFormDisplay } },

      React.createElement("form", {
        onSubmit: this.handleSubmit,
        noValidate: true },

      React.createElement("div", { id: "text-heading" }, "INTERNSHIP SIGNUP FORM"),


      React.createElement("br", null),
      React.createElement("div", { id: "line" }),
      React.createElement("br", null),
      React.createElement("div", { id: "text-paragraph" },
      React.createElement("p", null, "Prepare for your career with a Project Management, Web-Development, Graphic design, or Digital Marketing Internship at Northern.")),


      React.createElement("br", null),
      React.createElement("div", null,
      React.createElement("span", null, renderEmailValidationError),
      React.createElement("br", null),

      this.state.inputFieldText ? React.createElement("input", { id: "input-email", type: "email", style: ErrorInput, name: "email", placeholder: "Your Email Address *", required: true }) :
      React.createElement("input", { id: "input-email", type: "email", name: "email", placeholder: "Your Email Address *", required: true }),


      React.createElement("select", { id: "Interest", placeholder: "Your interest", onChange: this.handleChange },
      React.createElement("option", { value: "", disabled: true, selected: true, hidden: true }, "Your interest"),
      React.createElement("option", { value: "Project Management" }, "Project Management"),
      React.createElement("option", { value: "Web-Development" }, "Web-Development"),
      React.createElement("option", { value: "Graphic design" }, "Graphic design"),
      React.createElement("option", { value: "Digital Marketing" }, "Digital Marketing")),



      React.createElement("button", { type: "submit", className: "btn", disabled: loading },
      loading &&
      React.createElement("i", {
        style: { marginRight: "5px" } }),


      loading && React.createElement("span", null, "Submitting..."),
      !loading && React.createElement("span", null, "Sign Up Now \xA0", React.createElement("i", { class: "caret" })))))))));








  }}



ReactDOM.render(React.createElement(LoginForm, null), document.getElementById("App"));