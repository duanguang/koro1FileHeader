/*
 * @Github: https://github.com/OBKoro1
 * @Author: OBKoro1
 * @Created_time: 2019-08-31 15:01:52
 * @LastEditors: Koro
 * @LastEditTime: 2019-09-02 21:06:26
 * @Description: 当没有commit文件时，默认创建的pre-commit 文件
 */

const CONST = require('../CONST')
let orderString = CONST.handleNodeString

const preCommitString = `#!/bin/sh
###
 # @Author: OBKoro1
 # @Github: https://github.com/OBKoro1
 # @Date: 2019-05-08 14:28:42
 # @LastEditors: OBKoro1
 # @LastEditTime: 2019-08-31 15:39:03
 # koroFileHeader的commit hooks，判断文件只改变时间，就不进行操作。
 # 此文件不更新，更新的是：./.git/hooks/fileHeader-checkChange.js
 # 插件：koroFileHeader: https://github.com/OBKoro1/koro1FileHeader
###
echo "执行node写的commit hooks --- koroFileHeader"
${orderString}`


module.exports = preCommitString