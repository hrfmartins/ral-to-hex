'use strict'

import { expect, test } from 'vitest'
import { ralToHex } from '.'

test('ral converting to hex', () => {
	expect(ralToHex(4010)).toBe('#CF3476')
	expect(ralToHex(1005)).toBe('#A98307')
	expect(ralToHex(3012)).toBe('#C1876B')
  })
  
// tape('ral-to-hex', (t) => {
// 	t.plan(3)
// 	t.ok(r(4010)==='#CF3476', 'RAL 4010')
// 	t.ok(r('1005')==='#A98307', 'RAL 1005')
// 	t.ok(r(3012)==='#C1876B', 'RAL 3012')
// })