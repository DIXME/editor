import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const icons: Record<string, string> = {
    'ts': '',
    'html': '',
    'css': '',
    'js': '',
    'c': '',
    'json': '',
    'file': '',
    'folder': ''
}

class file {
    name: string
    extention: string
    icon: string

    /**
     * @arg name name with out the extention, name or icon so just the name of the file
     * @arg extention file extention ex js, css, html, or ts
     * @arg icon a symbol such as 🐄 or 󰖟
    */

    public constructor(name: string){
        /**
         * @arg name this will be a string that will be in the format as follows filename.fileextention
         */
        var arr: Array<string> = name.split('.');
        this.name = arr[0];
        this.extention = arr[1];
        this.icon = icons[this.extention];
    }

    toString(){
        return `󰘍 ${this.icon} ${this.name}.${this.extention}`
    }
}

class dir {
    // this just holds the files
    files: Array<file>
    name: string
    icon: string
    
    public constructor(name: string){
        this.name = name;
        if(icons[this.name]){
            this.icon = icons[this.name]
        } else {
            this.icon = icons['file']
        }
    }
}