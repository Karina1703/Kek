export function kek1 (foo: string) {
	return 'foo'
}

declare global {
  interface Window {
    bee: () => void;
  }
}