const explorer = {
    id: '1',
    name: 'root',
    isFolder: true,
    items: [
        {
            id: '2',
            name: 'public',
            isFolder: true,
            items: [
                {
                    id: '3',
                    name: 'pubic_nested_1',
                    isFolder: true,
                    items: [
                        {
                            id: '4',
                            name: 'index.html',
                            isFolder: false,
                            items: []
                        },
                        {
                            id: '5',
                            name: 'hello.html',
                            isFolder: false,
                            items: []
                        },
                    ]
                },
                {
                    id:'6',
                    name:'public_nested_2',
                    isFolder:false,
                    items:[]
                }
            ]
        },
        {
            id:'7',
            name:'src',
            isFolder:true,
            items:[
                {
                    id:'8',
                    name:'App.js',
                    isFolder:false,
                    items:[]
                },
                {id:'9',
                    name:'index.js',
                    isFolder:false,
                    items:[]
                },
                {
                    id:'10',
                    name:'style.css',
                    isFolder:false,
                    items:[]
                }
            ]
        },
        {
            id:'11',
            name:'package.json',
            isFolder:false,
            items:[]
        }
    ]
};

export default explorer;
