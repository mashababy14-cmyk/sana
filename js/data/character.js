/**
 * Single Character Definition: Sana
 */
window.VN = window.VN || {};

window.VN.CHARACTER_ORDER = ["sana"];

window.VN.METER_CONFIG = {
  love: { label: "Love", min: 0, max: 100, initial: 0 },
  attraction: { label: "Attraction", min: 0, max: 100, initial: 0 },
  trust: { label: "Trust", min: 0, max: 100, initial: 20 },
  intimacy: { label: "Intimacy", min: 0, max: 100, initial: 0 },
  respect: { label: "Respect", min: 0, max: 100, initial: 20 },
  jealousy: { label: "Jealousy", min: 0, max: 50, initial: 0 },
};

window.VN.CHARACTERS = {
  sana: {
    id: "sana",
    name: "Sana",
    role: "Love Interest",
    age: 22,
    romanceEnabled: true,
    traits: ["thoughtful", "artistic", "warm", "expressive"],
    baseLocation: "haldi_courtyard",
    color: "#a855f7",
    initialMeters: {
      love: window.VN.METER_CONFIG.love.initial,
      attraction: window.VN.METER_CONFIG.attraction.initial,
      trust: window.VN.METER_CONFIG.trust.initial,
      intimacy: window.VN.METER_CONFIG.intimacy.initial,
      respect: window.VN.METER_CONFIG.respect.initial,
      jealousy: window.VN.METER_CONFIG.jealousy.initial,
    },
  },
};
