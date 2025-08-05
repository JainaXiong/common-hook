/*
 * @Author: Jaina Xiong
 * @Email: 17761608@qq.com
 * @Date: 2025-08-05 19:29:25
 * @LastEditors: Jaina Xiong
 * @LastEditTime: 2025-08-05 19:29:33
 */
import { useRef, useMemo } from 'react'
import { dequal } from 'dequal'

export function useDeepCompareMemoize(dependencies: any) {
  const dependenciesRef = useRef(dependencies)
  const signalRef = useRef(0)

  if (!dequal(dependencies, dependenciesRef.current)) {
    dependenciesRef.current = dependencies
    signalRef.current += 1
  }

  return useMemo(() => dependenciesRef.current, [signalRef.current])
}
