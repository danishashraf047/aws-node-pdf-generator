export type XmlElement = {
  type: string;
  box?: {};
  style?: { [p: string]: string };
  props?: { [p: string]: string };
  value?: string;
  children?: XmlElement[];
};

export type LayoutElement = {
  type: string;
  box?: { [p: string]: number };
  style?: { [p: string]: string };
  props?: { [p: string]: string };
  image?: { data: Buffer };
  children?: LayoutElement[];
};

export type Styles = { [p: string]: { [p: string]: string } };

export type Configuration = {
  image: string;
  gender: 'female' | 'male';
};

export type CoverPage = {
  background?: string;
  logo?: string;
  title: string;
  subtitle: string;
  date: string;
  configurations: Configuration[];
};

export type Article = {
  name: string;
  color: string;
  fabric: string;
  weight: string;
  articleNo: string;
};

export type ConfigurationPage = {
  texts: {[p: string]: string};
  snapshot: string;
  title: string;
  articles: Article[];
  note?: string;
};

export type Document = {
  coverPage?: CoverPage;
  configurations: ConfigurationPage[];
};
