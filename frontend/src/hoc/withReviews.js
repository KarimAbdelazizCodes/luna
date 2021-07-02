import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useHistory } from "react-router";

export const withUserAccess = WrapperComponent => () => {

  const token = useSelector(state => state.defaultReducer.token);
  const history = useHistory();

  useEffect(() => {
    if(!token)history.push("/signin")
  }, [token])

  return <WrapperComponent />
}
