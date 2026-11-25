(() => {
  const { CHARACTERS, METER_CONFIG, ENDINGS, STORY_SCENES } = window.VN;
  const SAVE_KEY = "sana_vn_save_v1";

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function meterLabel(value) {
    if (value >= 80) return "প্রিয় (Dear)";
    if (value >= 60) return "ঘনিষ্ঠ (Intimate)";
    if (value >= 40) return "কাছাকাছি (Close)";
    if (value >= 20) return "পরিচিত (Familiar)";
    return "দূরত্ব (Distance)";
  }

  function meterColor(value, max = 100) {
    const pct = (value / max) * 100;
    if (pct >= 70) return "#22c55e";
    if (pct >= 40) return "#eab308";
    return "#ef4444";
  }

function createInitialState() {
  return {
    currentSceneId: "ch1_s01",
    dialogueIndex: 0,
    meters: {
      sana: { ...CHARACTERS.sana.initialMeters },
    },
    flags: {},
    history: [],
    textSpeed: 18,
    ended: false,
  };
}

class GameStore {
  constructor() {
    this.state = createInitialState();
  }

  reset() {
    this.state = createInitialState();
  }

  startAtScene(sceneId) {
    if (!STORY_SCENES[sceneId]) return false;
    this.state = createInitialState();
    this.state.currentSceneId = sceneId;
    this.save();
    return true;
  }

  hasSave() {
    try {
      return Boolean(localStorage.getItem(SAVE_KEY));
    } catch {
      return false;
    }
  }

  save() {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(this.state));
      return true;
    } catch {
      return false;
    }
  }

  load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      if (!parsed || !STORY_SCENES[parsed.currentSceneId]) return false;
      this.state = {
        ...createInitialState(),
        ...parsed,
        meters: {
          sana: {
            ...CHARACTERS.sana.initialMeters,
            ...(parsed.meters?.sana || {}),
          },
        },
      };
      return true;
    } catch {
      return false;
    }
  }

  getCurrentScene() {
    return STORY_SCENES[this.state.currentSceneId];
  }

  getSanaMeters() {
    return this.state.meters.sana;
  }

  getAverageAffection() {
    const m = this.state.meters.sana;
    return Math.round((m.love + m.attraction + m.trust + m.intimacy + m.respect) / 5);
  }

  recordDialogueLine(line) {
    const last = this.state.history[this.state.history.length - 1];
    if (last && last.speaker === line.speaker && last.text === line.text) return;
    this.state.history.push({ speaker: line.speaker, text: line.text });
    if (this.state.history.length > 120) {
      this.state.history.shift();
    }
  }

  applyChoice(choice) {
    const deltas = [];
    if (choice.meterEffects?.sana) {
      const sanaMeters = this.state.meters.sana;
      for (const [key, delta] of Object.entries(choice.meterEffects.sana)) {
        if (!(key in METER_CONFIG) || delta === 0) continue;
        const { min, max, label } = METER_CONFIG[key];
        const prev = sanaMeters[key];
        const next = clamp(prev + delta, min, max);
        sanaMeters[key] = next;
        deltas.push({ key, label, delta });
      }
    }

    if (choice.flags) {
      Object.assign(this.state.flags, choice.flags);
    }

    if (choice.next === "__ENDING__") {
      this.state.ended = true;
    } else if (STORY_SCENES[choice.next]) {
      this.state.currentSceneId = choice.next;
      this.state.dialogueIndex = 0;
    }

    this.save();
    return deltas;
  }

  isChoiceUnlocked(choice) {
    const cond = choice.unlockConditions;
    if (!cond) return true;
    const m = this.state.meters.sana;
    if (cond.minLove !== undefined && m.love < cond.minLove) return false;
    if (cond.minTrust !== undefined && m.trust < cond.minTrust) return false;
    if (cond.minIntimacy !== undefined && m.intimacy < cond.minIntimacy) return false;
    if (cond.flag && !this.state.flags[cond.flag]) return false;
    return true;
  }

  evaluateEnding() {
    const m = this.state.meters.sana;
    if (m.love >= 85 && m.trust >= 70 && m.intimacy >= 70) {
      return ENDINGS.true_love;
    }
    if (
      m.love >= 65 &&
      m.attraction >= 65 &&
      m.trust >= 65 &&
      m.intimacy >= 65 &&
      m.respect >= 65
    ) {
      return ENDINGS.deep_relationship;
    }
    if (m.love < 30 || m.trust < 25) {
      return ENDINGS.distance;
    }
    return ENDINGS.default;
  }
}

  window.VN.meterLabel = meterLabel;
  window.VN.meterColor = meterColor;
  window.VN.gameStore = new GameStore();
})();
