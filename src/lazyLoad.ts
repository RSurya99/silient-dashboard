import { lazy } from 'react'

export function lazyLoad(path: string, namedExport?: string) {
  return lazy(() => {
    console.log('path', path)
    const promise = wait(1000).then(() => import(`../src/${path}.tsx`))
    if (namedExport == null) {
      return promise
    }
    return promise.then((module) => ({ default: module[namedExport] }))
  })
}

function wait(time: number) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((resolve) => setTimeout(resolve, time))
}
