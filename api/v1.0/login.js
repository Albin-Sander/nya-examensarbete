async function addUser(body) {
    const db = this.$fire.firestore.collection('users')
    const x = await db.get()
    console.log('Inside addUser')
    this.getAllData()
    await db.doc('UUID').set({
      username: 'Markus',
    })
};