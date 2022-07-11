module.exports = class TextEditor {
  constructor() {
    // TODO: answer here
    this.undoStack = [];
    this.redoStack = [];
    this.topUndo = -1;
    this.topRedo = -1;
  }

  write(c) {
    // TODO: answer here
    this.topUndo = this.topUndo + 1;
    return this.undoStack.push(c);
  }

  read() {
    // TODO: answer here
    if (this.undoStack <= 1) {
      return "";
    } else {
      return this.undoStack.join("");
    }
  }

  undo() {
    // TODO: answer here
    if (this.undoStack.length > 0) {
      let c = this.undoStack.pop();
      this.topUndo = this.topUndo - 1;
      this.redoStack.push(c);
      this.topRedo = this.topRedo + 1;
      return this.undoStack;
    } else {
      return "";
    }
  }

  redo() {
    // TODO: answer here
    if (this.redoStack.length > 0) {
      let c = this.redoStack.pop();
      this.topRedo = this.topRedo - 1;
      this.undoStack.push(c);
      this.topUndo = this.topUndo + 1;
      return this.redoStack;
    } else {
      return "";
    }
  }
};
