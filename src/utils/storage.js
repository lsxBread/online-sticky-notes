let localStorage = {
  setNotes(notes) {
      window.localStorage.setItem("notes", JSON.stringify(notes));
  },
  getNotes() {
      let notes = window.localStorage.getItem("notes");
      return notes ? JSON.parse(notes) : [];
  }
}

export default localStorage