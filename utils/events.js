class EventFactory {

  event = document.querySelector(".event-main");
  timeout

  constructor(){}

  closeEvent() {
    const closeEvent = document.querySelector(".closeEvent");
    closeEvent.addEventListener("click", () => {
      clearTimeout(this.timeout);
      resetEvent();
    });
    this.timeout = setTimeout(() => {
      resetEvent();
    }, 3000);
    const resetEvent = () => {
      this.event.innerHTML = '';
    };
  };

  errorMessage(message) {
    this.event.innerHTML = `
      <div class="eventMessage"> 
        <span class="bar error"></span>
        <span class="eventIcons">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <i class="fa-solid fa-times closeEvent"></i>
        </span>
        <div class="error-content">
          <h1>Ops!</h1>
          <p>Algo deu errado, ${message}</p>
        </div>
      </div>
    `;
    this.closeEvent();
  };

  successMessage(message) {
    this.event.innerHTML = `
      <div class="eventMessage">    
        <span class="bar success"></span>
        <span class="eventIcons">
          <i class="fa-solid fa-check"></i>
          <i class="fa-solid fa-times closeEvent"></i>
        </span>
        <div class="warning-content">
          <h1>Sucesso!</h1>
          <p>${message}</p>
        </div>
      </div>
    `;
    this.closeEvent();
  };


};

const eventFactory = new EventFactory();
export default eventFactory;