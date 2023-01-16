import React from 'react';

import toolState from '../../store/toolState';

import "../../styles/toolbar.scss";

const SettingBar = () => {

  return (
    <div className='setting-bar'>
      <label htmlFor="line-width">Товщина лінії</label>
      <input
        onChange={(event) => toolState.setLineWidth(event.target.value)}
        style={{ margin: '0 10px' }}
        id="line-width"
        defaultValue={1}
        type="number"
        min={1}
        max={50}
      />
      <label htmlFor="border-color">Колір лінії</label>
      <input
        onChange={(event) => toolState.setStrokeColor(event.target.value)}
        style={{ margin: '0 10px' }}
        id="border-color"
        type="color"
      />
    </div>
  );
};

export default SettingBar;
