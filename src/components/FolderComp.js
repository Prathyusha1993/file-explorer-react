import React, { useState } from 'react';
import './folder.css';

const FolderComp = ({ explorerData, handleInsertNode }) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({ visible: false, isFolder: null});

    const handleExpand = () => {
        setExpand(!expand);
    };

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({ visible: true, isFolder})
    };

    const addNewFolder = (e) => {
        if(e.keyCode === 13 && e.target.value){
            handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);
            setShowInput({...showInput, visible: false});
        }
    };

    if (explorerData.isFolder) {
        return (
            <div>
                <div onClick={handleExpand} className='folder'>
                    <span >🗂️{explorerData.name}</span>
                    <div>
                        <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
                        <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
                    </div>
                </div>
                <div style={{ display: expand ? 'block' : 'none' }}>
                    {
                        showInput.visible && (
                            <div className='input-container'>
                                <span>{showInput.isFolder ? '🗂️' : '📁'}</span>
                                <input type='text' onKeyDown={addNewFolder} className='input-container-input' autoFocus onBlur={() => setShowInput({...showInput, visible: false})} />
                            </div>
                        )
                    }
                    {explorerData.items.map((exp) => {
                        return <FolderComp explorerData={exp} key={exp.id} />
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <span className='file'>📁{explorerData.name}</span>
        )
    }

}

export default FolderComp;