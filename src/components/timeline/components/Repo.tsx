import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RepoType } from "interfaces";
import { iconsList } from "components/Icons/icon-pack";

type IProps = {
  repo: RepoType;
};

const Repo: React.FC<IProps> = ({ repo }) => {
  const [languages, setLanguages] = React.useState({});

  React.useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;

    async function getLangs() {
      const data = await fetch(repo.languages_url, { signal });
      const langs = await data.json();

      setLanguages(langs);
    }

    getLangs();

    return () => {
      controller.abort();
    };
  }, [repo]);

  return (
    <>
      {iconsList.stacks.git({ width: 30, alt: repo.name })}
      <code className="mt-2 flex gap-2 truncate">
        <Link
          to={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="blue_gradient text-xl"
        >
          {repo.name}
        </Link>
      </code>
      <div className="flex-grow text-end hidden sm:block">
        {Object.keys(languages)
          ?.slice(0, 3)
          .map((lang, i) => (
            <code
              key={i}
              className="text-sm mx-[0.2rem] underline text-green-400 font-bold"
            >
              {lang}
            </code>
          ))}
      </div>
    </>
  );
};

export default Repo;
