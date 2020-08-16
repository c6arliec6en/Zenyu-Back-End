const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://zen-yu-ec149.firebaseio.com"
});

const collectionKey = "wp-template"
const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);


const dataController = {
  getTemplate: async (req, res) => {
    try {
      const template = []
      const col = firestore.collection(collectionKey)
      const snapshot = await col.get();

      snapshot.forEach(doc => {
        template.push(doc.data())
      });
      console.log(template)
      return res.json(template)
    } catch (err) {
      console.log(err)
    }

  }
}


module.exports = dataController