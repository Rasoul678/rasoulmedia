export type ThemeMode = "dark" | "light";

export interface ButtonColor {
  backgroundColor: string;
  textColor: string;
}

export interface GlobalState {
  themeMode: ThemeMode;
  themePallet: ThemePallet;
  selectedPallet: string;
  isMobileMenuOpen: boolean;
  tour: {
    hasTour: boolean;
    pages: {
      [key in Pages]: {
        isDone: boolean;
        name: Pages;
      };
    };
  };
}

export interface ButtonType {
  primary: ButtonColor;
  secondary: ButtonColor;
  // error: ButtonColor;
  // success: ButtonColor;
}

export interface ThemeType {
  name: ThemeMode;
  colors: string[];
  body: string;
  text: string;
  border: string;
  background: string;
  buttons: ButtonType;
  card: {
    backgroundColor: string;
    borderColor: string;
    textColor: string;
  };
}

export type ThemePallet = {
  name: ThemeMode;
  pallets: {
    [key: string]: {
      name: string;
      mainColor: string;
      colors: string[];
      text: string;
    };
  };
};

export interface ThemePallets {
  [key: string]: ThemePallet;
}

interface GithubLanguage {
  color: string;
  name: string;
  __typename: string;
}

interface GithubCountable {
  totalCount: number;
  __typename: string;
}

export interface Repository {
  id: string;
  name: string;
  stargazers: GithubCountable;
  forks: GithubCountable;
  issues: GithubCountable;
  watchers: GithubCountable;
  languages: {
    __typename: string;
    nodes: GithubLanguage[];
  };
  url: string;
  __typename: string;
}

export type Pages = "home" | "contact";

export type IconType = {
  alt?: string;
  width?: number;
  height?: number;
  title?: string;
  className?: string;
};

export type RepoType = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  permissions: {
    admin: boolean;
    maintain: boolean;
    push: boolean;
    triage: boolean;
    pull: boolean;
  };
};
