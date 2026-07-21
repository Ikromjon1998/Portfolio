import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode | ((error: Error) => ReactNode);
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    if (import.meta.env.DEV) {
      console.error('Uncaught error:', error, info.componentStack);
    }
  }

  render(): ReactNode {
    const { error } = this.state;
    if (error === null) {
      return this.props.children;
    }

    const { fallback } = this.props;
    if (fallback !== undefined) {
      return typeof fallback === 'function' ? fallback(error) : fallback;
    }
    return (
      <div role="alert" style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Something went wrong. Please refresh the page.</p>
      </div>
    );
  }
}
