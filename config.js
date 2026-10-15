// Configuração do dashboard. Os dois valores são públicos (não são segredos):
// quem abrir a página só consegue algo se entrar com a conta Google autorizada.
//
// 1) GOOGLE_CLIENT_ID: ID do cliente OAuth (tipo "Aplicativo da Web") criado no Google Cloud.
// 2) API_URL: URL do web app do Apps Script (a que termina com /exec).
window.TELEFONISTA = {
  GOOGLE_CLIENT_ID: '454225852685-rbag23nf7kn37tr47j27eim2knbhpsuv.apps.googleusercontent.com',
  API_URL: 'https://script.google.com/macros/s/AKfycbwiuf9G5F7Y0-MJXuvKGDt2KaPWdaJOZuFfM6w9bqgFfKDS-ZcyrcEhDuSfHDvPJYK4/exec'
};
