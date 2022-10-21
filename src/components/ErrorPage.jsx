import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

  const error = useRouteError();

  return(
    <div id="error_page">
      <h1>Se fudeu mané, deu erro!!!</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage;