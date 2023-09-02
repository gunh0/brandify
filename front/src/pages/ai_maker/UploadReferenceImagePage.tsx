import {ChangeEvent, useEffect, useMemo, useRef} from 'react';
import {useAtom} from 'jotai';
import {TitleSection} from '../../components/common/TitleSection.tsx';
import {Share} from '../../components/icon/Share.tsx';
import {css} from '../../../styled-system/css';
import {useReferenceMutation} from '../../hooks/states/useReferenceMutation.ts';
import {referenceImageAtom} from '../../hooks/states/useSelectedStore.ts';
import {convertToDataUrl} from '../../utils/file_util.ts';

export const UploadReferenceImagePage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useAtom(referenceImageAtom);
  const {mutate} = useReferenceMutation();

  const thumbnailUrl = useMemo(() => (file ? convertToDataUrl(file) : undefined), [file]);

  const onClickUpload = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFile(file);
  };

  useEffect(() => {
    return () => {
      file && mutate([file]);
    };
  }, [file, mutate]);

  return (
    <div className={containerStyle}>
      <TitleSection title={'upload reference image or photo'} subtitle={'참고했으면 하는 사진이나 이미지가 있나요?'} />
      <div className={imageContainerStyle}>
        {thumbnailUrl && (
          <img
            className={css({objectFit: 'cover'})}
            src={thumbnailUrl}
            alt={'uploaded image'}
            width={360}
            height={360}
          />
        )}
      </div>
      <input type={'file'} onChange={onChangeFiles} ref={inputRef} hidden />
      <button className={css(uploadButtonStyle, {color: file ? 'white' : 'gray'})} onClick={onClickUpload}>
        <Share />
        {file?.name ?? 'Upload any image (optional)'}
      </button>
    </div>
  );
};

const containerStyle = css({
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'space-between',
  height: '100%',
  pb: '80px',
});

const imageContainerStyle = css({
  width: '360px',
  height: '360px',
  m: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const uploadButtonStyle = {
  userSelect: 'none',
  width: '1162px',
  height: '112px',
  cursor: 'pointer',
  fontSize: '32px',
  display: 'flex',
  alignItems: 'center',
  gap: '18.75px',
  border: '1px solid white',
  borderRadius: '37.5px',
  p: '0 37.5px',
  m: 'auto',
};
