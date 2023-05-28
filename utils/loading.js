class LoadingModal {
  constructor() {
    this.modal = document.querySelector('.loading');
  }

  show() {
    this.modal.innerHTML = `
    <div class="loading-modal">
      <i class="fa-solid fa-circle-notch fa-spin"></i>
      <h2>Carregando...</h2>
    </div>
    `;
    document.body.style.overflow = 'hidden';
  }

  hide() {
    this.modal.innerHTML = '';
    document.body.style.overflow = '';
  }
}

export const loading = new LoadingModal();
