// Configuração do dashboard. Os dois valores são públicos (não são segredos):
// quem abrir a página só consegue algo se entrar com a conta Google autorizada.
//
// 1) GOOGLE_CLIENT_ID: ID do cliente OAuth (tipo "Aplicativo da Web") criado no Google Cloud.
// 2) API_URL: URL do web app do Apps Script (a que termina com /exec).
window.TELEFONISTA = {
  GOOGLE_CLIENT_ID: 'COLE_AQUI_O_CLIENT_ID.apps.googleusercontent.com',
  API_URL: 'COLE_AQUI_A_URL_DO_WEB_APP_TERMINADA_EM_/exec'
};
