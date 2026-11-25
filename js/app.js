(() => {
  const { gameStore, Renderer, CHAPTERS } = window.VN;

  const renderer = new Renderer(handleChoiceSelect);

const btnNewGame = document.getElementById("btn-new-game");
const btnContinueGame = document.getElementById("btn-continue-game");
const chapterSelectGrid = document.getElementById("chapter-select-grid");
const btnToggleMediaFs = document.getElementById("btn-toggle-media-fs");
const btnToggleGameFs = document.getElementById("btn-toggle-game-fs");
const btnToggleMeters = document.getElementById("btn-toggle-meters");
const gameScreen = document.getElementById("game-screen");
const btnCloseMeters = document.getElementById("btn-close-meters");
const btnToggleHistory = document.getElementById("btn-toggle-history");
const btnCloseHistory = document.getElementById("btn-close-history");
const btnToggleSettings = document.getElementById("btn-toggle-settings");
const btnCloseSettings = document.getElementById("btn-close-settings");
const btnSaveNow = document.getElementById("btn-save-now");
const btnRestartStory = document.getElementById("btn-restart-story");
const btnExitTitle = document.getElementById("btn-exit-title");
const btnReplay = document.getElementById("btn-replay");
const btnBackTitle = document.getElementById("btn-back-title");
const dialogueBox = document.getElementById("dialogue-box");
const metersPanel = document.getElementById("meters-panel");
const historyModal = document.getElementById("history-modal");
const settingsModal = document.getElementById("settings-modal");
const textSpeedSelect = document.getElementById("setting-text-speed");
const saveFeedback = document.getElementById("save-feedback");

function syncContinueButton() {
  btnContinueGame.hidden = !gameStore.hasSave();
}

function renderChapterSelector() {
  if (!chapterSelectGrid) return;
  chapterSelectGrid.innerHTML = "";
  CHAPTERS.forEach((ch) => {
    const btn = document.createElement("button");
    btn.className = "chapter-btn";
    btn.disabled = !ch.startSceneId;
    btn.innerHTML = `
      <span class="chapter-btn-num">${ch.label}</span>
      <span class="chapter-btn-title">${ch.title}</span>
    `;
    if (ch.startSceneId) {
      btn.addEventListener("click", () => {
        if (gameStore.startAtScene(ch.startSceneId)) {
          renderer.showScreen("game");
          renderer.renderScene();
        }
      });
    }
    chapterSelectGrid.appendChild(btn);
  });
}

function startNewGame() {
  gameStore.reset();
  gameStore.save();
  renderer.showScreen("game");
  renderer.renderScene();
}

function continueSavedGame() {
  if (gameStore.load()) {
    textSpeedSelect.value = String(gameStore.state.textSpeed);
    if (gameStore.state.ended) {
      renderer.renderEnding();
    } else {
      renderer.showScreen("game");
      renderer.renderScene();
    }
  }
}

function handleChoiceSelect(choice) {
  const deltas = gameStore.applyChoice(choice);
  renderer.showMeterToasts(deltas);

  if (gameStore.state.ended) {
    renderer.renderEnding();
  } else {
    renderer.renderScene();
  }
}

function toggleMediaFullscreen() {
  if (document.fullscreenElement) return;
  const active = gameScreen.classList.toggle("media-fullscreen");
  btnToggleMediaFs.classList.toggle("active", active);
}

async function toggleGameFullscreen() {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch {
    // Fullscreen may be blocked by browser policy
  }
}

function syncFullscreenButtons() {
  const isGameFs = Boolean(document.fullscreenElement);
  btnToggleGameFs.classList.toggle("active", isGameFs);
  btnToggleMediaFs.disabled = isGameFs;
}

function toggleMeters(forceState) {
  const open =
    forceState !== undefined ? forceState : !metersPanel.classList.contains("open");
  metersPanel.classList.toggle("open", open);
  btnToggleMeters.classList.toggle("active", open);
}

// Button bindings
btnNewGame.addEventListener("click", startNewGame);
btnContinueGame.addEventListener("click", continueSavedGame);

dialogueBox.addEventListener("click", () => renderer.finishTypingOrAdvance());

btnToggleMediaFs.addEventListener("click", toggleMediaFullscreen);
btnToggleGameFs.addEventListener("click", toggleGameFullscreen);
document.addEventListener("fullscreenchange", syncFullscreenButtons);

btnToggleMeters.addEventListener("click", () => toggleMeters());
btnCloseMeters.addEventListener("click", () => toggleMeters(false));

btnToggleHistory.addEventListener("click", () => {
  renderer.renderHistory();
  historyModal.hidden = false;
});
btnCloseHistory.addEventListener("click", () => {
  historyModal.hidden = true;
});

btnToggleSettings.addEventListener("click", () => {
  saveFeedback.textContent = "";
  settingsModal.hidden = false;
});
btnCloseSettings.addEventListener("click", () => {
  settingsModal.hidden = true;
});

textSpeedSelect.addEventListener("change", (e) => {
  gameStore.state.textSpeed = Number(e.target.value);
  gameStore.save();
});

btnSaveNow.addEventListener("click", () => {
  const ok = gameStore.save();
  saveFeedback.textContent = ok ? "Progress saved!" : "Unable to save.";
  syncContinueButton();
});

btnRestartStory.addEventListener("click", () => {
  settingsModal.hidden = true;
  startNewGame();
});

btnExitTitle.addEventListener("click", () => {
  settingsModal.hidden = true;
  syncContinueButton();
  renderer.showScreen("start");
});

btnReplay.addEventListener("click", startNewGame);
btnBackTitle.addEventListener("click", () => {
  syncContinueButton();
  renderer.showScreen("start");
});

// Close modals on backdrop click
document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
  backdrop.addEventListener("click", () => {
    historyModal.hidden = true;
    settingsModal.hidden = true;
  });
});

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("game-screen").classList.contains("active")) return;
  if (!historyModal.hidden || !settingsModal.hidden) {
    if (e.key === "Escape") {
      historyModal.hidden = true;
      settingsModal.hidden = true;
    }
    return;
  }

  if (e.code === "Space" || e.code === "Enter") {
    e.preventDefault();
    renderer.finishTypingOrAdvance();
  } else if (e.key.toLowerCase() === "f") {
    toggleMediaFullscreen();
  } else if (e.key.toLowerCase() === "m") {
    toggleMeters();
  } else if (e.key.toLowerCase() === "l") {
    renderer.renderHistory();
    historyModal.hidden = false;
  } else if (["1", "2", "3", "4"].includes(e.key)) {
    const choiceBtns = document.querySelectorAll("#choices-container .choice-btn");
    const target = choiceBtns[Number(e.key) - 1];
    if (target) target.click();
  }
});

// Init
syncContinueButton();
renderChapterSelector();
renderer.showScreen("start");
})();
