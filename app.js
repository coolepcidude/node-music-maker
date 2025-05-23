// Initialize the audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Define the editor
class NodeMusicEditor {
  constructor() {
    this.editor = null;
    this.engine = null;
    this.nodes = {};
    this.connections = [];
    
    // Initialize the editor after the DOM is loaded
    window.addEventListener('DOMContentLoaded', () => this.init());
  }
  
  async init() {
    // Create Rete editor
    const container = document.querySelector('#node-editor');
    this.editor = new Rete.NodeEditor('music@1.0.0', container);
    
    // Register connection plugin
    this.editor.use(ConnectionPlugin.default);
    
    // Use the vue render plugin
    this.editor.use(VueRenderPlugin.default);
    
    // Create processing engine
    this.engine = new Rete.Engine('music@1.0.0');
    
    // Initialize node types
    this.initNodeTypes();
    
    // Set up event listeners for the sidebar buttons
    this.initSidebarListeners();
    
    // Set up transport controls
    this.initTransportControls();
  }
  
  initNodeTypes() {
    // This is where we'll define our node classes
    // We'll add simple placeholders for now
    
    // Initialize the export node (always present)
    this.createExportNode();
  }
  
  initSidebarListeners() {
    const buttons = document.querySelectorAll('.node-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        this.addNode(type);
      });
    });
  }
  
  initTransportControls() {
    document.querySelector('#play').addEventListener('click', () => {
      console.log('Play button clicked');
      // We'll implement this later
    });
    
    document.querySelector('#stop').addEventListener('click', () => {
      console.log('Stop button clicked');
      // We'll implement this later
    });
    
    document.querySelector('#export-wav').addEventListener('click', () => {
      console.log('Export WAV clicked');
      // We'll implement this later
    });
    
    document.querySelector('#export-mp3').addEventListener('click', () => {
      console.log('Export MP3 clicked');
      // We'll implement this later
    });
  }
  
  createExportNode() {
    // This will be our fixed export node
    // We'll implement this later
  }
  
  addNode(type) {
    console.log(`Adding node of type: ${type}`);
    // We'll implement node creation logic here
  }
}

// Create editor instance
const musicEditor = new NodeMusicEditor();
