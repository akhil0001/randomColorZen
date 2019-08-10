export function fetchARandomColorFromHexNoop() {
  const url = window.encodeURI("https://api.noopschallenge.com/hexbot");

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!data) {
        throw new Error(`No color found`);
      }
      return data;
    });
}
