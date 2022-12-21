import { useEffect, useRef } from "react";
import { sendEmail } from "utils/helpers";

interface IpType {
  ip: string;
  ts: string;
  loc: string;
}

const useTrackUser = () => {
  const ipRef = useRef("");
  const locationRef = useRef("");

  const getIP = async <T = IpType>(): Promise<T> => {
    const response = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
    const data = await response.text();

    const dataObj = data
      .trim()
      .split("\n")
      .reduce((acc: any, pair: string) => {
        let pairArray = pair.split("=");
        return { ...acc, [pairArray[0]]: pairArray[1] };
      }, {});

    return dataObj;
  };

  const setAndNotify = (visibility: any) => {
    const { ip, location, lastVisit } = visibility;
    localStorage.setItem("rasoulmedia-visibility", JSON.stringify(visibility));

    const visitorEmail = {
      name: "rasoulmedia.com",
      email: "h.rostami.r@gmail.com",
      subject: "Visitor",
      message: `
          ip: ${ip},
          location: ${location},
          timestamp: ${lastVisit}
      `,
    };

    sendEmail(visitorEmail);
  };

  useEffect(() => {
    const handleVisibility = async () => {
      if (document.visibilityState === "visible") {
        if (!ipRef.current) {
          let { ip, loc, ts } = await getIP();

          ipRef.current = ip;
          locationRef.current = loc;

          try {
            const userVisibility = localStorage.getItem(
              "rasoulmedia-visibility"
            );

            if (userVisibility) {
              //* User already visited the site
              //* Check last visit!
              const {
                ip: userIP,
                locaction,
                lastVisit,
              } = JSON.parse(userVisibility);

              if (!userIP || !locaction || !lastVisit) {
                ({ ip, loc, ts } = await getIP());
              }

              //* One week passed
              const isLongTimeNoSee =
                Date.now() - new Date(lastVisit).getTime() > 6.048e8;
              //* It is different location
              const isDiffLocation = locaction !== loc;

              if (isLongTimeNoSee || isDiffLocation) {
                const newVisitDate = new Date().toLocaleString();
                const visibilityData = {
                  ip,
                  location: loc,
                  lastVisit: newVisitDate,
                };

                setAndNotify(visibilityData);
              }
            } else {
              //* First visit of the site
              const lastTimeStamp = parseInt(ts.split(".").join(""));
              const lastVisit = new Date(lastTimeStamp).toLocaleString();

              const visibilityData = {
                ip,
                location: loc,
                lastVisit,
              };

              setAndNotify(visibilityData);
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
    };

    handleVisibility();
  }, []);
};

export default useTrackUser;
