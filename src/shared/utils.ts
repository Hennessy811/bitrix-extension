export interface TokenObject {
  access_token: string;
  expires: number;
  expires_in: number;
  scope: string;
  domain: string;
  server_endpoint: string;
  status: string;
  client_endpoint: string;
  member_id: string;
  user_id: number;
  refresh_token: string;
}

export const useAuth = () => {
  const res = localStorage.getItem("auth");
  let auth: TokenObject;
  if (res) {
    auth = JSON.parse(res);
    return auth;
  }
  return null;
};

export const handleAuth = async () => {
  const client_id = "local.5ebab75d0689b9.69976980";
  const res: TokenObject | null = await fetch(
    `https://dc.dev.dirix.ru/oauth/authorize/?client_id=${client_id}`
  ).then((r) => {
    console.log(r.url);

    if (r.redirected && !r.url.includes("token")) {
      window.open(r.url.split("?")[0], "_blank");
      return null;
    }
    return r.json();
  });

  localStorage.setItem("auth", JSON.stringify(res));

  return !!res;
};
