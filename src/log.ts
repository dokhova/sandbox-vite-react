export function log(step: string, data?: unknown) {
  const time = new Date().toLocaleTimeString();
  if (data === undefined) {
    console.log(`[${time}] ${step}`);
  } else {
    console.log(`[${time}] ${step}`, data);
  }
}
