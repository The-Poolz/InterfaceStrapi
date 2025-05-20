// __tests__/scheduleLazy.test.ts
import { scheduleLazy } from "../utils/scheduleLazy"
import { BATCH_DELAY_MS } from "../globalState/Context"

jest.useFakeTimers()

test("scheduleLazy batches multiple fns", () => {
  const calls: string[] = []
  const make = (id: string) => () => calls.push(id)

  // schedule three calls “simultaneously”
  scheduleLazy(make("A"))
  scheduleLazy(make("B"))
  scheduleLazy(make("C"))

  // nothing should have fired immediately:
  expect(calls).toEqual([])

  // advance timers only part‐way:
  jest.advanceTimersByTime(BATCH_DELAY_MS - 1)
  expect(calls).toEqual([])

  // once we hit the delay, all 3 fns run in order:
  jest.advanceTimersByTime(1)
  expect(calls).toEqual(["A","B","C"])
})
