import ProfilePic from "assets/profile-pic-2.jpg";
import reactStringReplace from "react-string-replace";
import CustomTypewriter from "components/CustomTypewriter";
import { useTranslation } from "react-i18next";
import { iconsList } from "components/Icons/icon-pack";

const HomeHero: React.FC = () => {
  const { t } = useTranslation();
  // const intl = useContext(IntlContext);

  // const welcome = intl?.dict.hero["intro-welcome"];
  // const me = intl?.dict.me!;

  return (
    <div className="h-screen flex flex-col justify-between gap-12 items-center px-16">
      <div className="flex flex-col justify-center items-center gap-[2.5rem] sm:gap-4 mt-3">
        <div tabIndex={0} className="mt-6 sm:mt-0">
          <img
            src={ProfilePic}
            alt="My-profile-pic"
            aria-label="my profile picture"
            width={170}
            height={170}
            className="rounded-full"
          />
        </div>
        <div className="flex gap-2">
          {iconsList.socials.github()}
          {iconsList.socials.linkedin()}
          {iconsList.socials.twitter()}
        </div>
      </div>
      <div className="flex justify-evenly flex-col mb-16 flex-grow items-center">
        <div className="flex flex-col gap-4">
          <div className="text-2xl md:text-5xl text-center" tabIndex={0}>
            {reactStringReplace(t("welcome-intro"), t("me"), (match, i) => (
              <span
                key={i}
                className="text-xl md:text-5xl font-bold red_gradient block sm:inline"
              >
                {match}
              </span>
            ))}
          </div>
          <h2 className="mt-3 text-md md:text-lg text-center">
            <span
              className="text-red-500"
              tabIndex={0}
              aria-label="Web Developer"
            >
              Web Developer
            </span>{" "}
            |{" "}
            <span
              className="text-yellow-400"
              tabIndex={0}
              aria-label="Javascript"
            >
              Javascript
            </span>{" "}
            |{" "}
            <span className="text-sky-500" tabIndex={0} aria-label="Javascript">
              Typescript
            </span>{" "}
            |{" "}
            <span className="text-blue-600" tabIndex={0} aria-label="ReactJS">
              ReactJS
            </span>{" "}
            |{" "}
            <span className="text-gray-300" tabIndex={0} aria-label="HTML">
              Next.js
            </span>
          </h2>
        </div>
        <div>
          <CustomTypewriter
            strings={[
              t("typewriter.1"),
              t("typewriter.2"),
              t("typewriter.3"),
              t("typewriter.4"),
            ]}
            wrapperClassName="text-md md:text-2xl bg-gray-900/50 p-2 rounded-md"
            cursorClassName="text-yellow-400 text-2xl"
            cursor=" "
          />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
