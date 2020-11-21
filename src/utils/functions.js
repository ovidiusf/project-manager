/**
 * Adds the projects from the firestore db collection to the passed on projects argument
 * @param {*} db
 * @param {*} projects
 */
function populateOrRefreshDB(db, projects) {
  db.collection('projects').onSnapshot(res => {
    const changes = res.docChanges();

    changes.forEach(change => {
      if (change.type === 'added') {
        projects.push({
          ...change.doc.data(),
          id: change.doc.id
        });
      }
    });
  });
}

export { populateOrRefreshDB };
