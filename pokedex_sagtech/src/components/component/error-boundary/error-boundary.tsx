import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import shroomish from '../../../assets/pics/shroomish.png';
import styles from './error-boundary-style.module.scss';

function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles.errorPageContainer}>
        <h2>Oh no... Something is wrong</h2>
        <img src={shroomish} alt="sad-shromish-pic" />
        <h2>
          {error.status} {error.statusText}
        </h2>
        <p>{error.data}</p>
      </div>
    );
  }
  if (error instanceof Error) {
    return (
      <div className={styles.errorPageContainer}>
        <h2>Oh no... Something is wrong</h2>
        <img src={shroomish} alt="sad-shromish-pic" />
        <h2>Error</h2>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  }
  return (
    <div className={styles.errorPageContainer}>
      <h2>Oh no... Something is wrong</h2>
      <img src={shroomish} alt="sad-shromish-pic" />
      <h2>Please restart a page!</h2>
    </div>
  );
}

export default ErrorBoundary;
