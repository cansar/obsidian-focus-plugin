# Claude Development Notes

## Project Overview
This is the **Obsidian Focus Mode Plugin** - a fork of the original fullscreen plugin that provides distraction-free writing without entering fullscreen mode.

## Key Features
- Hides UI elements (sidebars, tabs, status bar, ribbon, titlebar, resize handles)
- Shows only the active pane when multiple panes are open side-by-side
- Maintains window controls and OS integration
- Toggle functionality via command palette or keyboard shortcut

## Build and Development

### Building the Plugin
```bash
npm install
npm run build
```

The build process uses Rollup to compile `main.ts` into `main.js`.

### Testing
To test the plugin:
1. Build the plugin with `npm run build`
2. Copy the plugin files to your vault's `.obsidian/plugins/obsidian-focus-mode-plugin/` directory
3. Enable the plugin in Obsidian Settings > Community plugins
4. Test the "Toggle focus mode" command

### Key Files
- `main.ts` - Core plugin logic
- `styles.css` - CSS rules for hiding UI elements
- `manifest.json` - Plugin metadata and configuration
- `README.md` - User documentation

## Implementation Details

### Focus Mode Logic (main.ts)
- `enterFocusMode()` - Captures active leaf and hides inactive ones
- `exitFocusMode()` - Restores all leaves to normal state
- `hideInactiveLeaves()` - Uses `iterateAllLeaves()` to find and hide non-active panes
- `showAllLeaves()` - Restores display of all hidden panes

### CSS Styling (styles.css)
- `.focus-mode` class applied to document.body when active
- Targets specific Obsidian UI elements for hiding
- Maintains clean padding and styling for content areas

## Recent Changes (v0.2.1)
- Added single-pane focus functionality
- Only the active pane is visible when multiple panes are open side-by-side
- Restored behavior similar to original fullscreen plugin but without fullscreen mode
- Enhanced documentation and code comments

## Release Process
1. Update version in `manifest.json`
2. Build with `npm run build`
3. Commit changes and create git tag
4. Create GitHub release with built files

## Common Commands
- **Build**: `npm run build`
- **Test locally**: Copy built files to vault plugins directory
- **Lint/Format**: Check if project has lint scripts in package.json