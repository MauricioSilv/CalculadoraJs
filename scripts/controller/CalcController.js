class CalcController {

  constructor() {
    this._displayCalc = "0";
    this._currentDate;
    this.initalize();
  }

  initalize() {
    let displayCalcEl = document.querySelector("#display");
    let dateEl = document.querySelector("#data");
    let timeEl = document.querySelector("#hora");

    displayCalcEl.innerHTML = "2323";
    dateEl.innerHTML = "23/12/2019";
    timeEl.innerHTML = "16:19";
  }

  get displayCalc() {
    return this._displayCalc;
  }

  set displayCalc(valor) {
    this._displayCalc = valor;
  }

  get currentDate() {
    return this._currentDate;
  }

  set currentDate(date) {
    this._currentDate = date;
  }


}