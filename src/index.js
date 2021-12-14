import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  CodePane,
  ListItem,
  FullScreen,
  Progress,
  Slide,
  Deck,
  Text,
  Box,
  Notes,
  Link,
  Appear,
} from "spectacle";

// SPECTACLE_CLI_THEME_START
const theme = {
  colors: {
    primary: "#fff",
    secondary: "#2cd5c4",
    tertiary: "#0b2f61",
    quaternary: "#d8ffab",
    senary: "#0b2f61",
    septenary: "#452861",
    octonary: "#2cd5c4",
  },
  fonts: {
    header: '"Roboto Condensed", "Avenir Next", sans-serif',
    text: "system-ui, sans-serif",
  },
};
// SPECTACLE_CLI_THEME_END

import nodeModulesMeme from "../public/node_modules.png";
import bgTheEnd from "../public/end.webp";
import bgIntro from "../public/bg.webp";
import bgAmorelie from "../public/amorelie.webp";
import bgBath from "../public/bg2.webp";
import magentoMeme from "../public/magento.jpg";

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
  <>
    <Slide
      backgroundImage={`url(${bgIntro})`}
      backgroundSize="cover"
      backgroundOpacity="0.4"
    >
      <FlexBox flexDirection="column" justifyItems="center" height="100vh">
        <Heading style={{ textShadow: "10px 0px 30px rgba(0, 0, 0, 0.75)" }}>
          FRONTEND TECH STACK FOR A MODERN ECOMMERCE: FROM MAGENTO TO HEADLESS
        </Heading>
        <Appear>
          <Text
            textAlign="center"
            style={{ textShadow: "10px 0px 30px rgba(0, 0, 0, 0.75)" }}
          >
            An overview to the future of our next generation frontend
            architecture at Amorelie.
          </Text>
        </Appear>
      </FlexBox>
      <Notes>
        Spectacle supports notes per slide.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
        </ol>
      </Notes>
    </Slide>
    <Slide>
      <Heading>$ WHOAMI</Heading>
      <Text>
        My name is{" "}
        <Link href="//diego.earth" target="_blank" rel="external">
          Diego
        </Link>
        . I first got into web dev in the early 2000’s, and only as I type this
        sentence do I realize how long ago that was.
      </Text>
      <Text>
        Back then <CodeSpan>{"<HTML/>"}</CodeSpan> tags were written all in
        caps, layouts were built using <CodeSpan>{"<TABLES/>"}</CodeSpan> and
        transparent PNGs weren’t supported for most browsers 😅.
      </Text>
      <CodePane language="html">{`
        <BODY>
          <TABLE WIDTH=100% BORDER=0 CELLSPACING=8 CELLPADDING=0>
              <TR>
                  <TD COLSPAN=2><!--#include virtual="/header.html" --></TD>
              </TR>
              <TR>
                  <TD WIDTH=20%><!--#include virtual="/navigation.html" --></TD>
                  <TD>(actual page content goes here)</TD>
              </TR>
          </TABLE>
        </BODY>
      `}</CodePane>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>WHICH TECH STACK ARE WE GONNA REVIEW TODAY?</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            <Link href="//webpack.js.org" target="_blank" rel="external">
              Webpack
            </Link>{" "}
            for <strong>bundling</strong> our javascript libraries and
            stylesheets
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <Link href="//reactjs.org" target="_blank" rel="external">
              React
            </Link>{" "}
            and{" "}
            <Link href="//storybook.js.org" target="_blank" rel="external">
              Storybook
            </Link>{" "}
            for <strong>building and showcasing</strong> our component library
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            And{" "}
            <Link href="//storybook.js.org" target="_blank" rel="external">
              Next.js
            </Link>{" "}
            to <strong>smash it all together</strong>
          </ListItem>
        </Appear>
      </UnorderedList>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>BUT BEFORE WE TALK ABOUT THE FUTURE...</Heading>
      <Text>
        ... let’s have a quick look of our current frontend stack, some of the
        struggles that the frontend team is going through and let’s talk about
        the developer experience of adding or maintaining features in our
        current storefront codebase.
      </Text>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>OUR CURRENT STACK</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Linux, Nginx, MySQL, PHP (LEMP stack) to run{" "}
            <Link href="//magento.com" target="_blank" rel="external">
              Magento 2
            </Link>{" "}
            📦 (most of the time through Docker 🐳) for local development 👨🏻‍💻
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>HTML and CSS preprossed with LESS</ListItem>
        </Appear>
        <Appear>
          <ListItem>jQuery and Knockout</ListItem>
        </Appear>
        <Appear>
          <ListItem>Grunt</ListItem>
        </Appear>
      </UnorderedList>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>THE CHALLENGES THAT WE FACE TODAY</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Our storefront is a <strong>monolith application</strong> based on
            PHP where the frontend architecture relies entirely on Magento 2 and
            its internal building tools, templating and rendering engines
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            The development cycle along with the CI/CD strategy for{" "}
            <strong>
              frontend is tied to the backend and its infrastructure
            </strong>
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Improving the <strong>performance (CWV), SEO and the UX</strong> of
            our storefront is hard
          </ListItem>
        </Appear>
      </UnorderedList>
    </Slide>
    <Slide backgroundImage={`url(${magentoMeme})`} backgroundSize="contain"></Slide>
    <Slide>
      <Heading>GRUNT VS WEBPACK</Heading>
      <Text>
        In the past, you’ve needed to use several tools to automate the
        development process, e.g. Browserify + Gulp or Grunt + a lot of plugins.
        Webpack is powerful enough to do what all these tools combined can do
        and more!
      </Text>
      <Notes></Notes>
    </Slide>
    <Slide
      backgroundImage={`url(${nodeModulesMeme})`}
      backgroundSize="contain"
      backgroundColor="white"
    ></Slide>
    <Slide>
      <Heading>THE BENEFITS OF USING WEBPACK</Heading>
      <UnorderedList>
        <Appear>
          <ListItem>
            Detect the code you don’t use to exclude it while combining files
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Serialize the code and load it only when it’s necessary
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Monitor file alterations</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Transpile code to ES5 (thanks to{" "}
            <Link href="//babeljs.io" target="_blank" rel="external">
              Babel
            </Link>{" "}
            plugins for webpack)
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Start a web server 🚀</ListItem>
        </Appear>
      </UnorderedList>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>REACT, NEXT.JS AND TYPESCRIPT</Heading>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>STORYBOOK.JS</Heading>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>PERFORMANCE AND SEO</Heading>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>USER EXPERIENCE</Heading>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>DEVELOPER EXPERIENCE</Heading>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>REFERENCES</Heading>
      <UnorderedList>
        <ListItem>
          Getting Started guides for:{" "}
          <Link
            href="//webpack.js.org/guides/getting-started"
            target="_blank"
            rel="external"
          >
            Webpack
          </Link>
          ,{" "}
          <Link
            href="//reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="external"
          >
            React.js
          </Link>{" "}
          and{" "}
          <Link
            href="//nextjs.org/docs/getting-started"
            target="_blank"
            rel="external"
          >
            Next.js
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="//www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
            target="_blank"
            rel="external"
          >
            Typescript for Javascript programmers
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="//storybook.js.org/docs/react/get-started/install"
            target="_blank"
            rel="external"
          >
            Install Storybook
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="//vercel.com/guides/deploying-nextjs-with-vercel"
            target="_blank"
            rel="external"
          >
            Getting Started with Next.js and Vercel
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="//docs.frontastic.cloud/docs"
            target="_blank"
            rel="external"
          >
            What's Frontastic Cloud?
          </Link>
        </ListItem>
      </UnorderedList>
      <Notes></Notes>
    </Slide>
    <Slide>
      <Heading>LINKS & RESOURCES</Heading>
      <UnorderedList>
        <ListItem>
          <Link
            href="https://rauchg.com/2014/7-principles-of-rich-web-applications"
            target="_blank"
            rel="external"
          >
            7 Principles of Rich Web Applications
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://rauchg.com/2015/pure-ui"
            target="_blank"
            rel="external"
          >
            Pure UI
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.youtube.com/watch?v=Sklc_fQBmcs"
            target="_blank"
            rel="external"
          >
            Next.js in 100 Seconds // Plus Full Beginner's Tutorial
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.youtube.com/watch?v=Tn6-PIqc4UM"
            target="_blank"
            rel="external"
          >
            React in 100 Seconds
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.youtube.com/watch?v=zQnBQ4tB3ZA"
            target="_blank"
            rel="external"
          >
            TypeScript in 100 Second
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.youtube.com/watch?v=5IG4UmULyoA"
            target="_blank"
            rel="external"
          >
            Module Bundlers Explained... Webpack, Rollup, Parcel, and Snowpack
          </Link>
        </ListItem>
      </UnorderedList>
      <Notes></Notes>
    </Slide>
    <Slide
      backgroundImage={`url(${bgTheEnd})`}
      backgroundSize="cover"
      backgroundColor="white"
    ></Slide>
    <Slide
      backgroundImage={`url(${bgAmorelie})`}
      backgroundSize="cover"
      backgroundOpacity="0.4"
    >
      <FlexBox flexDirection="column" justifyItems="center" height="100vh">
        <Heading style={{ textShadow: "10px 0px 30px rgba(0, 0, 0, 0.75)" }}>QUESTIONS? 🙋🏻‍♀️</Heading>
      </FlexBox>
      <Notes></Notes>
    </Slide>
    <Slide>
      <FlexBox flexDirection="column" justifyItems="center" height="100vh">
        <Heading>💖 THANK YOU FOR LISTENING...</Heading>
        <Text>
          Slides: <Link href="/">frontend-at-amorelie.vercel.app</Link>
          <br />
          Source code:{" "}
          <Link
            href="//github.com/spacecowb0y/frontend-at-amorelie"
            target="_blank"
            rel="external"
          >
            github.com/spacecowb0y/frontend-at-amorelie
          </Link>
        </Text>
      </FlexBox>
      <Notes></Notes>
    </Slide>
    <Slide
      backgroundImage={`url(${bgBath})`}
      backgroundSize="cover"
      backgroundOpacity="0.4"
    >
      <FlexBox flexDirection="column" justifyItems="center" height="100vh">
        <Heading style={{ textShadow: "10px 0px 30px rgba(0, 0, 0, 0.75)" }}>
          ...AND HAPPY CODING!
        </Heading>
      </FlexBox>
    </Slide>
  </>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>
    <SlideFragments />
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
