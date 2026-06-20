// Force a fresh load when browser restores page from back-forward cache
window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    window.location.reload();
  }
});
