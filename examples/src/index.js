import React, { useRef, useState } from 'react';
import { render } from 'react-dom';
import {
  Button
} from '@material-ui/core';

import SimpleConfirm from '../../src';

const Sample1 = () => {
  const [result, setResult] = useState('実行前');

  const simpleConfirmRef = useRef();
  const handleClick = async () => {
    const res = await simpleConfirmRef.current.confirm();
    if (!res) {
      setResult('キャンセルされました');
      return;
    }
    setResult('実行完了しました');
  };

  return (
    <>
      <h2>サンプル1</h2>
      <div>
        <Button onClick={handleClick} variant="contained" color="primary">
          確認ダイアログ表示
        </Button>
        <p>{result}</p>
        <SimpleConfirm ref={simpleConfirmRef} />
      </div>
    </>
  );
};

const Sample2 = () => {
  const [result, setResult] = useState('実行前');

  const simpleConfirmRef = useRef();
  const handleClick = async () => {
    const res = await simpleConfirmRef.current.confirm();
    if (!res) {
      setResult('削除を中止しました');
      return;
    }
    setResult('削除しました');
  };

  return (
    <>
      <h2>サンプル2(オプション指定)</h2>
      <div>
        <Button onClick={handleClick} variant="contained" color="secondary">
          確認ダイアログ表示
        </Button>
        <p>{result}</p>
        <SimpleConfirm ref={simpleConfirmRef}
          title="警告"
          message="本当に削除してよろしいですか？"
          agree_text="削除する"
          agree_color="secondary"
          disagree_text="中止する"
          disagree_color="primary"
        />
      </div>
    </>
  );
};

const App = () => (
  <>
    <h1>SimpleConfirm DEMO</h1>
    <Sample1 />
    <Sample2 />
  </>
);

render(<App />, document.getElementById('root'));
