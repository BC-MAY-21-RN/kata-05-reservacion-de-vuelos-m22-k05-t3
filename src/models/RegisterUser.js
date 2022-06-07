class RegisterUser {
  constructor() {
    this.valuesRegister = {
      input1: '',
      input2: '',
      input3: '',
      passwordvisible: false,
      check1: true,
      check2: false,
    };
  }

  getValues() {
    return this.valuesRegister;
  }

  setValues(value) {
    this.valuesRegister = {...this.valuesRegister, ...value};
  }

  getBool() {
    if (
      this.valuesRegister.input1.length > 0 &&
      this.valuesRegister.input2.length > 0 &&
      this.valuesRegister.input3.length > 0 &&
      this.valuesRegister.check1 === true
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export default RegisterUser;
