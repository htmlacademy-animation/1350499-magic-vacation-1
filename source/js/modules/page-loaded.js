export default () => {
  const page = document.querySelector(`.page`);

  window.addEventListener(`load`, () => {
    page.classList.add(`loaded`);
  });
};
