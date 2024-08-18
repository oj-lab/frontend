export function formatNanoSeconds(nano: number): string {
  if (nano < 1000) {
    return `${nano} ns`;
  }
  if (nano < 1000000) {
    return `${(nano / 1000).toFixed(2)} us`;
  }
  if (nano < 1000000000) {
    return `${(nano / 1000000).toFixed(2)} ms`;
  }
  return `${(nano / 1000000000).toFixed(2)} s`;
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} bytes`;
  }
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(2)} KB`;
  }
  if (bytes < 1024 * 1024 * 1024) {
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

export function formatPercent(percent: number): string {
  return `${(percent * 100).toFixed(2)}%`;
}
