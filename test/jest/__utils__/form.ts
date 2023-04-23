/**
 * Usado para testar o envio do evento submit de um formulário em conjunto com o onInvalid de um input text.
 *
 * Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser.
 * This lets us enable fast iteration speed and prevent flakiness.
 *
 * While Jest provides browser globals such as window thanks to jsdom, they are only approximations of the real browser
 * behavior. Jest is intended to be used for unit tests of your logic and your components rather than the DOM quirks.
 *
 * We recommend that you use a separate tool for browser end-to-end tests if you need them.
 */
export const testarValidacaoDoNavegador = (view: any, inputName: string) => {
  const selector = `[name=${inputName}]:valid`;
  // eslint-disable-next-line testing-library/no-node-access
  const isValidated = view.container.querySelector(selector);
  console.log(isValidated);
  return Boolean(isValidated);
};
