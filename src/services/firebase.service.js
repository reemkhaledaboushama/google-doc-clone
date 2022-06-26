export function InitFireBase() {
  // Initialize the Firebase SDK.
  firebase.initializeApp({
    apiKey: " AIzaSyDHCKuaBPBmJ-2guqM9tvoA3pfxFP4kyEI",
    databaseURL: "https://rtc-text-editor-default-rtdb.firebaseio.com/",
  });

  // Get Firebase Database reference.
  var firepadRef = firebase.database().ref();

  const urlparams = new URLSearchParams(window.location.search);
  const roomId = urlparams.get("id");

  if (roomId) {
    firepadRef = firepadRef.child(roomId);
  } else {
    firepadRef = firepadRef.push();
    window.history.replaceState(null, "RTC Text Editor", "?id=" + firepadRef.key);
  }
  

  return firepadRef;
}

export function InitFireBaseBackup() {
  // Initialize the Firebase SDK.
  const db2 = firebase.initializeApp({
    apiKey: " AIzaSyD7N3KIw6UXDDtGJZRYFMgxltSh9oHXTpM",
    databaseURL: "https://rtc-text-editor-2-default-rtdb.firebaseio.com/",
  });

  // Get Firebase Database reference.
  var firepadRef = db2.database().ref();

  const urlparams = new URLSearchParams(window.location.search);
  const roomId = urlparams.get("id");

  if (roomId) {
    firepadRef = firepadRef.child(roomId);
  } else {
    firepadRef = firepadRef.push();
    window.history.replaceState(null, "RTC Text Editor", "?id=" + firepadRef.key);
  }
  

  return firepadRef;
}
