# 概要

window.confirmのように使用できるシンプルな確認ダイアログコンポーネントです。

# デモ

[https://kamiya-kei.github.io/simple-confirm/](https://kamiya-kei.github.io/simple-confirm/)

# 使用方法

## インストール

```zsh
yarn add @kamiya-kei/simple-confirm
```

## 使用例

```js
import SimpleConfirm from '@kamiya-kei/simple-confirm';
```

```js
  const [result, setResult] = React.useState('実行前');
  const simpleConfirmRef = React.useRef();
  const handleClick = async () => {
    const res = await simpleConfirmRef.current.confirm();
    if (!res) {
      setResult('キャンセルされました');
      return;
    }
    setResult('実行完了しました');
  };
```

```html
  <button onClick={handleClick}>確認ダイアログ表示</button>
  <p>{result}</p>
  <SimpleConfirm ref={simpleConfirmRef} />
```

## サンプルコード

[https://github.com/kamiya-kei/simple-confirm/blob/main/examples/src/index.js](https://github.com/kamiya-kei/simple-confirm/blob/main/examples/src/index.js)
