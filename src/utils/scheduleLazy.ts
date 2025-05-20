import { BATCH_DELAY_MS } from '../globalState/Context'
// batches multiple lazy-query triggers into one delayed flush
let queue: Array<() => void> = []

/**
 * Schedule a deferred call so that all queued fns
 * run together after the next tick (or delay).
 */
export function scheduleLazy(fn: () => void) {
  queue.push(fn)
  if (queue.length === 1) {
    // flush on next tick:
    setTimeout(() => {
      queue.forEach(run => run())
      queue = []
    }, BATCH_DELAY_MS)
  }
}
