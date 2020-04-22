# 每周总结可以写在这里

编程语言通识

## 语言按语法分类

- 非形式语言
  - 中文、英文
- 形式语言（乔姆斯基谱系）
  - 0 型 无限制文法
    - ?::=?
  - 1 型 上下文相关文法
    - ?<A>?::=?<B>?
  - 2 型 上下文相关文法
    - <A>::=?
  - 3 型 正则文法
    - <A>::=<A>?

 

BNF 生产法


Unicode

InputElement
  WhiteSpace：空格
  LineTerminator：换行
  Comment
  Token

双精度 IEEE 754 64位浮点
参考：https://en.wikipedia.org/wiki/Floating-point_arithmetic

Number
  DecimalLiteral：十进制
  BinaryIntegerLiteral： 二进制，整数
  OctalIntegerLiteral：八进制，整数
  HexIntegerLiteral：十六进制，整数
String
  ASCII
  Unicode
  UCS U+0000 ~ U+FFFF
  GB
  UTF：UTF-8、UTF-16
  