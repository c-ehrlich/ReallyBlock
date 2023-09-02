function findAndDeleteBlockedMessages(addedNodes) {
  addedNodes.forEach(node => {
    const messages = node.querySelectorAll("[class^=blockedSystemMessage-]");
    const containers = [...messages].map(item => item.parentElement.parentElement.parentElement);
    containers.forEach((item) => item.style.display = "none");

    const questions = node.querySelectorAll("[class^=firstMessageContent-")
    const questionContainers = [...questions]
      .filter(item => item.textContent.includes("Post contains a blocked message"))
      .map(item => item.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
    questionContainers.forEach((item) => item.style.display = "none");
  });
}

const targetNode = document.querySelector("body");
const config = { attributes: true, childList: true, subtree: true };
const observer = new MutationObserver((mutationList, _observer) => {
  for (const mutation of mutationList) {
    if (mutation.addedNodes.length > 0) {
      findAndDeleteBlockedMessages(mutation.addedNodes);
    }
  }
});

observer.observe(targetNode, config);
