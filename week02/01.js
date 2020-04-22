// Q：写一个正则表达式 匹配所有 Number 直接量

/**
 * Number 类型
 *
 * DecimalLiteral：十进制
 * BinaryIntegerLiteral： 二进制，整数
 * OctalIntegerLiteral：八进制，整数
 * HexIntegerLiteral：十六进制，整数
 */

const reg = /^\d|[01]{64}|[0-7]+|[0-9a-f]+$/;

// test
