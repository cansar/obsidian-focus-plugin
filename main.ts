import { Plugin } from "obsidian";

export default class FocusModePlugin extends Plugin {
  private isFocusMode = false;

  onload() {
    this.addCommand({
      id: "focus-mode",
      name: "Toggle focus mode",
      callback: this.toggleFocusMode.bind(this),
    });
  }

  onunload() {
    // Clean up when plugin is disabled
    if (this.isFocusMode) {
      document.body.classList.remove('focus-mode');
    }
  }

  toggleFocusMode() {
    this.isFocusMode = !this.isFocusMode;
    
    if (this.isFocusMode) {
      document.body.classList.add('focus-mode');
    } else {
      document.body.classList.remove('focus-mode');
    }
  }
}
