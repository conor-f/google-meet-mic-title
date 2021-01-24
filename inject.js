const observer = new MutationObserver((mutations, observer) => {
  if (mutations.length === 0) return;

  const mutation = mutations[0];
  if (mutation.addedNodes.length === 0) return;

  const node = mutation.addedNodes[0];
  const text = node.data;

  if (/mic.*on/i.test(text)) document.title = "meet mic on";
  if (/mic.*off/i.test(text)) document.title = "meet mic off";
});

const handler = (response) => {
  const tryAttach = setInterval(() => {
    if (document.readyState !== "complete") return;

    const elem = document.querySelector("body > div:nth-child(3)");
    if (!elem || !elem.getAttribute("aria-live")) return;

    const props = { characterData: false, childList: true, attributes: false };
    observer.observe(elem, props);

    clearInterval(tryAttach);
  }, 10);
};

chrome.extension.sendMessage({}, handler);
