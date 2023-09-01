function findAndDeleteBlockedMessages() {
  const messages = document.querySelectorAll("[class^=blockedSystemMessage-]");
  const containers = [...messages].map(item => item.parentElement.parentElement.parentElement);
  containers.forEach(item => item.style.display = "none");

  const questions = document.querySelectorAll("[class^=firstMessageContent-")
  const questionContainers = [...questions]
    .filter(item => item.textContent.includes("Post contains a blocked message"))
    .map(item => item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
  questionContainers.forEach(item => item.style.display = "none");
}

const targetNode = document.querySelector("body");
const config = { attributes: true, childList: true, subtree: true };
const observer = new MutationObserver((mutationList, _observer) => {
  for (const _mutation of mutationList) {
    findAndDeleteBlockedMessages();
  }
});

observer.observe(targetNode, config);
