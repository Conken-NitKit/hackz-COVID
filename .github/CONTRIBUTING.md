# コーディング規約
## 参考コーディングガイド

- [リクルートライフスタイル](https://github.com/recruit-lifestyle/swift-style-guide)
- [raywenderlich](https://github.com/raywenderlich/swift-style-guide)

## Onsen固有のルール

### インデント

4 space

### ファイル先頭のコピーライト宣言

社外に公開するコードでなければ削除する

### guard vs if let

```swift
func someMethod(a: String?) {
    // 先頭でのチェックは guard-let
    guard let a = a else {
        return
    }

    // 以降のチェックは if-let
    if let modifiedString = modifyString(a) {
        print(modifiedString)
    }
}

func modifyString(string: String) -> String? {
    return nil
}
```

### キャプチャリスト

クロージャのキャプチャリストでは非同期処理には`weak`を用い、同期処理かつ`nil`が入らないことが保証される場合は`unowned`を利用する. 

```swift
asyncMethod { [weak self] newValue in
	self?.property = newValue
}

syncMethod { [unowned self] newValue in
   self.property = newValue
}
```
