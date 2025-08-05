/*
 * @Author: Jaina Xiong
 * @Email: 17761608@qq.com
 * @Date: 2025-07-09 12:43:07
 * @LastEditors: Jaina Xiong
 * @LastEditTime: 2025-08-05 19:36:14
 */
import { useEffect } from 'react'
import { useDeepCompareMemoize } from '../_utils/useDeepCompareMemoize'

/**
 * @name 依赖项更新时,深度比较
 * @description
 * 依赖项更新时,对输入进行深度比较，而不是引用相等
 * @example
 * useDeepCompareEffect(
    () => {
      // make an HTTP request or whatever with the query and variables
      // optionally return a cleanup function if necessary
    },[query, variables],)
 */
export const useDeepCompareEffect = (effect: any, dependencies: any) => {
  useEffect(effect, useDeepCompareMemoize(dependencies))
}
