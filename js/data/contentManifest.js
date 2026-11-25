/**
 * Real-Photo & Video Content Manifest for Sana (from /sana/ directory).
 * Supports both .jpg photos and .mp4 video clips, cycling every 3 dialogue lines.
 */
window.VN = window.VN || {};

const SANA_MEDIA_POOL = [
  "sana/IMDownloader_riddhii._p_post_Db5PSYkE9Zn_0.jpg",
  "sana/IMDownloader_riddhii._p_post_Db5PSYkE9Zn_1.jpg",
  "sana/IMDownloader_riddhii._p_post_Db5PSYkE9Zn_2.jpg",
  "sana/IMDownloader_riddhii._p_post_Db5PSYkE9Zn_3.jpg",
  "sana/IMDownloader_riddhii._p_post_Db5PSYkE9Zn_4.jpg",
  "sana/IMDownloader_riddhii._p_reel_DZsBX4xzM6q.mp4",
  "sana/IMDownloader_riddhii._p_post_DdeFePjk2hz_0.jpg",
  "sana/IMDownloader_riddhii._p_post_DdeFePjk2hz_1.jpg",
  "sana/IMDownloader_riddhii._p_post_DdeFePjk2hz_2.jpg",
  "sana/IMDownloader_riddhii._p_post_DdeFePjk2hz_3.jpg",
  "sana/IMDownloader_riddhii._p_post_DdeFePjk2hz_4.jpg",
  "sana/IMDownloader_kri_clothing_reel_DgC-db7BSbY.mp4",
  "sana/IMDownloader_riddhii._p_post_DdeFePjk2hz_5.jpg",
  "sana/IMDownloader_riddhii._p_post_DdeFePjk2hz_6.jpg",
  "sana/IMDownloader_riddhii._p_post_DdeFePjk2hz_7.jpg",
  "sana/IMDownloader_riddhii._p_post_DdeFePjk2hz_8.jpg",
  "sana/IMDownloader_riddhii._p_post_DdeFePjk2hz_9.jpg",
  "sana/IMDownloader_kri_clothing_reel_DgDaj-_hpRX.mp4",
  "sana/IMDownloader_riddhii._p_post_DZkooDfE92U_0.jpg",
  "sana/IMDownloader_riddhii._p_post_DZkooDfE92U_1.jpg",
  "sana/IMDownloader_riddhii._p_post_DZkooDfE92U_2.jpg",
  "sana/IMDownloader_riddhii._p_post_DZkooDfE92U_3.jpg",
  "sana/IMDownloader_riddhii._p_post_DZkooDfE92U_4.jpg",
  "sana/IMDownloader_kri_clothing_reel_DgFgPjFRtoR.mp4",
  "sana/IMDownloader_kri_clothing_reel_DgFGuKTuUqW.mp4",
  "sana/IMDownloader_kri_clothing_reel_DgGBPqPB6sj.mp4",
  "sana/IMDownloader_kri_clothing_reel_DgIb8GVBSD4.mp4",
  "sana/IMDownloader_kri_clothing_reel_DgIqLjPBkz-.mp4",
  "sana/IMDownloader_kri_gahana_reel_DaA6o4RP5ni.mp4",
  "sana/IMDownloader_kri_gahana_reel_Db-9JFBsqPR.mp4",
  "sana/IMDownloader_kri_gahana_reel_DbBeCuTP7C6.mp4",
  "sana/IMDownloader_kri_gahana_reel_DbDkpSUvw1a.mp4",
  "sana/IMDownloader_kri_gahana_reel_DbIc809vclM.mp4",
  "sana/IMDownloader_kri_gahana_reel_DbTcZ_zvF13.mp4",
  "sana/IMDownloader_kri_gahana_reel_DcjQfDEPygm.mp4",
  "sana/IMDownloader_kri_gahana_reel_DcRDhOiTcRO.mp4",
  "sana/IMDownloader_kri_gahana_reel_DctoONnPhef.mp4",
  "sana/IMDownloader_kri_gahana_reel_DdCFS5BSC6k.mp4",
  "sana/IMDownloader_kri_gahana_reel_DdZQCyUTkcq.mp4",
  "sana/IMDownloader_kri_gahana_reel_DeM3RnWPD3P.mp4",
  "sana/IMDownloader_kri_gahana_reel_DeUqYgyv7Jq.mp4",
  "sana/IMDownloader_kri_gahana_reel_DgDX22oszyY.mp4",
  "sana/IMDownloader_kri_gahana_reel_DYfPqVYvjz-.mp4",
  "sana/IMDownloader_kri_gahana_reel_DZ2tossMPb7.mp4",
  "sana/IMDownloader_kri_gahana_reel_DZablk4PFeU.mp4",
  "sana/IMDownloader_kri_gahana_reel_DZ-fIMMPv9i.mp4",
  "sana/IMDownloader_kri_gahana_reel_DZmsAKxvVuR.mp4",
  "sana/IMDownloader_kri_gahana_reel_DZut2nQvkU1.mp4",
];

const LOCATION_PHOTOS = {};

/**
 * Resolves the active media asset for the current scene & dialogue line.
 * Changes every 3 dialogue clicks (step = Math.floor(dialogueIndex / 3)).
 */
function getMediaForDialogue(scene, dialogueIndex = 0, sceneNumericIndex = 0) {
  if (!scene || !scene.character) return null;

  const line = scene.dialogue?.[dialogueIndex];
  if (line?.media) return line.media;

  const step = Math.floor(dialogueIndex / 3);
  if (Array.isArray(scene.mediaList) && scene.mediaList.length > 0) {
    return scene.mediaList[step % scene.mediaList.length];
  }

  const offset = (sceneNumericIndex * 4 + step) % SANA_MEDIA_POOL.length;
  return SANA_MEDIA_POOL[offset];
}

function isVideoAsset(path) {
  return typeof path === "string" && /\.(mp4|webm|ogg)$/i.test(path);
}

function getLocationPhoto(locationId) {
  return LOCATION_PHOTOS[locationId] || null;
}

window.VN.SANA_MEDIA_POOL = SANA_MEDIA_POOL;
window.VN.LOCATION_PHOTOS = LOCATION_PHOTOS;
window.VN.getMediaForDialogue = getMediaForDialogue;
window.VN.isVideoAsset = isVideoAsset;
window.VN.getLocationPhoto = getLocationPhoto;
