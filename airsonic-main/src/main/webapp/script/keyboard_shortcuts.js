function isKeyboardShortcutsEnabled() {
  if (window === parent.frames.top) {
    var config = JSON.parse(document.getElementById('preferencesConfig').textContent)
    return config['keyboardShortcutsEnabled'];
  } else {
    return parent.frames.top.isKeyboardShortcutsEnabled();
  }
}

if (isKeyboardShortcutsEnabled()) {
  Mousetrap.bind('space', function() { parent.frames.playQueue.onToggleStartStop(); return false; });
  Mousetrap.bind('backspace', function() { window.history.back(); return false; });
  Mousetrap.bind('s', function() { parent.frames.playQueue.onToggleStartStop(); return false; });
  Mousetrap.bind('left',  function() { parent.frames.playQueue.onFastBackward(); });
  Mousetrap.bind('a',  function() { parent.frames.playQueue.onPrevious(); });
  Mousetrap.bind('right', function() { parent.frames.playQueue.onFastForward(); });
  Mousetrap.bind('d', function() { parent.frames.playQueue.onNext(); });
  Mousetrap.bind('*',     function() { parent.frames.playQueue.onStarCurrent(); });
  Mousetrap.bind('plus',  function() { parent.frames.playQueue.onGainAdd(+5); });
  Mousetrap.bind('r',  function() { parent.frames.playQueue.onGainAdd(+5); });
  Mousetrap.bind('-',     function() { parent.frames.playQueue.onGainAdd(-5); });
  Mousetrap.bind('f',     function() { parent.frames.playQueue.onGainAdd(-5); });
  Mousetrap.bind('q',     function() { parent.frames.playQueue.onTogglePlayQueue(); });

  Mousetrap.bind('/',     function() { parent.frames.upper.$("#query").focus(); });
  Mousetrap.bind('m',     function() { parent.frames.upper.toggleLeftFrameVisible(); });
  Mousetrap.bind('e',     function() { parent.frames.upper.toggleLeftFrameVisible(); });

  Mousetrap.bind('h', function() { parent.frames.main.location.href = "home.view?"; });
  Mousetrap.bind('1', function() { parent.frames.main.location.href = "home.view?"; });
  Mousetrap.bind('2', function() { parent.frames.main.location.href = "nowPlaying.view?"; });
  Mousetrap.bind('g p', function() { parent.frames.main.location.href = "playlists.view?"; });
  Mousetrap.bind('g o', function() { parent.frames.main.location.href = "podcastChannels.view?"; });
  Mousetrap.bind('g s', function() { parent.frames.main.location.href = "settings.view?"; });
  Mousetrap.bind('g t', function() { parent.frames.main.location.href = "starred.view?"; });
  Mousetrap.bind('g r', function() { parent.frames.main.location.href = "more.view?"; });
  Mousetrap.bind('g a', function() { parent.frames.main.location.href = "help.view?"; });
  Mousetrap.bind('?',   function() { parent.frames.main.location.href = "more.view#shortcuts"; });
}
