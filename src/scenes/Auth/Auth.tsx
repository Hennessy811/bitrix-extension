import React, { useState, useEffect } from "react";
import { useAuth, handleAuth } from "../../shared/utils";
import { useDispatch, useSelector } from "react-redux";
import "./Auth.scss";
import { itemsFetchData } from "../../store/actions/items";
import { RootStore } from "../../store/configureStore";

type AuthState = "notoken" | "pending" | "ready";

const Auth = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const items = useSelector((store: RootStore) => store.items);
  const [currentAuthState, setCurrentAuthState]: [AuthState, any] = useState(
    "notoken"
  );

  useEffect(() => {
    if (auth) {
      setCurrentAuthState("ready");
    }
  }, [auth]);

  const handleGetToken = async () => {
    dispatch(itemsFetchData("https://jsonplaceholder.typicode.com/posts"));

    if (currentAuthState === "notoken") {
      handleAuth();
      setCurrentAuthState("pending");
    }

    // @ts-ignore
    if (currentAuthState === "pending") {
      await handleAuth();
      setCurrentAuthState("ready");
    }
  };
  return (
    <div>
      <div className="root">
        <h1>Get token</h1>
        {currentAuthState}
        <br />
        <button onClick={handleGetToken}>Press button</button>
      </div>

      {!!items.length && (
        <div>
          <h1>Items</h1>
          {items.map((i: any) => (
            <div>{i.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Auth;
