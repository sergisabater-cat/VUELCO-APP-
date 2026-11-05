/* ===== Vuelco: settings you fill in once you have the accounts =====
   While these stay empty the app works fully: progress is saved on the phone
   and Google's TEST ads are shown (never real money, never risk for your account). */
window.VUELCO_CONFIG={
  /* Firebase project id (Firebase console > Project settings). Empty = no cloud save. */
  firebaseProjectId:'',
  /* AdMob ad unit ids (AdMob > Apps > Ad units). Empty = Google test ads. */
  admob:{
    android:{rewarded:'',interstitial:''},
    ios:{rewarded:'',interstitial:''}
  }
};
