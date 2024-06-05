chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.message === "cookieEvent") {
    const timestamp = new Date().toISOString();
    // https://developer.chrome.com/docs/extensions/reference/api/cookies#type-OnChangedCause
    let label = "Cookie: " + message.data.cookie.name + ' ' + message.data.cookie.domain + ' ' + timestamp + ' ' + message.data.cause + (message.data.cause === "explicit" ? " (Deleted)" : "");
    console.log(label, message.data.cookie);
  }
});