function findAndDeleteBlockedMessages(addedNodes) {
  addedNodes.forEach(node => {
    if ('querySelectorAll' in node) {
      const messages = node.querySelectorAll("[class^=blockedSystemMessage-]");
      messages.forEach((message) => {
        const parent = message.parentElement.parentElement.parentElement;
        if (parent) {
          parent.style.display = "none";
        }
      });

      const forumPosts = node.querySelectorAll("[class^=firstMessageContent-")
      forumPosts.forEach((forumPost) => {
        if (forumPost.textContent.includes("Post contains a blocked message")) {
          const parent = forumPost.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
          if (parent) {
            parent.style.display = "none";
          }
        };
      })
    }
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
