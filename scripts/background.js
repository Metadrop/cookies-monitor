chrome.cookies.onChanged.addListener((changeInfo) => {
  const { cookie, cause } = changeInfo;

  let data = {
    cookie: cookie,
    cause: cause,
  }

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { message: "cookieEvent", data: data });
  });
});
