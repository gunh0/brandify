import {useState} from 'react';
import {TitleSection} from '../../components/common/TitleSection.tsx';
import {Share} from '../../components/icon/Share.tsx';
import {css} from '../../../styled-system/css';

export const UploadReferenceImagePage = () => {
  const [image] = useState(
    'https://www.shinsegaegroupnewsroom.com/wp-content/uploads/2020/07/%EC%9D%B4%EB%A7%88%ED%8A%B813_%EB%B3%B8%EB%AC%B801.png',
  );
  const [filename] = useState('감자.png');
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'space-between',
        height: '100%',
        pb: '80px',
      })}
    >
      <TitleSection title={'upload reference image or photo'} subtitle={'참고했으면 하는 사진이나 이미지가 있나요?'} />
      <div className={css({width: '360px', height: '360px', m: 'auto'})}>
        {image && (
          <img className={css({objectFit: 'cover'})} src={image} alt={'uploaded image'} width={360} height={360} />
        )}
      </div>
      <button
        className={css({
          width: '1162px',
          height: '112px',
          cursor: 'pointer',
          color: filename ? 'white' : 'gray',
          fontSize: '32px',
          display: 'flex',
          alignItems: 'center',
          gap: '18.75px',
          border: '1px solid white',
          borderRadius: '37.5px',
          p: '0 37.5px',
          m: 'auto',
        })}
      >
        <Share />
        {filename ?? 'Upload any image (optional)'}
      </button>
    </div>
  );
};
