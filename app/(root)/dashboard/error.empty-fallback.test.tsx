// app/(root)/dashboard/error.empty-fallback.test.tsx

import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DashboardError from './error';

vi.mock('next/link', () => ({
  default: ({
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }) => (
    <a {...props}>{children}</a>
  ),
}));

describe('DashboardError - Edge Cases & Empty/Missing Inputs', () => {
  it('renders the generic emoji when error message is an empty string', () => {
    render(<DashboardError error={new Error('')} reset={vi.fn()} />);

    expect(screen.getByText('⚠️')).toBeInTheDocument();
  });

  it('renders the fallback description when error message is an empty string', () => {
    render(<DashboardError error={new Error('')} reset={vi.fn()} />);

    expect(
      screen.getByText('An unexpected error occurred while fetching the dashboard data.')
    ).toBeInTheDocument();
  });

  it('renders the generic heading when error message is an empty string', () => {
    render(<DashboardError error={new Error('')} reset={vi.fn()} />);

    expect(screen.getByRole('heading', { name: 'Something went wrong' })).toBeInTheDocument();
  });

  it('renders without errors when the optional digest field is absent', () => {
    const error = new Error('Unexpected failure') as Error & { digest?: string };

    expect(() => render(<DashboardError error={error} reset={vi.fn()} />)).not.toThrow();

    expect(screen.getByText('⚠️')).toBeInTheDocument();
  });

  it('renders both action controls in the default empty-message fallback state', () => {
    render(<DashboardError error={new Error('')} reset={vi.fn()} />);

    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /go back home/i })).toBeInTheDocument();
  });
});
