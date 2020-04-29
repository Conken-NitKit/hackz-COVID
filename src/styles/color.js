const COLOR = {
    MAIN: {
        LIGHTMODE: "#F5BF1E",
        DARKMODE: "#2064A0"
    },
    ACCENT: {
        LIGHTMODE: "#F2A50F",
        DARKMODE: "#46A4DC"
    },
    TEXT: {
        LIGHTMODE: "#000000",
        DARKMODE: "#FFFFFF"
    },
    SUBTEXT: {
        LIGHTMODE: "#656565",
        DARKMODE: "#DDDDDD"
    },
    BUTTON: {
        LIGHTMODE: "#F5BF1E",
        DARKMODE: "#464775"
    },
    BACKGROUND: {
        LIGHTMODE: "#FFFEEA",
        DARKMODE: "#202020"
    },
    BORDER: {
        LIGHTMODE: "#E5E5E5",
        DARKMODE: "#888888"
    },
    VIEWER: {
        TEXT: {
            LIGHTMODE: "#656565",
            DARKMODE: "#FFFFFF"
        },
        ACCENT: {
            LIGHTMODE: "#F2A50F",
            DARKMODE: "#1EA7FD"
        },
        BACKGROUND:  {
            LIGHTMODE: "#FFFFFF",
            DARKMODE: "#272D35"
        },
        BLOCLQUOTE: {
            TEXT: {
                LIGHTMODE: "#656565",
                DARKMODE: "#ACAEB0"
            },
            BORDER: {
                LIGHTMODE: "#DDDDDD",
                DARKMODE: "#4E4E4E"
            }
        },
        CODE: {
            BACKGROUND: {
                LIGHTMODE: "#EEEEEE",
                DARKMODE: "#4F555D"
            },
            BORDER: {
                LIGHTMODE: "#CCCCCC",
                DARKMODE: "#000000"
            },
            TEXT: {
                LIGHTMODE: "#656565",
                DARKMODE: "#FFFFFF"
            }
        },
        PRE: {
            BACKGROUND: {
                LIGHTMODE: "#EEEEEE",
                DARKMODE: "#4F555D"
            },
            BORDER: {
                LIGHTMODE: "#CCCCCC",
                DARKMODE: "#000000"
            },
            TEXT: {
                LIGHTMODE: "#656565",
                DARKMODE: "#FFFFFF"
            }
        },
        TABLE: {
            INNER: {
                LIGHTMODE: "#CCCCCC",
                DARKMODE: "#4E4E4E",
            },
            OUTLINE: {
                LIGHTMODE: "#DDDDDD",
                DARKMODE: "#444444",
            },
            ODD: {
                LIGHTMODE: "#F8F8F8",
                DARKMODE: "#333333",
            }
        }
    }
}

/*
# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6

1. 番号付きリスト1
    1. 番号付きリスト1_1
    1. 番号付きリスト1_2
1. 番号付きリスト2
1. 番号付きリスト3

- リスト1
    - ネスト リスト1_1
        - ネスト リスト1_1_1
        - ネスト リスト1_1_2
    - ネスト リスト1_2
- リスト2
- リスト3

> お世話になります。xxxです。
> 
> ご連絡いただいた、バグの件ですが、仕様です。
>> お世話になります。 yyyです。
>> 
>> あの新機能バグってるっすね

インストールコマンドは `gem install hoge` です

normal **bold** normal
normal __bold__ normal

normal *italic* normal
normal _italic_ normal

|header1|header2|header3|
|:--|--:|:--:|
|align left|align right|align center|
|a|b|c|

[Google先生](https://www.google.co.jp/)

```
int main
int main
int main
```
*/

export default COLOR