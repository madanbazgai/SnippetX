import * as vscode from "vscode";

/**
 * This method is called when your extension is activated
 * Your extension is activated the very first time the command is executed
 */
export function activate(context: vscode.ExtensionContext) {
  console.log("SnippetX extension is now active!");

  // Register the command to open webview
  const disposable = vscode.commands.registerCommand(
    "extension.openWebview",
    () => {
      // Create and show a new webview
      const panel = vscode.window.createWebviewPanel(
        "snippetx", // Identifies the type of the webview
        "SnippetX", // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in
        {
          enableScripts: true,
        }
      );

      // Set the webview's HTML content
      panel.webview.html = getWebviewContent();
    }
  );

  context.subscriptions.push(disposable);

  // Register a tree data provider for the snippets view
  const provider = new SnippetsProvider();
  vscode.window.registerTreeDataProvider("snippetx.snippetsView", provider);
}

/**
 * This method is called when your extension is deactivated
 */
export function deactivate() {}

/**
 * Tree data provider for the snippets view
 */
class SnippetsProvider implements vscode.TreeDataProvider<SnippetItem> {
  getTreeItem(element: SnippetItem): vscode.TreeItem {
    return element;
  }

  getChildren(element?: SnippetItem): Thenable<SnippetItem[]> {
    if (element) {
      return Promise.resolve([]);
    } else {
      return Promise.resolve([
        new SnippetItem(
          "JavaScript Snippets",
          vscode.TreeItemCollapsibleState.Collapsed
        ),
        new SnippetItem(
          "React Snippets",
          vscode.TreeItemCollapsibleState.Collapsed
        ),
        new SnippetItem(
          "Redux Snippets",
          vscode.TreeItemCollapsibleState.Collapsed
        ),
        new SnippetItem(
          "React Native Snippets",
          vscode.TreeItemCollapsibleState.Collapsed
        ),
        new SnippetItem(
          "Zustand Snippets",
          vscode.TreeItemCollapsibleState.Collapsed
        ),
        new SnippetItem(
          "Tanstack Snippets",
          vscode.TreeItemCollapsibleState.Collapsed
        ),
      ]);
    }
  }
}

/**
 * Represents a snippet item in the tree view
 */
class SnippetItem extends vscode.TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    public readonly command?: vscode.Command
  ) {
    super(label, collapsibleState);
    this.tooltip = `${this.label} - SnippetX`;
    this.description = this.label;
  }

  iconPath = {
    light: vscode.Uri.joinPath(
      vscode.Uri.file(__dirname),
      "..",
      "media",
      "icon.svg"
    ),
    dark: vscode.Uri.joinPath(
      vscode.Uri.file(__dirname),
      "..",
      "media",
      "icon.svg"
    ),
  };

  contextValue = "snippet";
}

/**
 * Generate HTML content for the webview
 */
function getWebviewContent(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SnippetX</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            padding: 20px;
            background-color: var(--vscode-editor-background);
            color: var(--vscode-editor-foreground);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .snippet-category {
            margin: 20px 0;
            padding: 15px;
            border: 1px solid var(--vscode-panel-border);
            border-radius: 8px;
        }
        .snippet-category h3 {
            color: var(--vscode-textLink-foreground);
            margin-bottom: 10px;
        }
        .snippet-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 10px;
            margin-top: 10px;
        }
        .snippet-item {
            background-color: var(--vscode-button-background);
            color: var(--vscode-button-foreground);
            padding: 8px 12px;
            border-radius: 4px;
            text-align: center;
            font-family: 'Courier New', monospace;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚀 SnippetX</h1>
        <p>Most useful VS Code snippets for modern web development</p>
    </div>
    
    <div class="snippet-category">
        <h3>📦 JavaScript Snippets</h3>
        <div class="snippet-list">
            <div class="snippet-item">clg</div>
            <div class="snippet-item">clo</div>
            <div class="snippet-item">cls</div>
            <div class="snippet-item">jmap</div>
            <div class="snippet-item">jfilter</div>
            <div class="snippet-item">jfind</div>
            <div class="snippet-item">jparse</div>
            <div class="snippet-item">jsfy</div>
        </div>
    </div>
    
    <div class="snippet-category">
        <h3>⚛️ React Snippets</h3>
        <div class="snippet-list">
            <div class="snippet-item">rfc</div>
            <div class="snippet-item">rfce</div>
            <div class="snippet-item">rfca</div>
            <div class="snippet-item">us</div>
            <div class="snippet-item">ue</div>
            <div class="snippet-item">od</div>
            <div class="snippet-item">rmap</div>
            <div class="snippet-item">rfilter</div>
            <div class="snippet-item">rtern</div>
        </div>
    </div>
    
    <div class="snippet-category">
        <h3>🔄 Redux Toolkit Snippets</h3>
        <div class="snippet-list">
            <div class="snippet-item">usl</div>
            <div class="snippet-item">udis</div>
            <div class="snippet-item">red</div>
            <div class="snippet-item">ered</div>
            <div class="snippet-item">asthunk</div>
        </div>
    </div>
    
    <div class="snippet-category">
        <h3>📱 React Native Snippets</h3>
        <div class="snippet-list">
            <div class="snippet-item">rnf</div>
            <div class="snippet-item">rnfs</div>
        </div>
    </div>
    
    <div class="snippet-category">
        <h3>🐻 Zustand Snippets</h3>
        <div class="snippet-list">
            <div class="snippet-item">zs</div>
            <div class="snippet-item">zu</div>
        </div>
    </div>
    
    <div class="snippet-category">
        <h3>🗃️ Tanstack Snippets</h3>
        <div class="snippet-list">
            <div class="snippet-item">tcq</div>
            <div class="snippet-item">tuq</div>
            <div class="snippet-item">tcm</div>
            <div class="snippet-item">tum</div>
        </div>
    </div>
</body>
</html>`;
}
