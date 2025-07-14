import { Plugin } from "obsidian";

export default class FocusModePlugin extends Plugin {
  private isFocusMode = false;
  private activeLeaf: any = null;

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
      this.exitFocusMode();
    }
  }

  toggleFocusMode() {
    this.isFocusMode = !this.isFocusMode;
    
    if (this.isFocusMode) {
      this.enterFocusMode();
    } else {
      this.exitFocusMode();
    }
  }

  enterFocusMode() {
    // Get the currently active leaf
    this.activeLeaf = this.app.workspace.activeLeaf;
    if (!this.activeLeaf) return;

    // Add the focus-mode class to body for UI hiding
    document.body.classList.add('focus-mode');

    // Hide all leaves except the active one
    this.hideInactiveLeaves();
  }

  exitFocusMode() {
    // Remove the focus-mode class
    document.body.classList.remove('focus-mode');
    
    // Show all leaves again
    this.showAllLeaves();
    
    this.activeLeaf = null;
  }

  hideInactiveLeaves() {
    if (!this.activeLeaf) return;

    // Get all workspace leaves using the iterateAllLeaves method
    const allWorkspaceLeaves: any[] = [];
    this.app.workspace.iterateAllLeaves((leaf: any) => {
      allWorkspaceLeaves.push(leaf);
    });
    
    // Hide all leaves except the active one
    allWorkspaceLeaves.forEach(leaf => {
      if (leaf !== this.activeLeaf) {
        leaf.containerEl.style.display = 'none';
      }
    });
  }

  showAllLeaves() {
    // Get all workspace leaves and show them
    const allWorkspaceLeaves: any[] = [];
    this.app.workspace.iterateAllLeaves((leaf: any) => {
      allWorkspaceLeaves.push(leaf);
    });
    
    // Show all leaves
    allWorkspaceLeaves.forEach(leaf => {
      leaf.containerEl.style.display = '';
    });
  }
}
