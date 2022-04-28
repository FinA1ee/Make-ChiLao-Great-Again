import React, { useState } from 'react';
import generateImg from '../../utils/drawRedBlue';
import './HomePage.css';

const TITLE_CONTENT = 'Make 赤佬 Great Again.'
const SLOGAN_CONTENT = '风雨同舟，和衷共济。在这一瞬间，也许不如这一句赤佬。'
const BTN_CONTENT = '生成图片';
const DEFAULT_CONTENT = '别他妈了隔壁 念你那通稿 谁不会啊 能不能开个麦啊 赤佬';

const prefix = 'mcga-home-page'

const HomePage = () => {
  const [inputContent, setInputContent] = useState(DEFAULT_CONTENT);
  const [imgUrl, setImgUrl] = useState('');

  const doDraw = (inputContent) => {
    try {
      const url = generateImg(inputContent);
      setImgUrl(url);
    } catch(e) {
      alert(e);
    }
  }

  return (
    <div className={`${prefix}`}>
      {imgUrl ?
        <div>
          <p>您的赤佬体四行诗已生成，点击发送到社交媒体</p>
          <img src={imgUrl} alt={'img'}/>
          <button onClick={() => setImgUrl('')}>{'再来一张'}</button>
        </div>
        :
        <div className={`${prefix}-container`}>
          <p className={`${prefix}-container-title`}>{TITLE_CONTENT}</p>
          <p className={`${prefix}-container-slogan`}>{SLOGAN_CONTENT}</p>
          <textarea className={`${prefix}-container-textarea`} value={inputContent} onChange={(e) => setInputContent(e.target.value)} />
          <button onClick={() => doDraw(inputContent)}>
            {BTN_CONTENT}
          </button>
        </div>
      }
    </div>
  )
};

export default HomePage;


