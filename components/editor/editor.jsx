import React, {useState} from 'react';

import Input from '../common/input';
import SearchItem from '../common/search-item';
import Button from '../common/button';

import './editor.scss';

const example = {
    isSelected: true,
    onClick: () => alert('@TODO'),
    url: 'https://cdn.dribbble.com/users/25514/screenshots/10282704/media/d5f6cf07790b3e390ced3424eca843e6.png',
    title: 'ORDINARY CAT',
    size: '200 x 200',
};

const Editor = () => {
    const [value, setValue] = useState('');

    const onDownload = () => alert('@TODO');

    return (<div className='pt-editor'>
        <div className='pt-editor__search'>
            <Input value={value} onChange={setValue} placeholder='Search'/>
            <div className='pt-editor__search-results'>
                {/* Example of Search Item */}
                <SearchItem {...example} />
            </div>
        </div>
        <div className='pt-editor__view'>
            <div className='pt-editor__canvas'>
                @TODO
            </div>
            <div className='pt-editor__buttons'>
                <span>@TODO Checkbox</span>
                <Button onClick={onDownload}>DOWNLOAD</Button>
            </div>
        </div>
    </div>)
};

export default Editor;
