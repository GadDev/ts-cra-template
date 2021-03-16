import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Hello world" title', () => {
	render(<App />);
	const titleEl = screen.getByText(/hello world/i);
	expect(titleEl).toBeInTheDocument();
});
