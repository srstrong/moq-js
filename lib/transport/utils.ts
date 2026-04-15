import { log } from "../common/log"

export function debug(...msg: any[]) {
    log.debug(...msg)
}

export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}