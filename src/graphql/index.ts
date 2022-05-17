export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  blksize?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars["String"]>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type CarsJson */
  childrenCarsJson?: Maybe<Array<Maybe<CarsJson>>>;
  /** Returns the first child node of type CarsJson or null if there are no children of given type on this node */
  childCarsJson?: Maybe<CarsJson>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

/** Node Interface */
export type Node = {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType?: Maybe<Scalars["Boolean"]>;
  mediaType?: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type Directory = Node & {
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  blksize?: Maybe<Scalars["Int"]>;
  blocks?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars["Date"]>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars["Int"]>;
  host?: Maybe<Scalars["String"]>;
  flags?: Maybe<SiteFlags>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type SiteFlags = {
  PRESERVE_WEBPACK_CACHE?: Maybe<Scalars["Boolean"]>;
  FAST_REFRESH?: Maybe<Scalars["Boolean"]>;
  QUERY_ON_DEMAND?: Maybe<Scalars["Boolean"]>;
  GRAPHQL_TYPEGEN?: Maybe<Scalars["Boolean"]>;
  FAST_DEV?: Maybe<Scalars["Boolean"]>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  siteUrl?: Maybe<Scalars["String"]>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars["String"];
  pluginName: Scalars["String"];
  originalAbsoluteFilePath: Scalars["String"];
  originalRelativeFilePath: Scalars["String"];
  relativeCompiledFilePath: Scalars["String"];
  absoluteCompiledFilePath: Scalars["String"];
  matchPath?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars["String"];
  component: Scalars["String"];
  internalComponentName: Scalars["String"];
  componentChunkName: Scalars["String"];
  matchPath?: Maybe<Scalars["String"]>;
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  context?: Maybe<SitePageContext>;
};

export type SitePageContext = {
  id?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  _xparams?: Maybe<SitePageContext_Xparams>;
  make?: Maybe<Scalars["String"]>;
};

export type SitePageContext_Xparams = {
  slug?: Maybe<Scalars["String"]>;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  packageJson?: Maybe<SitePluginPackageJson>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePluginPluginOptions = {
  base64Width?: Maybe<Scalars["Int"]>;
  stripMetadata?: Maybe<Scalars["Boolean"]>;
  defaultQuality?: Maybe<Scalars["Int"]>;
  failOnError?: Maybe<Scalars["Boolean"]>;
  fileName?: Maybe<Scalars["String"]>;
  icon?: Maybe<Scalars["String"]>;
  legacy?: Maybe<Scalars["Boolean"]>;
  theme_color_in_head?: Maybe<Scalars["Boolean"]>;
  cache_busting_mode?: Maybe<Scalars["String"]>;
  crossOrigin?: Maybe<Scalars["String"]>;
  include_favicon?: Maybe<Scalars["Boolean"]>;
  cacheDigest?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  specialChars?: Maybe<Scalars["String"]>;
  pathCheck?: Maybe<Scalars["Boolean"]>;
  allExtensions?: Maybe<Scalars["Boolean"]>;
  isTSX?: Maybe<Scalars["Boolean"]>;
  jsxPragma?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  main?: Maybe<Scalars["String"]>;
  author?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars["Date"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars["String"]>;
  fromNow?: InputMaybe<Scalars["Boolean"]>;
  difference?: InputMaybe<Scalars["String"]>;
  locale?: InputMaybe<Scalars["String"]>;
};

export type GatsbyImageFormat =
  | "NO_CHANGE"
  | "AUTO"
  | "JPG"
  | "PNG"
  | "WEBP"
  | "AVIF";

export type GatsbyImageLayout = "FIXED" | "FULL_WIDTH" | "CONSTRAINED";

export type GatsbyImagePlaceholder =
  | "DOMINANT_COLOR"
  | "TRACED_SVG"
  | "BLURRED"
  | "NONE";

export type ImageFormat =
  | "NO_CHANGE"
  | "AUTO"
  | "JPG"
  | "PNG"
  | "WEBP"
  | "AVIF";

export type ImageFit = "COVER" | "CONTAIN" | "FILL" | "INSIDE" | "OUTSIDE";

export type ImageLayout = "FIXED" | "FULL_WIDTH" | "CONSTRAINED";

export type ImageCropFocus =
  | "CENTER"
  | "NORTH"
  | "NORTHEAST"
  | "EAST"
  | "SOUTHEAST"
  | "SOUTH"
  | "SOUTHWEST"
  | "WEST"
  | "NORTHWEST"
  | "ENTROPY"
  | "ATTENTION";

export type DuotoneGradient = {
  highlight: Scalars["String"];
  shadow: Scalars["String"];
  opacity?: InputMaybe<Scalars["Int"]>;
};

export type PotraceTurnPolicy =
  | "TURNPOLICY_BLACK"
  | "TURNPOLICY_WHITE"
  | "TURNPOLICY_LEFT"
  | "TURNPOLICY_RIGHT"
  | "TURNPOLICY_MINORITY"
  | "TURNPOLICY_MAJORITY";

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars["Float"]>;
  alphaMax?: InputMaybe<Scalars["Float"]>;
  optCurve?: InputMaybe<Scalars["Boolean"]>;
  optTolerance?: InputMaybe<Scalars["Float"]>;
  threshold?: InputMaybe<Scalars["Int"]>;
  blackOnWhite?: InputMaybe<Scalars["Boolean"]>;
  color?: InputMaybe<Scalars["String"]>;
  background?: InputMaybe<Scalars["String"]>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars["JSON"];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars["Int"]>;
  height?: InputMaybe<Scalars["Int"]>;
  base64Width?: InputMaybe<Scalars["Int"]>;
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars["Int"]>;
  jpegQuality?: InputMaybe<Scalars["Int"]>;
  pngQuality?: InputMaybe<Scalars["Int"]>;
  webpQuality?: InputMaybe<Scalars["Int"]>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars["String"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  trim?: InputMaybe<Scalars["Float"]>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars["Int"]>;
  maxHeight?: InputMaybe<Scalars["Int"]>;
  base64Width?: InputMaybe<Scalars["Int"]>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars["Int"]>;
  jpegQuality?: InputMaybe<Scalars["Int"]>;
  pngQuality?: InputMaybe<Scalars["Int"]>;
  webpQuality?: InputMaybe<Scalars["Int"]>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars["String"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  trim?: InputMaybe<Scalars["Float"]>;
  sizes?: InputMaybe<Scalars["String"]>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars["Int"]>;
  height?: InputMaybe<Scalars["Int"]>;
  aspectRatio?: InputMaybe<Scalars["Float"]>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sizes?: InputMaybe<Scalars["String"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars["String"]>;
};

export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars["Int"]>;
  height?: InputMaybe<Scalars["Int"]>;
  quality?: InputMaybe<Scalars["Int"]>;
  jpegQuality?: InputMaybe<Scalars["Int"]>;
  pngQuality?: InputMaybe<Scalars["Int"]>;
  webpQuality?: InputMaybe<Scalars["Int"]>;
  jpegProgressive?: InputMaybe<Scalars["Boolean"]>;
  pngCompressionLevel?: InputMaybe<Scalars["Int"]>;
  pngCompressionSpeed?: InputMaybe<Scalars["Int"]>;
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars["Boolean"]>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars["String"]>;
  rotate?: InputMaybe<Scalars["Int"]>;
  trim?: InputMaybe<Scalars["Float"]>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  width: Scalars["Float"];
  height: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  aspectRatio: Scalars["Float"];
  src: Scalars["String"];
  srcSet: Scalars["String"];
  srcWebp?: Maybe<Scalars["String"]>;
  srcSetWebp?: Maybe<Scalars["String"]>;
  sizes: Scalars["String"];
  originalImg?: Maybe<Scalars["String"]>;
  originalName?: Maybe<Scalars["String"]>;
  presentationWidth: Scalars["Int"];
  presentationHeight: Scalars["Int"];
};

export type ImagePlaceholder =
  | "DOMINANT_COLOR"
  | "TRACED_SVG"
  | "BLURRED"
  | "NONE";

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars["Int"]>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars["Int"]>;
  progressive?: InputMaybe<Scalars["Boolean"]>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars["Int"]>;
  compressionSpeed?: InputMaybe<Scalars["Int"]>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars["Int"]>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars["Int"]>;
  lossless?: InputMaybe<Scalars["Boolean"]>;
  speed?: InputMaybe<Scalars["Int"]>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars["Boolean"]>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars["Int"]>;
  trim?: InputMaybe<Scalars["Float"]>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars["Float"]>;
  height?: Maybe<Scalars["Float"]>;
  src?: Maybe<Scalars["String"]>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars["String"]>;
  tracedSVG?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  aspectRatio?: Maybe<Scalars["Float"]>;
  originalName?: Maybe<Scalars["String"]>;
};

export type CarsJson = Node & {
  make?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  category?: Maybe<Array<Maybe<CarsJsonCategory>>>;
  price?: Maybe<Scalars["Int"]>;
  info?: Maybe<CarsJsonInfo>;
  thumbnails?: Maybe<Array<Maybe<CarsJsonThumbnails>>>;
  isSpecialOffer?: Maybe<Scalars["Boolean"]>;
  yt?: Maybe<Scalars["String"]>;
  gatsbyPath?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  imageFile?: Maybe<File>;
};

export type CarsJsonGatsbyPathArgs = {
  filePath?: InputMaybe<Scalars["String"]>;
};

export type CarsJsonInfo = {
  Security_Deposit_?: Maybe<Scalars["String"]>;
  Includes_?: Maybe<Scalars["String"]>;
  Transmission_?: Maybe<Scalars["String"]>;
  Seats_?: Maybe<Scalars["String"]>;
  Engine_?: Maybe<Scalars["String"]>;
  _0_60mph_in_?: Maybe<Scalars["String"]>;
  MSRP_?: Maybe<Scalars["String"]>;
  Horse_Power_?: Maybe<Scalars["String"]>;
};

export type CarsJsonThumbnails = {
  name?: Maybe<Scalars["String"]>;
  imageFile?: Maybe<File>;
};

export type HomePage = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  b1?: Maybe<Scalars["String"]>;
  b2?: Maybe<Scalars["String"]>;
};

export type CarsJsonCategory = Node & {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars["String"]>;
  carSlugs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  slug?: Maybe<Scalars["String"]>;
  cars?: Maybe<Array<Maybe<CarsJson>>>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  carsJson?: Maybe<CarsJson>;
  allCarsJson: CarsJsonConnection;
  homePage?: Maybe<HomePage>;
  allHomePage: HomePageConnection;
  carsJsonCategory?: Maybe<CarsJsonCategory>;
  allCarsJsonCategory: CarsJsonCategoryConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childrenCarsJson?: InputMaybe<CarsJsonFilterListInput>;
  childCarsJson?: InputMaybe<CarsJsonFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  flags?: InputMaybe<SiteFlagsFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
};

export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: InputMaybe<BooleanQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  pluginCreatorId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  context?: InputMaybe<SitePageContextFilterInput>;
};

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
};

export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: InputMaybe<SitePluginPackageJsonFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
};

export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
};

export type QueryCarsJsonArgs = {
  make?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  category?: InputMaybe<CarsJsonCategoryFilterListInput>;
  price?: InputMaybe<IntQueryOperatorInput>;
  info?: InputMaybe<CarsJsonInfoFilterInput>;
  thumbnails?: InputMaybe<CarsJsonThumbnailsFilterListInput>;
  isSpecialOffer?: InputMaybe<BooleanQueryOperatorInput>;
  yt?: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllCarsJsonArgs = {
  filter?: InputMaybe<CarsJsonFilterInput>;
  sort?: InputMaybe<CarsJsonSortInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
};

export type QueryHomePageArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  b1?: InputMaybe<StringQueryOperatorInput>;
  b2?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryAllHomePageArgs = {
  filter?: InputMaybe<HomePageFilterInput>;
  sort?: InputMaybe<HomePageSortInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
};

export type QueryCarsJsonCategoryArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  carSlugs?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
};

export type QueryAllCarsJsonCategoryArgs = {
  filter?: InputMaybe<CarsJsonCategoryFilterInput>;
  sort?: InputMaybe<CarsJsonCategorySortInput>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars["String"]>;
  ne?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  regex?: InputMaybe<Scalars["String"]>;
  glob?: InputMaybe<Scalars["String"]>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Int"]>;
  ne?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Date"]>;
  ne?: InputMaybe<Scalars["Date"]>;
  gt?: InputMaybe<Scalars["Date"]>;
  gte?: InputMaybe<Scalars["Date"]>;
  lt?: InputMaybe<Scalars["Date"]>;
  lte?: InputMaybe<Scalars["Date"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Date"]>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Float"]>;
  ne?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars["JSON"]>;
  ne?: InputMaybe<Scalars["JSON"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["JSON"]>>>;
  regex?: InputMaybe<Scalars["JSON"]>;
  glob?: InputMaybe<Scalars["JSON"]>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars["Boolean"]>;
  ne?: InputMaybe<Scalars["Boolean"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]>>>;
};

export type CarsJsonFilterListInput = {
  elemMatch?: InputMaybe<CarsJsonFilterInput>;
};

export type CarsJsonFilterInput = {
  make?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  category?: InputMaybe<CarsJsonCategoryFilterListInput>;
  price?: InputMaybe<IntQueryOperatorInput>;
  info?: InputMaybe<CarsJsonInfoFilterInput>;
  thumbnails?: InputMaybe<CarsJsonThumbnailsFilterListInput>;
  isSpecialOffer?: InputMaybe<BooleanQueryOperatorInput>;
  yt?: InputMaybe<StringQueryOperatorInput>;
  gatsbyPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type CarsJsonCategoryFilterListInput = {
  elemMatch?: InputMaybe<CarsJsonCategoryFilterInput>;
};

export type CarsJsonCategoryFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  carSlugs?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
};

export type CarsJsonInfoFilterInput = {
  Security_Deposit_?: InputMaybe<StringQueryOperatorInput>;
  Includes_?: InputMaybe<StringQueryOperatorInput>;
  Transmission_?: InputMaybe<StringQueryOperatorInput>;
  Seats_?: InputMaybe<StringQueryOperatorInput>;
  Engine_?: InputMaybe<StringQueryOperatorInput>;
  _0_60mph_in_?: InputMaybe<StringQueryOperatorInput>;
  MSRP_?: InputMaybe<StringQueryOperatorInput>;
  Horse_Power_?: InputMaybe<StringQueryOperatorInput>;
};

export type CarsJsonThumbnailsFilterListInput = {
  elemMatch?: InputMaybe<CarsJsonThumbnailsFilterInput>;
};

export type CarsJsonThumbnailsFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type FileConnection = {
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars["Int"];
  hasPreviousPage: Scalars["Boolean"];
  hasNextPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage?: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
};

export type FileFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "blksize"
  | "blocks"
  | "publicURL"
  | "childrenImageSharp"
  | "childrenImageSharp___fixed___base64"
  | "childrenImageSharp___fixed___tracedSVG"
  | "childrenImageSharp___fixed___aspectRatio"
  | "childrenImageSharp___fixed___width"
  | "childrenImageSharp___fixed___height"
  | "childrenImageSharp___fixed___src"
  | "childrenImageSharp___fixed___srcSet"
  | "childrenImageSharp___fixed___srcWebp"
  | "childrenImageSharp___fixed___srcSetWebp"
  | "childrenImageSharp___fixed___originalName"
  | "childrenImageSharp___fluid___base64"
  | "childrenImageSharp___fluid___tracedSVG"
  | "childrenImageSharp___fluid___aspectRatio"
  | "childrenImageSharp___fluid___src"
  | "childrenImageSharp___fluid___srcSet"
  | "childrenImageSharp___fluid___srcWebp"
  | "childrenImageSharp___fluid___srcSetWebp"
  | "childrenImageSharp___fluid___sizes"
  | "childrenImageSharp___fluid___originalImg"
  | "childrenImageSharp___fluid___originalName"
  | "childrenImageSharp___fluid___presentationWidth"
  | "childrenImageSharp___fluid___presentationHeight"
  | "childrenImageSharp___gatsbyImageData"
  | "childrenImageSharp___original___width"
  | "childrenImageSharp___original___height"
  | "childrenImageSharp___original___src"
  | "childrenImageSharp___resize___src"
  | "childrenImageSharp___resize___tracedSVG"
  | "childrenImageSharp___resize___width"
  | "childrenImageSharp___resize___height"
  | "childrenImageSharp___resize___aspectRatio"
  | "childrenImageSharp___resize___originalName"
  | "childrenImageSharp___id"
  | "childrenImageSharp___parent___id"
  | "childrenImageSharp___parent___parent___id"
  | "childrenImageSharp___parent___parent___children"
  | "childrenImageSharp___parent___children"
  | "childrenImageSharp___parent___children___id"
  | "childrenImageSharp___parent___children___children"
  | "childrenImageSharp___parent___internal___content"
  | "childrenImageSharp___parent___internal___contentDigest"
  | "childrenImageSharp___parent___internal___description"
  | "childrenImageSharp___parent___internal___fieldOwners"
  | "childrenImageSharp___parent___internal___ignoreType"
  | "childrenImageSharp___parent___internal___mediaType"
  | "childrenImageSharp___parent___internal___owner"
  | "childrenImageSharp___parent___internal___type"
  | "childrenImageSharp___children"
  | "childrenImageSharp___children___id"
  | "childrenImageSharp___children___parent___id"
  | "childrenImageSharp___children___parent___children"
  | "childrenImageSharp___children___children"
  | "childrenImageSharp___children___children___id"
  | "childrenImageSharp___children___children___children"
  | "childrenImageSharp___children___internal___content"
  | "childrenImageSharp___children___internal___contentDigest"
  | "childrenImageSharp___children___internal___description"
  | "childrenImageSharp___children___internal___fieldOwners"
  | "childrenImageSharp___children___internal___ignoreType"
  | "childrenImageSharp___children___internal___mediaType"
  | "childrenImageSharp___children___internal___owner"
  | "childrenImageSharp___children___internal___type"
  | "childrenImageSharp___internal___content"
  | "childrenImageSharp___internal___contentDigest"
  | "childrenImageSharp___internal___description"
  | "childrenImageSharp___internal___fieldOwners"
  | "childrenImageSharp___internal___ignoreType"
  | "childrenImageSharp___internal___mediaType"
  | "childrenImageSharp___internal___owner"
  | "childrenImageSharp___internal___type"
  | "childImageSharp___fixed___base64"
  | "childImageSharp___fixed___tracedSVG"
  | "childImageSharp___fixed___aspectRatio"
  | "childImageSharp___fixed___width"
  | "childImageSharp___fixed___height"
  | "childImageSharp___fixed___src"
  | "childImageSharp___fixed___srcSet"
  | "childImageSharp___fixed___srcWebp"
  | "childImageSharp___fixed___srcSetWebp"
  | "childImageSharp___fixed___originalName"
  | "childImageSharp___fluid___base64"
  | "childImageSharp___fluid___tracedSVG"
  | "childImageSharp___fluid___aspectRatio"
  | "childImageSharp___fluid___src"
  | "childImageSharp___fluid___srcSet"
  | "childImageSharp___fluid___srcWebp"
  | "childImageSharp___fluid___srcSetWebp"
  | "childImageSharp___fluid___sizes"
  | "childImageSharp___fluid___originalImg"
  | "childImageSharp___fluid___originalName"
  | "childImageSharp___fluid___presentationWidth"
  | "childImageSharp___fluid___presentationHeight"
  | "childImageSharp___gatsbyImageData"
  | "childImageSharp___original___width"
  | "childImageSharp___original___height"
  | "childImageSharp___original___src"
  | "childImageSharp___resize___src"
  | "childImageSharp___resize___tracedSVG"
  | "childImageSharp___resize___width"
  | "childImageSharp___resize___height"
  | "childImageSharp___resize___aspectRatio"
  | "childImageSharp___resize___originalName"
  | "childImageSharp___id"
  | "childImageSharp___parent___id"
  | "childImageSharp___parent___parent___id"
  | "childImageSharp___parent___parent___children"
  | "childImageSharp___parent___children"
  | "childImageSharp___parent___children___id"
  | "childImageSharp___parent___children___children"
  | "childImageSharp___parent___internal___content"
  | "childImageSharp___parent___internal___contentDigest"
  | "childImageSharp___parent___internal___description"
  | "childImageSharp___parent___internal___fieldOwners"
  | "childImageSharp___parent___internal___ignoreType"
  | "childImageSharp___parent___internal___mediaType"
  | "childImageSharp___parent___internal___owner"
  | "childImageSharp___parent___internal___type"
  | "childImageSharp___children"
  | "childImageSharp___children___id"
  | "childImageSharp___children___parent___id"
  | "childImageSharp___children___parent___children"
  | "childImageSharp___children___children"
  | "childImageSharp___children___children___id"
  | "childImageSharp___children___children___children"
  | "childImageSharp___children___internal___content"
  | "childImageSharp___children___internal___contentDigest"
  | "childImageSharp___children___internal___description"
  | "childImageSharp___children___internal___fieldOwners"
  | "childImageSharp___children___internal___ignoreType"
  | "childImageSharp___children___internal___mediaType"
  | "childImageSharp___children___internal___owner"
  | "childImageSharp___children___internal___type"
  | "childImageSharp___internal___content"
  | "childImageSharp___internal___contentDigest"
  | "childImageSharp___internal___description"
  | "childImageSharp___internal___fieldOwners"
  | "childImageSharp___internal___ignoreType"
  | "childImageSharp___internal___mediaType"
  | "childImageSharp___internal___owner"
  | "childImageSharp___internal___type"
  | "childrenCarsJson"
  | "childrenCarsJson___make"
  | "childrenCarsJson___slug"
  | "childrenCarsJson___title"
  | "childrenCarsJson___category"
  | "childrenCarsJson___category___id"
  | "childrenCarsJson___category___parent___id"
  | "childrenCarsJson___category___parent___children"
  | "childrenCarsJson___category___children"
  | "childrenCarsJson___category___children___id"
  | "childrenCarsJson___category___children___children"
  | "childrenCarsJson___category___internal___content"
  | "childrenCarsJson___category___internal___contentDigest"
  | "childrenCarsJson___category___internal___description"
  | "childrenCarsJson___category___internal___fieldOwners"
  | "childrenCarsJson___category___internal___ignoreType"
  | "childrenCarsJson___category___internal___mediaType"
  | "childrenCarsJson___category___internal___owner"
  | "childrenCarsJson___category___internal___type"
  | "childrenCarsJson___category___title"
  | "childrenCarsJson___category___carSlugs"
  | "childrenCarsJson___category___slug"
  | "childrenCarsJson___price"
  | "childrenCarsJson___info___Security_Deposit_"
  | "childrenCarsJson___info___Includes_"
  | "childrenCarsJson___info___Transmission_"
  | "childrenCarsJson___info___Seats_"
  | "childrenCarsJson___info___Engine_"
  | "childrenCarsJson___info____0_60mph_in_"
  | "childrenCarsJson___info___MSRP_"
  | "childrenCarsJson___info___Horse_Power_"
  | "childrenCarsJson___thumbnails"
  | "childrenCarsJson___thumbnails___name"
  | "childrenCarsJson___isSpecialOffer"
  | "childrenCarsJson___yt"
  | "childrenCarsJson___gatsbyPath"
  | "childrenCarsJson___id"
  | "childrenCarsJson___parent___id"
  | "childrenCarsJson___parent___parent___id"
  | "childrenCarsJson___parent___parent___children"
  | "childrenCarsJson___parent___children"
  | "childrenCarsJson___parent___children___id"
  | "childrenCarsJson___parent___children___children"
  | "childrenCarsJson___parent___internal___content"
  | "childrenCarsJson___parent___internal___contentDigest"
  | "childrenCarsJson___parent___internal___description"
  | "childrenCarsJson___parent___internal___fieldOwners"
  | "childrenCarsJson___parent___internal___ignoreType"
  | "childrenCarsJson___parent___internal___mediaType"
  | "childrenCarsJson___parent___internal___owner"
  | "childrenCarsJson___parent___internal___type"
  | "childrenCarsJson___children"
  | "childrenCarsJson___children___id"
  | "childrenCarsJson___children___parent___id"
  | "childrenCarsJson___children___parent___children"
  | "childrenCarsJson___children___children"
  | "childrenCarsJson___children___children___id"
  | "childrenCarsJson___children___children___children"
  | "childrenCarsJson___children___internal___content"
  | "childrenCarsJson___children___internal___contentDigest"
  | "childrenCarsJson___children___internal___description"
  | "childrenCarsJson___children___internal___fieldOwners"
  | "childrenCarsJson___children___internal___ignoreType"
  | "childrenCarsJson___children___internal___mediaType"
  | "childrenCarsJson___children___internal___owner"
  | "childrenCarsJson___children___internal___type"
  | "childrenCarsJson___internal___content"
  | "childrenCarsJson___internal___contentDigest"
  | "childrenCarsJson___internal___description"
  | "childrenCarsJson___internal___fieldOwners"
  | "childrenCarsJson___internal___ignoreType"
  | "childrenCarsJson___internal___mediaType"
  | "childrenCarsJson___internal___owner"
  | "childrenCarsJson___internal___type"
  | "childCarsJson___make"
  | "childCarsJson___slug"
  | "childCarsJson___title"
  | "childCarsJson___category"
  | "childCarsJson___category___id"
  | "childCarsJson___category___parent___id"
  | "childCarsJson___category___parent___children"
  | "childCarsJson___category___children"
  | "childCarsJson___category___children___id"
  | "childCarsJson___category___children___children"
  | "childCarsJson___category___internal___content"
  | "childCarsJson___category___internal___contentDigest"
  | "childCarsJson___category___internal___description"
  | "childCarsJson___category___internal___fieldOwners"
  | "childCarsJson___category___internal___ignoreType"
  | "childCarsJson___category___internal___mediaType"
  | "childCarsJson___category___internal___owner"
  | "childCarsJson___category___internal___type"
  | "childCarsJson___category___title"
  | "childCarsJson___category___carSlugs"
  | "childCarsJson___category___slug"
  | "childCarsJson___price"
  | "childCarsJson___info___Security_Deposit_"
  | "childCarsJson___info___Includes_"
  | "childCarsJson___info___Transmission_"
  | "childCarsJson___info___Seats_"
  | "childCarsJson___info___Engine_"
  | "childCarsJson___info____0_60mph_in_"
  | "childCarsJson___info___MSRP_"
  | "childCarsJson___info___Horse_Power_"
  | "childCarsJson___thumbnails"
  | "childCarsJson___thumbnails___name"
  | "childCarsJson___isSpecialOffer"
  | "childCarsJson___yt"
  | "childCarsJson___gatsbyPath"
  | "childCarsJson___id"
  | "childCarsJson___parent___id"
  | "childCarsJson___parent___parent___id"
  | "childCarsJson___parent___parent___children"
  | "childCarsJson___parent___children"
  | "childCarsJson___parent___children___id"
  | "childCarsJson___parent___children___children"
  | "childCarsJson___parent___internal___content"
  | "childCarsJson___parent___internal___contentDigest"
  | "childCarsJson___parent___internal___description"
  | "childCarsJson___parent___internal___fieldOwners"
  | "childCarsJson___parent___internal___ignoreType"
  | "childCarsJson___parent___internal___mediaType"
  | "childCarsJson___parent___internal___owner"
  | "childCarsJson___parent___internal___type"
  | "childCarsJson___children"
  | "childCarsJson___children___id"
  | "childCarsJson___children___parent___id"
  | "childCarsJson___children___parent___children"
  | "childCarsJson___children___children"
  | "childCarsJson___children___children___id"
  | "childCarsJson___children___children___children"
  | "childCarsJson___children___internal___content"
  | "childCarsJson___children___internal___contentDigest"
  | "childCarsJson___children___internal___description"
  | "childCarsJson___children___internal___fieldOwners"
  | "childCarsJson___children___internal___ignoreType"
  | "childCarsJson___children___internal___mediaType"
  | "childCarsJson___children___internal___owner"
  | "childCarsJson___children___internal___type"
  | "childCarsJson___internal___content"
  | "childCarsJson___internal___contentDigest"
  | "childCarsJson___internal___description"
  | "childCarsJson___internal___fieldOwners"
  | "childCarsJson___internal___ignoreType"
  | "childCarsJson___internal___mediaType"
  | "childCarsJson___internal___owner"
  | "childCarsJson___internal___type"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type FileGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<FileGroupConnection>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};

export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  childrenCarsJson?: InputMaybe<CarsJsonFilterListInput>;
  childCarsJson?: InputMaybe<CarsJsonFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum = "ASC" | "DESC";

export type DirectoryConnection = {
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | "sourceInstanceName"
  | "absolutePath"
  | "relativePath"
  | "extension"
  | "size"
  | "prettySize"
  | "modifiedTime"
  | "accessTime"
  | "changeTime"
  | "birthTime"
  | "root"
  | "dir"
  | "base"
  | "ext"
  | "name"
  | "relativeDirectory"
  | "dev"
  | "mode"
  | "nlink"
  | "uid"
  | "gid"
  | "rdev"
  | "ino"
  | "atimeMs"
  | "mtimeMs"
  | "ctimeMs"
  | "atime"
  | "mtime"
  | "ctime"
  | "birthtime"
  | "birthtimeMs"
  | "blksize"
  | "blocks"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type DirectoryGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFlagsFilterInput = {
  PRESERVE_WEBPACK_CACHE?: InputMaybe<BooleanQueryOperatorInput>;
  FAST_REFRESH?: InputMaybe<BooleanQueryOperatorInput>;
  QUERY_ON_DEMAND?: InputMaybe<BooleanQueryOperatorInput>;
  GRAPHQL_TYPEGEN?: InputMaybe<BooleanQueryOperatorInput>;
  FAST_DEV?: InputMaybe<BooleanQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | "buildTime"
  | "siteMetadata___title"
  | "siteMetadata___description"
  | "siteMetadata___siteUrl"
  | "port"
  | "host"
  | "flags___PRESERVE_WEBPACK_CACHE"
  | "flags___FAST_REFRESH"
  | "flags___QUERY_ON_DEMAND"
  | "flags___GRAPHQL_TYPEGEN"
  | "flags___FAST_DEV"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type SiteGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SiteGroupConnection>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};

export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  flags?: InputMaybe<SiteFlagsFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SiteFunctionGroupConnection>;
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | "functionRoute"
  | "pluginName"
  | "originalAbsoluteFilePath"
  | "originalRelativeFilePath"
  | "relativeCompiledFilePath"
  | "absoluteCompiledFilePath"
  | "matchPath"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type SiteFunctionGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: InputMaybe<SitePluginPackageJsonFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  base64Width?: InputMaybe<IntQueryOperatorInput>;
  stripMetadata?: InputMaybe<BooleanQueryOperatorInput>;
  defaultQuality?: InputMaybe<IntQueryOperatorInput>;
  failOnError?: InputMaybe<BooleanQueryOperatorInput>;
  fileName?: InputMaybe<StringQueryOperatorInput>;
  icon?: InputMaybe<StringQueryOperatorInput>;
  legacy?: InputMaybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: InputMaybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: InputMaybe<StringQueryOperatorInput>;
  crossOrigin?: InputMaybe<StringQueryOperatorInput>;
  include_favicon?: InputMaybe<BooleanQueryOperatorInput>;
  cacheDigest?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  specialChars?: InputMaybe<StringQueryOperatorInput>;
  pathCheck?: InputMaybe<BooleanQueryOperatorInput>;
  allExtensions?: InputMaybe<BooleanQueryOperatorInput>;
  isTSX?: InputMaybe<BooleanQueryOperatorInput>;
  jsxPragma?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  main?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  license?: InputMaybe<StringQueryOperatorInput>;
  dependencies?: InputMaybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: InputMaybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: InputMaybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: InputMaybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: InputMaybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: InputMaybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePageContextFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  _xparams?: InputMaybe<SitePageContext_XparamsFilterInput>;
  make?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePageContext_XparamsFilterInput = {
  slug?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | "path"
  | "component"
  | "internalComponentName"
  | "componentChunkName"
  | "matchPath"
  | "isCreatedByStatefulCreatePages"
  | "pluginCreator___resolve"
  | "pluginCreator___name"
  | "pluginCreator___version"
  | "pluginCreator___nodeAPIs"
  | "pluginCreator___browserAPIs"
  | "pluginCreator___ssrAPIs"
  | "pluginCreator___pluginFilepath"
  | "pluginCreator___pluginOptions___base64Width"
  | "pluginCreator___pluginOptions___stripMetadata"
  | "pluginCreator___pluginOptions___defaultQuality"
  | "pluginCreator___pluginOptions___failOnError"
  | "pluginCreator___pluginOptions___fileName"
  | "pluginCreator___pluginOptions___icon"
  | "pluginCreator___pluginOptions___legacy"
  | "pluginCreator___pluginOptions___theme_color_in_head"
  | "pluginCreator___pluginOptions___cache_busting_mode"
  | "pluginCreator___pluginOptions___crossOrigin"
  | "pluginCreator___pluginOptions___include_favicon"
  | "pluginCreator___pluginOptions___cacheDigest"
  | "pluginCreator___pluginOptions___name"
  | "pluginCreator___pluginOptions___path"
  | "pluginCreator___pluginOptions___specialChars"
  | "pluginCreator___pluginOptions___pathCheck"
  | "pluginCreator___pluginOptions___allExtensions"
  | "pluginCreator___pluginOptions___isTSX"
  | "pluginCreator___pluginOptions___jsxPragma"
  | "pluginCreator___packageJson___name"
  | "pluginCreator___packageJson___description"
  | "pluginCreator___packageJson___version"
  | "pluginCreator___packageJson___main"
  | "pluginCreator___packageJson___author"
  | "pluginCreator___packageJson___license"
  | "pluginCreator___packageJson___dependencies"
  | "pluginCreator___packageJson___dependencies___name"
  | "pluginCreator___packageJson___dependencies___version"
  | "pluginCreator___packageJson___devDependencies"
  | "pluginCreator___packageJson___devDependencies___name"
  | "pluginCreator___packageJson___devDependencies___version"
  | "pluginCreator___packageJson___peerDependencies"
  | "pluginCreator___packageJson___peerDependencies___name"
  | "pluginCreator___packageJson___peerDependencies___version"
  | "pluginCreator___packageJson___keywords"
  | "pluginCreator___id"
  | "pluginCreator___parent___id"
  | "pluginCreator___parent___parent___id"
  | "pluginCreator___parent___parent___children"
  | "pluginCreator___parent___children"
  | "pluginCreator___parent___children___id"
  | "pluginCreator___parent___children___children"
  | "pluginCreator___parent___internal___content"
  | "pluginCreator___parent___internal___contentDigest"
  | "pluginCreator___parent___internal___description"
  | "pluginCreator___parent___internal___fieldOwners"
  | "pluginCreator___parent___internal___ignoreType"
  | "pluginCreator___parent___internal___mediaType"
  | "pluginCreator___parent___internal___owner"
  | "pluginCreator___parent___internal___type"
  | "pluginCreator___children"
  | "pluginCreator___children___id"
  | "pluginCreator___children___parent___id"
  | "pluginCreator___children___parent___children"
  | "pluginCreator___children___children"
  | "pluginCreator___children___children___id"
  | "pluginCreator___children___children___children"
  | "pluginCreator___children___internal___content"
  | "pluginCreator___children___internal___contentDigest"
  | "pluginCreator___children___internal___description"
  | "pluginCreator___children___internal___fieldOwners"
  | "pluginCreator___children___internal___ignoreType"
  | "pluginCreator___children___internal___mediaType"
  | "pluginCreator___children___internal___owner"
  | "pluginCreator___children___internal___type"
  | "pluginCreator___internal___content"
  | "pluginCreator___internal___contentDigest"
  | "pluginCreator___internal___description"
  | "pluginCreator___internal___fieldOwners"
  | "pluginCreator___internal___ignoreType"
  | "pluginCreator___internal___mediaType"
  | "pluginCreator___internal___owner"
  | "pluginCreator___internal___type"
  | "pluginCreatorId"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "context___id"
  | "context___slug"
  | "context____xparams___slug"
  | "context___make";

export type SitePageGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SitePageGroupConnection>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages?: InputMaybe<BooleanQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  pluginCreatorId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  context?: InputMaybe<SitePageContextFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | "resolve"
  | "name"
  | "version"
  | "nodeAPIs"
  | "browserAPIs"
  | "ssrAPIs"
  | "pluginFilepath"
  | "pluginOptions___base64Width"
  | "pluginOptions___stripMetadata"
  | "pluginOptions___defaultQuality"
  | "pluginOptions___failOnError"
  | "pluginOptions___fileName"
  | "pluginOptions___icon"
  | "pluginOptions___legacy"
  | "pluginOptions___theme_color_in_head"
  | "pluginOptions___cache_busting_mode"
  | "pluginOptions___crossOrigin"
  | "pluginOptions___include_favicon"
  | "pluginOptions___cacheDigest"
  | "pluginOptions___name"
  | "pluginOptions___path"
  | "pluginOptions___specialChars"
  | "pluginOptions___pathCheck"
  | "pluginOptions___allExtensions"
  | "pluginOptions___isTSX"
  | "pluginOptions___jsxPragma"
  | "packageJson___name"
  | "packageJson___description"
  | "packageJson___version"
  | "packageJson___main"
  | "packageJson___author"
  | "packageJson___license"
  | "packageJson___dependencies"
  | "packageJson___dependencies___name"
  | "packageJson___dependencies___version"
  | "packageJson___devDependencies"
  | "packageJson___devDependencies___name"
  | "packageJson___devDependencies___version"
  | "packageJson___peerDependencies"
  | "packageJson___peerDependencies___name"
  | "packageJson___peerDependencies___version"
  | "packageJson___keywords"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type SitePluginGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | "buildTime"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | "fixed___base64"
  | "fixed___tracedSVG"
  | "fixed___aspectRatio"
  | "fixed___width"
  | "fixed___height"
  | "fixed___src"
  | "fixed___srcSet"
  | "fixed___srcWebp"
  | "fixed___srcSetWebp"
  | "fixed___originalName"
  | "fluid___base64"
  | "fluid___tracedSVG"
  | "fluid___aspectRatio"
  | "fluid___src"
  | "fluid___srcSet"
  | "fluid___srcWebp"
  | "fluid___srcSetWebp"
  | "fluid___sizes"
  | "fluid___originalImg"
  | "fluid___originalName"
  | "fluid___presentationWidth"
  | "fluid___presentationHeight"
  | "gatsbyImageData"
  | "original___width"
  | "original___height"
  | "original___src"
  | "resize___src"
  | "resize___tracedSVG"
  | "resize___width"
  | "resize___height"
  | "resize___aspectRatio"
  | "resize___originalName"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type ImageSharpGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CarsJsonConnection = {
  totalCount: Scalars["Int"];
  edges: Array<CarsJsonEdge>;
  nodes: Array<CarsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<CarsJsonGroupConnection>;
};

export type CarsJsonConnectionDistinctArgs = {
  field: CarsJsonFieldsEnum;
};

export type CarsJsonConnectionMaxArgs = {
  field: CarsJsonFieldsEnum;
};

export type CarsJsonConnectionMinArgs = {
  field: CarsJsonFieldsEnum;
};

export type CarsJsonConnectionSumArgs = {
  field: CarsJsonFieldsEnum;
};

export type CarsJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: CarsJsonFieldsEnum;
};

export type CarsJsonEdge = {
  next?: Maybe<CarsJson>;
  node: CarsJson;
  previous?: Maybe<CarsJson>;
};

export type CarsJsonFieldsEnum =
  | "make"
  | "slug"
  | "title"
  | "category"
  | "category___id"
  | "category___parent___id"
  | "category___parent___parent___id"
  | "category___parent___parent___children"
  | "category___parent___children"
  | "category___parent___children___id"
  | "category___parent___children___children"
  | "category___parent___internal___content"
  | "category___parent___internal___contentDigest"
  | "category___parent___internal___description"
  | "category___parent___internal___fieldOwners"
  | "category___parent___internal___ignoreType"
  | "category___parent___internal___mediaType"
  | "category___parent___internal___owner"
  | "category___parent___internal___type"
  | "category___children"
  | "category___children___id"
  | "category___children___parent___id"
  | "category___children___parent___children"
  | "category___children___children"
  | "category___children___children___id"
  | "category___children___children___children"
  | "category___children___internal___content"
  | "category___children___internal___contentDigest"
  | "category___children___internal___description"
  | "category___children___internal___fieldOwners"
  | "category___children___internal___ignoreType"
  | "category___children___internal___mediaType"
  | "category___children___internal___owner"
  | "category___children___internal___type"
  | "category___internal___content"
  | "category___internal___contentDigest"
  | "category___internal___description"
  | "category___internal___fieldOwners"
  | "category___internal___ignoreType"
  | "category___internal___mediaType"
  | "category___internal___owner"
  | "category___internal___type"
  | "category___title"
  | "category___carSlugs"
  | "category___slug"
  | "price"
  | "info___Security_Deposit_"
  | "info___Includes_"
  | "info___Transmission_"
  | "info___Seats_"
  | "info___Engine_"
  | "info____0_60mph_in_"
  | "info___MSRP_"
  | "info___Horse_Power_"
  | "thumbnails"
  | "thumbnails___name"
  | "isSpecialOffer"
  | "yt"
  | "gatsbyPath"
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type";

export type CarsJsonGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<CarsJsonEdge>;
  nodes: Array<CarsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<CarsJsonGroupConnection>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type CarsJsonGroupConnectionDistinctArgs = {
  field: CarsJsonFieldsEnum;
};

export type CarsJsonGroupConnectionMaxArgs = {
  field: CarsJsonFieldsEnum;
};

export type CarsJsonGroupConnectionMinArgs = {
  field: CarsJsonFieldsEnum;
};

export type CarsJsonGroupConnectionSumArgs = {
  field: CarsJsonFieldsEnum;
};

export type CarsJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: CarsJsonFieldsEnum;
};

export type CarsJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<CarsJsonFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type HomePageConnection = {
  totalCount: Scalars["Int"];
  edges: Array<HomePageEdge>;
  nodes: Array<HomePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<HomePageGroupConnection>;
};

export type HomePageConnectionDistinctArgs = {
  field: HomePageFieldsEnum;
};

export type HomePageConnectionMaxArgs = {
  field: HomePageFieldsEnum;
};

export type HomePageConnectionMinArgs = {
  field: HomePageFieldsEnum;
};

export type HomePageConnectionSumArgs = {
  field: HomePageFieldsEnum;
};

export type HomePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: HomePageFieldsEnum;
};

export type HomePageEdge = {
  next?: Maybe<HomePage>;
  node: HomePage;
  previous?: Maybe<HomePage>;
};

export type HomePageFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "b1"
  | "b2";

export type HomePageGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<HomePageEdge>;
  nodes: Array<HomePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<HomePageGroupConnection>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type HomePageGroupConnectionDistinctArgs = {
  field: HomePageFieldsEnum;
};

export type HomePageGroupConnectionMaxArgs = {
  field: HomePageFieldsEnum;
};

export type HomePageGroupConnectionMinArgs = {
  field: HomePageFieldsEnum;
};

export type HomePageGroupConnectionSumArgs = {
  field: HomePageFieldsEnum;
};

export type HomePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: HomePageFieldsEnum;
};

export type HomePageFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  b1?: InputMaybe<StringQueryOperatorInput>;
  b2?: InputMaybe<StringQueryOperatorInput>;
};

export type HomePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<HomePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type CarsJsonCategoryConnection = {
  totalCount: Scalars["Int"];
  edges: Array<CarsJsonCategoryEdge>;
  nodes: Array<CarsJsonCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<CarsJsonCategoryGroupConnection>;
};

export type CarsJsonCategoryConnectionDistinctArgs = {
  field: CarsJsonCategoryFieldsEnum;
};

export type CarsJsonCategoryConnectionMaxArgs = {
  field: CarsJsonCategoryFieldsEnum;
};

export type CarsJsonCategoryConnectionMinArgs = {
  field: CarsJsonCategoryFieldsEnum;
};

export type CarsJsonCategoryConnectionSumArgs = {
  field: CarsJsonCategoryFieldsEnum;
};

export type CarsJsonCategoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: CarsJsonCategoryFieldsEnum;
};

export type CarsJsonCategoryEdge = {
  next?: Maybe<CarsJsonCategory>;
  node: CarsJsonCategory;
  previous?: Maybe<CarsJsonCategory>;
};

export type CarsJsonCategoryFieldsEnum =
  | "id"
  | "parent___id"
  | "parent___parent___id"
  | "parent___parent___parent___id"
  | "parent___parent___parent___children"
  | "parent___parent___children"
  | "parent___parent___children___id"
  | "parent___parent___children___children"
  | "parent___parent___internal___content"
  | "parent___parent___internal___contentDigest"
  | "parent___parent___internal___description"
  | "parent___parent___internal___fieldOwners"
  | "parent___parent___internal___ignoreType"
  | "parent___parent___internal___mediaType"
  | "parent___parent___internal___owner"
  | "parent___parent___internal___type"
  | "parent___children"
  | "parent___children___id"
  | "parent___children___parent___id"
  | "parent___children___parent___children"
  | "parent___children___children"
  | "parent___children___children___id"
  | "parent___children___children___children"
  | "parent___children___internal___content"
  | "parent___children___internal___contentDigest"
  | "parent___children___internal___description"
  | "parent___children___internal___fieldOwners"
  | "parent___children___internal___ignoreType"
  | "parent___children___internal___mediaType"
  | "parent___children___internal___owner"
  | "parent___children___internal___type"
  | "parent___internal___content"
  | "parent___internal___contentDigest"
  | "parent___internal___description"
  | "parent___internal___fieldOwners"
  | "parent___internal___ignoreType"
  | "parent___internal___mediaType"
  | "parent___internal___owner"
  | "parent___internal___type"
  | "children"
  | "children___id"
  | "children___parent___id"
  | "children___parent___parent___id"
  | "children___parent___parent___children"
  | "children___parent___children"
  | "children___parent___children___id"
  | "children___parent___children___children"
  | "children___parent___internal___content"
  | "children___parent___internal___contentDigest"
  | "children___parent___internal___description"
  | "children___parent___internal___fieldOwners"
  | "children___parent___internal___ignoreType"
  | "children___parent___internal___mediaType"
  | "children___parent___internal___owner"
  | "children___parent___internal___type"
  | "children___children"
  | "children___children___id"
  | "children___children___parent___id"
  | "children___children___parent___children"
  | "children___children___children"
  | "children___children___children___id"
  | "children___children___children___children"
  | "children___children___internal___content"
  | "children___children___internal___contentDigest"
  | "children___children___internal___description"
  | "children___children___internal___fieldOwners"
  | "children___children___internal___ignoreType"
  | "children___children___internal___mediaType"
  | "children___children___internal___owner"
  | "children___children___internal___type"
  | "children___internal___content"
  | "children___internal___contentDigest"
  | "children___internal___description"
  | "children___internal___fieldOwners"
  | "children___internal___ignoreType"
  | "children___internal___mediaType"
  | "children___internal___owner"
  | "children___internal___type"
  | "internal___content"
  | "internal___contentDigest"
  | "internal___description"
  | "internal___fieldOwners"
  | "internal___ignoreType"
  | "internal___mediaType"
  | "internal___owner"
  | "internal___type"
  | "title"
  | "carSlugs"
  | "slug";

export type CarsJsonCategoryGroupConnection = {
  totalCount: Scalars["Int"];
  edges: Array<CarsJsonCategoryEdge>;
  nodes: Array<CarsJsonCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  max?: Maybe<Scalars["Float"]>;
  min?: Maybe<Scalars["Float"]>;
  sum?: Maybe<Scalars["Float"]>;
  group: Array<CarsJsonCategoryGroupConnection>;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type CarsJsonCategoryGroupConnectionDistinctArgs = {
  field: CarsJsonCategoryFieldsEnum;
};

export type CarsJsonCategoryGroupConnectionMaxArgs = {
  field: CarsJsonCategoryFieldsEnum;
};

export type CarsJsonCategoryGroupConnectionMinArgs = {
  field: CarsJsonCategoryFieldsEnum;
};

export type CarsJsonCategoryGroupConnectionSumArgs = {
  field: CarsJsonCategoryFieldsEnum;
};

export type CarsJsonCategoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  field: CarsJsonCategoryFieldsEnum;
};

export type CarsJsonCategorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<CarsJsonCategoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>;

export type Unnamed_1_Query = {
  home?: { b1?: string | null; b2?: string | null } | null;
  ytRentCar?: {
    childImageSharp?: { resize?: { src?: string | null } | null } | null;
  } | null;
  ytCoupleRentCar?: {
    childImageSharp?: { resize?: { src?: string | null } | null } | null;
  } | null;
  ytInstagramCars?: {
    childImageSharp?: { resize?: { src?: string | null } | null } | null;
  } | null;
  cars: {
    nodes: Array<{
      title?: string | null;
      slug?: string | null;
      price?: number | null;
      isSpecialOffer?: boolean | null;
      make?: string | null;
      image?: { childImageSharp?: { gatsbyImageData: any } | null } | null;
    }>;
  };
};

export type CarQueryQueryVariables = Exact<{
  make: Scalars["String"];
  slug: Scalars["String"];
}>;

export type CarQueryQuery = {
  car?: {
    title?: string | null;
    slug?: string | null;
    price?: number | null;
    yt?: string | null;
    info?: {
      security?: string | null;
      Includes?: string | null;
      Transmission?: string | null;
      Seats?: string | null;
      Engine?: string | null;
      mph?: string | null;
      MSRP?: string | null;
      hp?: string | null;
    } | null;
    image?: { childImageSharp?: { gatsbyImageData: any } | null } | null;
    mainThumbnail?: {
      childImageSharp?: { gatsbyImageData: any } | null;
    } | null;
    thumbnails?: Array<{
      main?: { childImageSharp?: { gatsbyImageData: any } | null } | null;
      small?: { childImageSharp?: { gatsbyImageData: any } | null } | null;
    } | null> | null;
  } | null;
  ytRentCar?: {
    childImageSharp?: { resize?: { src?: string | null } | null } | null;
  } | null;
  ytCoupleRentCar?: {
    childImageSharp?: { resize?: { src?: string | null } | null } | null;
  } | null;
  sameMakeCars: {
    nodes: Array<{
      title?: string | null;
      slug?: string | null;
      price?: number | null;
      isSpecialOffer?: boolean | null;
      make?: string | null;
      image?: { childImageSharp?: { gatsbyImageData: any } | null } | null;
    }>;
  };
};

export type GatsbyImageSharpFixedFragment = {
  base64?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  tracedSVG?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebpFragment = {
  base64?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  tracedSVG?: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  width: number;
  height: number;
  src: string;
  srcSet: string;
};

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  width: number;
  height: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
};

export type GatsbyImageSharpFluidFragment = {
  base64?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  maxHeight: number;
  maxWidth: number;
};

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  tracedSVG?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebpFragment = {
  base64?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  tracedSVG?: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp?: string | null;
  srcSetWebp?: string | null;
  sizes: string;
};
