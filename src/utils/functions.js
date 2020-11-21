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
