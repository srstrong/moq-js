/**
 * Lightweight logger for moq-js. Uses the browser's built-in console
 * levels which are filterable in DevTools:
 *
 *   console.debug  → hidden by default (enable "Verbose" in DevTools)
 *   console.info   → normal visibility
 *   console.warn   → yellow highlight
 *   console.error  → red highlight
 *
 * All messages are prefixed with [moq] so they can be filtered by
 * typing "[moq]" in the DevTools console filter.
 */

export const log = {
	debug: (...args: unknown[]) => console.debug("[moq]", ...args),
	info: (...args: unknown[]) => console.info("[moq]", ...args),
	warn: (...args: unknown[]) => console.warn("[moq]", ...args),
	error: (...args: unknown[]) => console.error("[moq]", ...args),
}
