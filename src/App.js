import { useState } from 'react';
import './App.css';
import explorer from './data/folderData';
import FolderComp from './components/FolderComp';
import useTraverseTree from './components/useTraverseTree';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log('in app', explorerData);

  const {insertNode} = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId,item, isFolder);
    setExplorerData(finalTree);
  }
  return (
    <div className="App">
      <h1>File Explorer</h1>
      <FolderComp handleInsertNode ={handleInsertNode} explorerData={explorerData} />
    </div>
  );
}

export default App;
