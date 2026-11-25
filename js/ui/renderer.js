(() => {
  const {
    CHARACTERS,
    METER_CONFIG,
    getLocationPhoto,
    getMediaForDialogue,
    isVideoAsset,
    LOCATIONS,
    STORY_SCENES,
    gameStore,
    meterColor,
    meterLabel,
  } = window.VN;

  class Renderer {
  constructor(onChoiceSelect) {
    this.onChoiceSelect = onChoiceSelect;
    this.typingTimer = null;
    this.isTyping = false;
    this.fullLineText = "";
    this.currentMediaPath = null;

    this.el = {
      startScreen: document.getElementById("start-screen"),
      gameScreen: document.getElementById("game-screen"),
      endingScreen: document.getElementById("ending-screen"),
      hudChapter: document.getElementById("hud-chapter"),
      hudLocation: document.getElementById("hud-location"),
      hudTime: document.getElementById("hud-time"),
      hudTitle: document.getElementById("hud-scene-title"),
      sceneBg: document.getElementById("scene-background"),
      sceneMedia: document.getElementById("scene-media"),
      toastContainer: document.getElementById("meter-toast-container"),
      choicesContainer: document.getElementById("choices-container"),
      speakerName: document.getElementById("speaker-name"),
      emotionTag: document.getElementById("emotion-tag"),
      dialogueText: document.getElementById("dialogue-text"),
      dialogueProgress: document.getElementById("dialogue-progress"),
      dialogueHint: document.getElementById("dialogue-hint"),
      metersPanel: document.getElementById("meters-panel"),
      metersList: document.getElementById("meters-list"),
      meterStatus: document.getElementById("meter-overall-status"),
      historyList: document.getElementById("history-list"),
      endingBadge: document.getElementById("ending-badge"),
      endingTitle: document.getElementById("ending-title"),
      endingDesc: document.getElementById("ending-description"),
      endingSummary: document.getElementById("ending-meters-summary"),
    };
  }

  showScreen(name) {
    this.el.startScreen.classList.toggle("active", name === "start");
    this.el.gameScreen.classList.toggle("active", name === "game");
    this.el.endingScreen.classList.toggle("active", name === "ending");
  }

  renderScene() {
    const scene = gameStore.getCurrentScene();
    if (!scene) return;

    const loc = LOCATIONS[scene.location] || { name: scene.location, gradient: "" };
    this.el.hudChapter.textContent = `Ch. ${scene.chapter}`;
    this.el.hudLocation.textContent = loc.name;
    this.el.hudTime.textContent = scene.time || "Day";
    this.el.hudTitle.textContent = scene.title;

    this.renderBackground(scene.location, loc.gradient);
    this.renderDialogue();
    this.renderMeters();
  }

  renderBackground(locationId, fallbackGradient) {
    const bgPhoto = getLocationPhoto(locationId);
    this.el.sceneBg.style.backgroundImage = fallbackGradient;

    if (!bgPhoto) return;
    const probe = new Image();
    probe.onload = () => {
      this.el.sceneBg.style.backgroundImage = `url("${bgPhoto}")`;
    };
    probe.src = bgPhoto;
  }

  renderCharacterMedia(scene, dialogueIndex = 0) {
    if (!scene?.character) {
      this.currentMediaPath = null;
      this.el.sceneMedia.innerHTML = "";
      return;
    }

    const sceneKeys = Object.keys(STORY_SCENES);
    const sceneNumericIndex = Math.max(0, sceneKeys.indexOf(scene.id));
    const mediaPath = getMediaForDialogue(scene, dialogueIndex, sceneNumericIndex);

    if (mediaPath && mediaPath === this.currentMediaPath && this.el.sceneMedia.firstChild) {
      return;
    }
    this.currentMediaPath = mediaPath;
    this.el.sceneMedia.innerHTML = "";

    const char = CHARACTERS[scene.character];
    const emotion = scene.emotion || "neutral";

    const renderFallback = () => {
      const card = document.createElement("div");
      card.className = "character-fallback";
      card.innerHTML = `
        <div class="fallback-avatar">${char.name.charAt(0)}</div>
        <div class="fallback-name">${char.name}</div>
        <div class="fallback-emotion">${emotion}</div>
        <div class="fallback-hint">Media unavailable:<br><code>${mediaPath || "none"}</code></div>
      `;
      this.el.sceneMedia.innerHTML = "";
      this.el.sceneMedia.appendChild(card);
    };

    if (!mediaPath) {
      renderFallback();
      return;
    }

    if (isVideoAsset(mediaPath)) {
      const video = document.createElement("video");
      video.className = "character-photo";
      video.src = mediaPath;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.onerror = renderFallback;
      this.el.sceneMedia.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.className = "character-photo";
      img.alt = `${char.name} (${emotion})`;
      img.src = mediaPath;
      img.onerror = renderFallback;
      this.el.sceneMedia.appendChild(img);
    }
  }

  renderDialogue() {
    const scene = gameStore.getCurrentScene();
    const lines = scene.dialogue || [];
    const idx = Math.min(gameStore.state.dialogueIndex, Math.max(0, lines.length - 1));
    const currentLine = lines[idx] || { speaker: "Narrator", text: "" };

    this.renderCharacterMedia(scene, idx);
    gameStore.recordDialogueLine(currentLine);

    this.el.speakerName.textContent = currentLine.speaker;
    this.el.speakerName.className = "speaker-name";
    if (currentLine.speaker === "Narrator") {
      this.el.speakerName.classList.add("narrator");
    } else if (currentLine.speaker === "You") {
      this.el.speakerName.classList.add("protagonist");
    } else if (currentLine.speaker !== "Sana") {
      this.el.speakerName.classList.add("side-speaker");
    }

    this.el.emotionTag.textContent = scene.emotion || "neutral";
    this.el.emotionTag.hidden = !scene.character;
    this.el.dialogueProgress.textContent = `${idx + 1} / ${lines.length}`;

    const isLastLine = idx >= lines.length - 1;
    this.el.dialogueHint.textContent = isLastLine ? "Choose your response ▾" : "Click or press Space ▸";

    this.typeText(currentLine.text, () => {
      if (isLastLine) {
        this.renderChoices(scene.choices || []);
      } else {
        this.el.choicesContainer.innerHTML = "";
      }
    });

    if (!isLastLine) {
      this.el.choicesContainer.innerHTML = "";
    }
  }

  typeText(text, onComplete) {
    clearInterval(this.typingTimer);
    this.fullLineText = text;
    const speed = Number(gameStore.state.textSpeed);

    if (speed <= 0) {
      this.el.dialogueText.textContent = text;
      this.isTyping = false;
      onComplete();
      return;
    }

    this.isTyping = true;
    this.el.dialogueText.textContent = "";
    let i = 0;

    this.typingTimer = setInterval(() => {
      i += 1;
      this.el.dialogueText.textContent = text.slice(0, i);
      if (i >= text.length) {
        clearInterval(this.typingTimer);
        this.isTyping = false;
        onComplete();
      }
    }, speed);
  }

  finishTypingOrAdvance() {
    const scene = gameStore.getCurrentScene();
    const lines = scene.dialogue || [];
    const isLastLine = gameStore.state.dialogueIndex >= lines.length - 1;

    if (this.isTyping) {
      clearInterval(this.typingTimer);
      this.isTyping = false;
      this.el.dialogueText.textContent = this.fullLineText;
      if (isLastLine) {
        this.renderChoices(scene.choices || []);
      }
      return;
    }

    if (!isLastLine) {
      gameStore.state.dialogueIndex += 1;
      this.renderDialogue();
    }
  }

  renderChoices(choices) {
    this.el.choicesContainer.innerHTML = "";
    const available = choices.filter((c) => gameStore.isChoiceUnlocked(c));

    available.forEach((choice, index) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.dataset.index = String(index);
      btn.innerHTML = `
        <span>${choice.text}</span>
        <span class="choice-key">${index + 1}</span>
      `;
      btn.addEventListener("click", () => this.onChoiceSelect(choice));
      this.el.choicesContainer.appendChild(btn);
    });
  }

  renderMeters() {
    const meters = gameStore.getSanaMeters();
    const avg = gameStore.getAverageAffection();
    this.el.meterStatus.textContent = meterLabel(avg);
    this.el.metersList.innerHTML = "";

    for (const [key, cfg] of Object.entries(METER_CONFIG)) {
      const value = meters[key] ?? 0;
      const pct = Math.round((value / cfg.max) * 100);
      const color = key === "jealousy" ? "#a855f7" : meterColor(value, cfg.max);

      const row = document.createElement("div");
      row.className = "meter-row";
      row.innerHTML = `
        <div class="meter-row-top">
          <span class="meter-name">${cfg.label}</span>
          <span class="meter-value">${value} / ${cfg.max}</span>
        </div>
        <div class="meter-track">
          <div class="meter-fill" style="width: ${pct}%; background-color: ${color};"></div>
        </div>
      `;
      this.el.metersList.appendChild(row);
    }
  }

  showMeterToasts(deltas) {
    if (!deltas.length) return;
    deltas.forEach(({ label, delta }) => {
      const toast = document.createElement("div");
      toast.className = `meter-toast ${delta > 0 ? "positive" : "negative"}`;
      toast.textContent = `${label} ${delta > 0 ? "+" : ""}${delta}`;
      this.el.toastContainer.appendChild(toast);
      setTimeout(() => toast.remove(), 2400);
    });
  }

  renderHistory() {
    this.el.historyList.innerHTML = "";
    gameStore.state.history.forEach((entry) => {
      const item = document.createElement("div");
      item.className = "history-entry";
      item.innerHTML = `<span class="history-speaker">${entry.speaker}:</span><span>${entry.text}</span>`;
      this.el.historyList.appendChild(item);
    });
    this.el.historyList.scrollTop = this.el.historyList.scrollHeight;
  }

  renderEnding() {
    const ending = gameStore.evaluateEnding();
    const meters = gameStore.getSanaMeters();

    this.el.endingBadge.textContent = ending.badge;
    this.el.endingTitle.textContent = ending.title;
    this.el.endingDesc.textContent = ending.description;

    this.el.endingSummary.innerHTML = "";
    for (const [key, cfg] of Object.entries(METER_CONFIG)) {
      const stat = document.createElement("div");
      stat.className = "ending-stat";
      stat.innerHTML = `
        <div class="ending-stat-label">${cfg.label}</div>
        <div class="ending-stat-val">${meters[key]} / ${cfg.max}</div>
      `;
      this.el.endingSummary.appendChild(stat);
    }

    this.showScreen("ending");
  }
}

  window.VN.Renderer = Renderer;
})();
